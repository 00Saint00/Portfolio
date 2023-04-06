import React from "react";
import Banner from "../Banner";

import Nav from "../Nav";
import About from "../About";
import Services from "../Services";
import Work from "../Work";
import Contact from "../Contact";

const Home = () => {
  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
      <Banner />
      <Nav />
      <About />
      <Services />
      <Work />
      <Contact />
    </div>
  );
};

export default Home;
