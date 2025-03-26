const { Order, User, Product } = require('../database/sequelize/index');

module.exports = {
    getAll: async (req, res) => {
        try {
            console.log("Fetching all orders...");
            const orders = await Order.findAll({
                include: [
                    {
                        model: User,
                        attributes: ['name', 'email']
                    },
                    {
                        model: Product,
                        attributes: ['name', 'price']
                    }
                ],
                order: [['createdAt', 'DESC']]
            });
            console.log(`Found ${orders.length} orders`);
            res.json(orders);
        } catch (error) {
            console.error("Error fetching orders:", error);
            res.status(500).json({ 
                error: error.message,
                stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
            });
        }
    },

    getById: async (req, res) => {
        try {
            const { id } = req.params;
            console.log(`Fetching order with ID: ${id}`);
            const order = await Order.findOne({
                where: { id },
                include: [
                    {
                        model: User,
                        attributes: ['name', 'email']
                    },
                    {
                        model: Product,
                        attributes: ['name', 'price']
                    }
                ]
            });
            if (!order) {
                return res.status(404).json({ message: 'Order not found' });
            }
            res.json(order);
        } catch (error) {
            console.error("Error fetching order:", error);
            res.status(500).json({ 
                error: error.message,
                stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
            });
        }
    },

    create: async (req, res) => {
        try {
            console.log("Creating new order:", req.body);
            const order = await Order.create(req.body);
            res.status(201).json(order);
        } catch (error) {
            console.error("Error creating order:", error);
            res.status(400).json({ 
                error: error.message,
                stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
            });
        }
    },

    update: async (req, res) => {
        try {
            const { id } = req.params;
            console.log(`Updating order with ID: ${id}`);
            const order = await Order.findByPk(id);
            if (!order) {
                return res.status(404).json({ message: 'Order not found' });
            }
            await order.update(req.body);
            res.json(order);
        } catch (error) {
            console.error("Error updating order:", error);
            res.status(400).json({ 
                error: error.message,
                stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
            });
        }
    },

    delete: async (req, res) => {
        try {
            const { id } = req.params;
            console.log(`Deleting order with ID: ${id}`);
            const order = await Order.findByPk(id);
            if (!order) {
                return res.status(404).json({ message: 'Order not found' });
            }
            await order.destroy();
            res.json({ message: 'Order deleted successfully' });
        } catch (error) {
            console.error("Error deleting order:", error);
            res.status(500).json({ 
                error: error.message,
                stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
            });
        }
    }
}; 