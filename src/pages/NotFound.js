import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="error-section text-center py-5">
      <div className="container">
        <h1 className="display-1">404</h1>
        <h2 className="display-4">Page Not Found</h2>
        <p className="lead">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn btn-primary btn-lg">
          Go Back to Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;