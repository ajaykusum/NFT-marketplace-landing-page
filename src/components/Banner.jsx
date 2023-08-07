import React from "react";

const Banner = () => {
  return (
    <>
      <section className="section hero" aria-label="home">
        <div className="container">
          <h1 className="headline-lg hero-title">
          Welcome to our NFT Marketplace!{" "}
            {/* <span className="span"></span> */}
          </h1>

          <p className="section-text body-lg">
          Discover a world of unique digital assets on our 
          cutting-edge NFT platform. We are a vibrant community 
          of creators, collectors, and enthusiasts, empowering 
          artists to tokenize their digital creations and connect
           directly with their audience.
          </p>

          <a href="#" className="btn">
            Explore now
          </a>
        </div>
      </section>
    </>
  );
};

export default Banner;
