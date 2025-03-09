import React from "react";

const Home = () => {
  return (
    <section className="hero-section bg-primary text-white text-center py-5">
      <div className="container">
        <h1 className="display-4">Welcome to My Website</h1>
        <p className="lead">
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <a href="#!" className="btn btn-light btn-lg">
          Learn More
        </a>
      </div>
    </section>
  );
};

export default Home;