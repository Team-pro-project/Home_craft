import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router";
import ProductCard from "../../components/ProductCard";
import ProductShowcase from "../../components/ProductShowcase";
import Intro from "../../components/home/Intro";
import "./Home.css";

// Sample Data
const featuredProducts = [
  {
    id: 1,
    name: "Faux Leather Sofa Caramel",
    price: 129,
    image:
      "https://media.gettyimages.com/id/1357529933/fr/photo/image-g%C3%A9n%C3%A9r%C3%A9e-num%C3%A9riquement-dun-salon-enti%C3%A8rement-meubl%C3%A9.jpg?s=612x612&w=0&k=20&c=j_ROCDqG937PX7ROBnwkP2l8TfJWHePNs_ADJytZVNE=",
    colors: ["#D2B48C", "#8B4513"],
  },
  {
    id: 2,
    name: "Bouclé Accent Chair",
    price: 44,
    image:
      "https://media.gettyimages.com/id/1357529933/fr/photo/image-g%C3%A9n%C3%A9r%C3%A9e-num%C3%A9riquement-dun-salon-enti%C3%A8rement-meubl%C3%A9.jpg?s=612x612&w=0&k=20&c=j_ROCDqG937PX7ROBnwkP2l8TfJWHePNs_ADJytZVNE=",
    colors: ["#87CEEB", "#808080"],
  },
  {
    id: 3,
    name: "Ceramic Flower Vase",
    price: 8,
    image:
      "https://media.gettyimages.com/id/1357529933/fr/photo/image-g%C3%A9n%C3%A9r%C3%A9e-num%C3%A9riquement-dun-salon-enti%C3%A8rement-meubl%C3%A9.jpg?s=612x612&w=0&k=20&c=j_ROCDqG937PX7ROBnwkP2l8TfJWHePNs_ADJytZVNE=",
    colors: ["#F5F5DC"],
  },
  {
    id: 4,
    name: "Modern Fabric Accent Chair",
    price: 38,
    image:
      "https://media.gettyimages.com/id/1357529933/fr/photo/image-g%C3%A9n%C3%A9r%C3%A9e-num%C3%A9riquement-dun-salon-enti%C3%A8rement-meubl%C3%A9.jpg?s=612x612&w=0&k=20&c=j_ROCDqG937PX7ROBnwkP2l8TfJWHePNs_ADJytZVNE=",
    colors: ["#D3D3D3", "#808080"],
  },
];

// Add more sample products for the different sections
const topProducts = [
  {
    id: 5,
    name: "Faux Leather Sofa Caramel",
    price: 129,
    image:
      "https://media.gettyimages.com/id/1357529933/fr/photo/image-g%C3%A9n%C3%A9r%C3%A9e-num%C3%A9riquement-dun-salon-enti%C3%A8rement-meubl%C3%A9.jpg?s=612x612&w=0&k=20&c=j_ROCDqG937PX7ROBnwkP2l8TfJWHePNs_ADJytZVNE=",
  },
  {
    id: 6,
    name: "Bouclé Accent Chair",
    price: 44,
    image:
      "https://media.gettyimages.com/id/1357529933/fr/photo/image-g%C3%A9n%C3%A9r%C3%A9e-num%C3%A9riquement-dun-salon-enti%C3%A8rement-meubl%C3%A9.jpg?s=612x612&w=0&k=20&c=j_ROCDqG937PX7ROBnwkP2l8TfJWHePNs_ADJytZVNE=",
  },
  {
    id: 7,
    name: "Ceramic Flower Vase",
    price: 8,
    image:
      "https://media.gettyimages.com/id/1357529933/fr/photo/image-g%C3%A9n%C3%A9r%C3%A9e-num%C3%A9riquement-dun-salon-enti%C3%A8rement-meubl%C3%A9.jpg?s=612x612&w=0&k=20&c=j_ROCDqG937PX7ROBnwkP2l8TfJWHePNs_ADJytZVNE=",
  },
  {
    id: 8,
    name: "Modern Fabric Accent Chair",
    price: 38,
    image:
      "https://media.gettyimages.com/id/1357529933/fr/photo/image-g%C3%A9n%C3%A9r%C3%A9e-num%C3%A9riquement-dun-salon-enti%C3%A8rement-meubl%C3%A9.jpg?s=612x612&w=0&k=20&c=j_ROCDqG937PX7ROBnwkP2l8TfJWHePNs_ADJytZVNE=",
  },
];

const newArrivals = [...featuredProducts].map((product, index) => ({
  ...product,
  id: product.id + 10,
  name: `New ${product.name}`
}));

