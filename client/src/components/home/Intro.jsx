import React from "react";

const Intro = () => {
  return (
    <section className="text-center py-5">
      {/* Text Content */}
      <p className="text-uppercase text-muted fw-bold">Furniture Store</p>
      <h1 className="fw-bold display-4">
        Explore the Elegance of Modern <br />
        Home Furnishings
      </h1>
      <h6
  style={{
    color: "#6A4E3C",
    fontSize: "18px",
    textAlign: "center",
    lineHeight: "1.6",
    margin: "0 auto",
    maxWidth: "80%", // Ensures text wraps to 2 lines
    whiteSpace: "normal",
  }}
>
  Indulge in the perfect blend of style, comfort, and sophistication, where
  innovative design seamlessly integrates with luxurious relaxation in every
  meticulously crafted piece.
</h6>


      {/* Image */}
      <div className="mt-4">
        <img
          src="https://media.gettyimages.com/id/1357529933/fr/photo/image-g%C3%A9n%C3%A9r%C3%A9e-num%C3%A9riquement-dun-salon-enti%C3%A8rement-meubl%C3%A9.jpg?s=612x612&w=0&k=20&c=j_ROCDqG937PX7ROBnwkP2l8TfJWHePNs_ADJytZVNE="
          alt="Modern Sofa"
          className="img-fluid rounded"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>
    </section>
  );
};

export default Intro;
