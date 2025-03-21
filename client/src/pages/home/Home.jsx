import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router";
import ProductCard from "../../components/ProductCard";
import Intro from "../../components/home/Intro";

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
    colors: ["#1E90FF", "#000000"],
  },
];

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
    <>
      <section className="hero-section text-center">
        <Intro />
      </section>

      <Container fluid className="px-3">
        {/* Categories */}
        <section className="mb-4">
          <h2 className="section-title text-center">Categories</h2>
          <Row className="g-3">
            {categories.map((category) => (
              <Col key={category.id} xs={12} sm={6} md={4} lg={3}>
                <Link to={category.link} className="text-decoration-none">
                  <div className="category-card rounded shadow-sm">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="img-fluid rounded"
                    />
                    <div className="text-center py-2">
                      <h3 className="h6 mb-0">{category.name}</h3>
                      <small className="text-muted">Shop Now →</small>
                    </div>
                  </div>
                </Link>
              </Col>
            ))}
          </Row>
        </section>

        {/* Featured Products */}
        <section className="mb-4">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h2 className="section-title">Top Products</h2>
            <Link to="/shop" className="text-decoration-none text-dark fw-bold">
              View All →
            </Link>
          </div>
          <Row className="g-3">
            {featuredProducts.map((product) => (
              <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>
        </section>

        {/* Inspiration Gallery */}
        <section className="mb-4 text-center">
          <h2 className="section-title">Design Inspiration & Home Ideas</h2>
          <Row className="g-2">
            {[...Array(6)].map((_, index) => (
              <Col key={index} xs={6} sm={4} md={2}>
                <img
                  src="https://media.gettyimages.com/id/1357529933/fr/photo/image-g%C3%A9n%C3%A9r%C3%A9e-num%C3%A9riquement-dun-salon-enti%C3%A8rement-meubl%C3%A9.jpg?s=612x612&w=0&k=20&c=j_ROCDqG937PX7ROBnwkP2l8TfJWHePNs_ADJytZVNE="
                  alt="Inspiration"
                  className="img-fluid rounded"
                />
              </Col>
            ))}
          </Row>
          <div className="mt-3">
            <Button variant="outline-dark">Show More</Button>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-4">
          <h2 className="section-title text-center">We’ve Got the Answers</h2>
          <div className="accordion" id="faqAccordion">
            {[
              "What types of furniture do you offer?",
              "Do you offer international shipping?",
              "What is your return policy?",
              "What payment methods do you accept?",
            ].map((question, index) => (
              <div key={index} className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${index}`}
                  >
                    {question}
                  </button>
                </h2>
                <div
                  id={`collapse${index}`}
                  className="accordion-collapse collapse"
                >
                  <div className="accordion-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </>
  );
};

export default Home;
