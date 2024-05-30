import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Img1 from "../assets/Img1.jpg";
import Img2 from "../assets/Img2.jpg";
import Img3 from "../assets/Img3.png";
import Img4 from "../assets/clone.png";
import ProjectCard from "./ProjectCard";

const Work = () => {
  return (
    <section className="section mt-10" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className="flex-1 flex flex-col gap-y-10 mb-10 lg:mb-0"
          >
            <div>
              <h2 className="h2 leading-tight text-accent">My Projects</h2>
            </div>

            <ProjectCard
              image={Img4}
              animate={false}
              title={"Udemy Clone"}
              githubLink={"https://github.com/00Saint00/udclone"}
              previewLink={"https://udclone.netlify.app/"}
            />
            <ProjectCard
              image={Img1}
              title={"Advice Generator App"}
              githubLink={
                "https://github.com/00Saint00/advice-generator-app-main"
              }
              previewLink={"https://advicegenerator-b8e303.netlify.app/"}
            />
          </motion.div>
          <motion.div
            transition={{ duration: 1.2, staggerChildren: 0.5 }}
            className="flex-1 flex flex-col gap-y-10 "
          >
            <ProjectCard
              image={Img2}
              title={"Four Card Feather Section"}
              githubLink={"https://github.com/00Saint00/Four-card"}
              previewLink={"https://scintillating-cascaron-a5ae00.netlify.app/"}
            />

            <ProjectCard
              image={Img3}
              title={"Rest Country"}
              githubLink={"https://github.com/00Saint00/countries"}
              previewLink={"https://countries-ecru-xi.vercel.app/"}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
