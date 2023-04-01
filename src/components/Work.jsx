import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Img1 from "../assets/Img1.jpg";
import Img2 from "../assets/Img2.jpg";
import Img3 from "../assets/Img3.jpg";
import ProjectCard from "./ProjectCard";

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className="flex-1 flex flex-col gap-y-20 mb-10 lg:mb-0"
          >
            {/*text  */}
            <div>
              <h2 className="h2 leading-tight text-accent">My Projects</h2>
              <p className="max-w-sm mb-[6.6rem]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
                cupiditate ipsa adipisci quibusdam amet nemo sapiente vero dicta
                magnam dolorum, accusantium officiis! Ab eius non deserunt
                praesentium obcaecati eos perspiciatis.
              </p>
            </div>
            {/* images */}
            <ProjectCard
              image={Img1}
              animate={false}
              title={"Advice Generator App"}
              githubLink={
                "https://github.com/00Saint00/advice-generator-app-main"
              }
              previewLink={"https://advicegenerator-b8e303.netlify.app/"}
            />
          </motion.div>
          <motion.div
            transition={{ duration: 1.2, staggerChildren: 0.5 }}
            className="flex-1 flex flex-col gap-y-12"
          >
            {/* image */}
            <ProjectCard
              image={Img2}
              title={"Four Card Feather Section"}
              githubLink={"https://github.com/00Saint00/Four-card"}
              previewLink={"https://scintillating-cascaron-a5ae00.netlify.app/"}
            />
            {/* image */}
            <ProjectCard
              image={Img3}
              title={"Rest Country"}
              githubLink={"https://github.com/00Saint00/Country-api"}
              previewLink={"https://verdant-dango-27b738.netlify.app/"}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
