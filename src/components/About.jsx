import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section h-[100vh]" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[600px] mix-blend-lighten bg-top"
          ></motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">About me.</h2>
            <h3 className="h3 mb-4">
              I am a Frontend Developer with a year of experience
            </h3>
            <p className="mb-3">
              My passion lies in creating user-friendly interfaces that are
              aesthetically pleasing and easy to use. I have experience working
              with HTML, CSS, and JavaScript, and I am familiar with frontend
              frameworks like React.
            </p>
            <p className="mb-6">
              I am committed to writing clean, efficient, and maintainable code
              that is scalable as projects grow. I am excited about the prospect
              of exploring new technologies and expanding my skillset.
            </p>
            <div className="flex gap-x-8 items-center">
              <button className="btn btn-lg">
                <a href="#contact">Contact Me</a>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
