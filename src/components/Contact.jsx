import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Contact = () => {
  return (
    <div className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className="flex-1"
          >
            <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
              Get in touch
            </h4>
            <h2 className="text-[70px] uppercase lg:text[90px] leading-none mb-12">
              Let's work <br /> together!
            </h2>
          </motion.div>
          {/* form */}
          <motion.form
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className="flex-1 border rounded-[20px] flex flex-col gap-y-6 pb-24 p-6 items-start"
          >
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="text"
              placeholder="Your Name"
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="text"
              placeholder="Your Email"
            />
            <textarea
              className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all "
              placeholder="Your Message"
            ></textarea>
            <button className="btn btn-lg">Send Message</button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
