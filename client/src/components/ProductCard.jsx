import { Card, Button } from "react-bootstrap"
import { Link } from "react-router"
import { FaShoppingCart } from "react-icons/fa"

const ProductCard = ({ product }) => {
  const { id, name, price, image, colors } = product

  return (
    <Card className="product-card h-100">
      <Link to={`/product/${id}`} className="text-decoration-none">
        <Card.Img variant="top" src={image} alt={name} />
      </Link>
      <Card.Body className="d-flex flex-column">
        <div className="d-flex justify-content-between align-items-start mb-2">
          <Link to={`/product/${id}`} className="text-decoration-none text-dark">
            <Card.Title className="product-title">{name}</Card.Title>
          </Link>
          <Card.Text className="product-price">${price}</Card.Text>
        </div>
        <div className="mb-3">
          {colors &&
            colors.map((color, index) => (
              <span key={index} className="color-option" style={{ backgroundColor: color }} title={color}></span>
            ))}
        </div>
        <Button variant="outline-primary" className="mt-auto d-flex align-items-center justify-content-center">
          <FaShoppingCart className="me-2" /> Add to cart
        </Button>
      </Card.Body>
    </Card>
  )
}

export default ProductCard

