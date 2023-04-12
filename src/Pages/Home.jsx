import React from "react";
import Banner from "../components/Banner";
import Nav from "../components/Nav";
import About from "../components/About";
import Services from "../components/Services";
import Work from "../components/Work";
import Contact from "../components/Contact";
import { useState, useEffect } from "react";
import { Dialog } from "@mui/material";

const Home = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [pdfFile, setPdfFile] = useState("");

  useEffect(() => {
    const file = require("../assets/cv (1).pdf");
    setPdfFile(file);
  }, []);
  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
      <Banner handleOpen={handleOpen} />
      <Nav />
      <About />
      <Services />
      <Work />
      <Contact />
      <Dialog onClose={handleClose} open={open}>
        <div style={{ height: "80vh" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <object data={pdfFile} style={{ height: "100%", width: "80vw" }}>
              cv
            </object>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default Home;