const categories = [
  {
    id: 1,
    name: "Sitting Room",
    image:
      "https://media.gettyimages.com/id/1357529933/fr/photo/image-g%C3%A9n%C3%A9r%C3%A9e-num%C3%A9riquement-dun-salon-enti%C3%A8rement-meubl%C3%A9.jpg?s=612x612&w=0&k=20&c=j_ROCDqG937PX7ROBnwkP2l8TfJWHePNs_ADJytZVNE=",
    link: "/category/sitting-room",
  },
  {
    id: 2,
    name: "Accessories",
    image:
      "https://media.gettyimages.com/id/1357529933/fr/photo/image-g%C3%A9n%C3%A9r%C3%A9e-num%C3%A9riquement-dun-salon-enti%C3%A8rement-meubl%C3%A9.jpg?s=612x612&w=0&k=20&c=j_ROCDqG937PX7ROBnwkP2l8TfJWHePNs_ADJytZVNE=",
    link: "/category/accessories",
  },
  {
    id: 3,
    name: "Kitchen",
    image:
      "https://media.gettyimages.com/id/1357529933/fr/photo/image-g%C3%A9n%C3%A9r%C3%A9e-num%C3%A9riquement-dun-salon-enti%C3%A8rement-meubl%C3%A9.jpg?s=612x612&w=0&k=20&c=j_ROCDqG937PX7ROBnwkP2l8TfJWHePNs_ADJytZVNE=",
    link: "/category/kitchen",
  },
  {
    id: 4,
    name: "Bedroom",
    image:
      "https://media.gettyimages.com/id/1357529933/fr/photo/image-g%C3%A9n%C3%A9r%C3%A9e-num%C3%A9riquement-dun-salon-enti%C3%A8rement-meubl%C3%A9.jpg?s=612x612&w=0&k=20&c=j_ROCDqG937PX7ROBnwkP2l8TfJWHePNs_ADJytZVNE=",
    link: "/category/bedroom",
  },
];

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <Intro />

      {/* Top Products Showcase */}
      <ProductShowcase 
        title="Top Products" 
        products={topProducts} 
        viewAllLink="/shop" 
      />

      {/* Featured Products */}
      <section className="featured-products py-5">
        <Container>
          <div className="section-header text-center mb-5">
            <h2 className="display-6 mb-3">Featured Products</h2>
            <p className="text-muted">Discover our hand-picked selection of quality home décor</p>
          </div>
          <Row className="g-4">
            {featuredProducts.map((product) => (
              <Col key={product.id} xs={12} sm={6} md={3}>
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>
          <div className="text-center mt-4">
            <Link to="/shop" className="btn btn-outline-primary px-4">
              View All Products
            </Link>
          </div>
        </Container>
      </section>

      {/* Design Inspiration Section */}
      <section className="design-inspiration py-5 bg-light">
        <Container>
          <div className="section-header text-center mb-5">
            <h2 className="display-6 mb-3">Design Inspiration & Home Ideas</h2>
            <p className="text-muted">Get inspired with our curated collections and design tips</p>
          </div>
          
          <Row className="g-4">
            <Col md={6}>
              <div className="inspiration-card position-relative rounded overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvbWUlMjBkZWNvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                  alt="Living Room Ideas"
                  className="img-fluid"
                />
                <div className="inspiration-overlay d-flex flex-column justify-content-end p-4">
                  <h3 className="text-white mb-2">Living Room Ideas</h3>
                  <p className="text-white-50 mb-3">Transform your living space into a stylish and comfortable retreat</p>
                  <Link to="/inspiration/living-room" className="btn btn-outline-light">
                    Explore Ideas
                  </Link>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="inspiration-card position-relative rounded overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1615529182904-14819c35db37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGtpdGNoZW58ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                  alt="Kitchen & Dining"
                  className="img-fluid"
                />
                <div className="inspiration-overlay d-flex flex-column justify-content-end p-4">
                  <h3 className="text-white mb-2">Kitchen & Dining</h3>
                  <p className="text-white-50 mb-3">Create a functional and beautiful space for cooking and entertaining</p>
                  <Link to="/inspiration/kitchen" className="btn btn-outline-light">
                    Explore Ideas
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* New Arrivals */}
      <ProductShowcase 
        title="New Arrivals" 
        products={newArrivals} 
        viewAllLink="/shop/new" 
      />

      {/* Newsletter Section */}
      <section className="newsletter-section py-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6}>
              <div className="text-center">
                <h2 className="display-6 mb-3">Join Our Newsletter</h2>
                <p className="text-muted mb-4">
                  Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
                </p>
                <div className="input-group mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your email address"
                    aria-label="Your email address"
                  />
                  <Button variant="primary">Subscribe</Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;
