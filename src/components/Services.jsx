// import React, { useMemo } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Services = () => {
  const [service] = useState([
    {
      name: "Frontend Development",
      description:
        "High quality development of sites with keen attention to detail.",
    },
    {
      name: "Clean Code",
      description:
        "Clean code practices to maintain the main concepts and skills needed to use code and computational thinking.",
    },
    {
      name: "Web Development",
      description:
        "Meticulous development of websites that are up to standard and can render properly on any web browser.",
    },
  ]);

  // const service = useMemo(
  //   () => [
  //     {
  //       name: "Frontend Development",
  //       description:
  //         "High quality development of sites with keen attention to detail.",
  //     },
  //     {
  //       name: "Clean Code",
  //       description:
  //         "Clean code practices to maintain the main concepts and skills needed to use code and computational thinking.",
  //     },
  //     {
  //       name: "Web Development",
  //       description:
  //         "Meticulous development of websites that are up to standard and can render properly on any web browser.",
  //     },
  //   ],
  //   []
  // );

  return (
    <div className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row ">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">What I Do</h2>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <div>
              {service.map((service, index) => {
                const { name, description } = service;
                return (
                  <div
                    className="border-b border-white/20 h-[150px] mb-[40px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6 ">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
