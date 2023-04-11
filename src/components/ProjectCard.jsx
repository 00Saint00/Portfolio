import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { FaGithub } from "react-icons/fa";
import { BsFillEyeFill } from "react-icons/bs";

const ProjectCard = ({
  title,
  image,

  animate = true,
  githubLink,
  previewLink,
}) => {
  return (
    <motion.div
      variants={fadeIn("left", 0.5)}
      initial={animate ? "hidden" : "show"}
      whileInView={"show"}
      viewport={{ once: false, amount: 0.5 }}
      className="group relative overflow-hidden border-2 border-white/50 rounded-xl"
    >
      <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-700"></div>

      <img
        className="group-hover:scale-125 transition-all duration-1000"
        src={image}
        alt=""
      />
      <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
        <span className="text-[30px] text-gradient">{title}</span>
      </div>
      <button className="absolute -bottom-full group-hover:bottom-8 left-12 sm:group-hover:bottom-14 transition-all duration-1000 z-50 text-[30px]">
        <a href={githubLink}>
          <FaGithub />
        </a>
      </button>
      <button className="absolute -bottom-full group-hover:bottom-8 right-12 sm:group-hover:bottom-14 transition-all duration-1000 z-50 text-[25px]">
        <a href={previewLink}>
          <BsFillEyeFill />
        </a>
      </button>
    </motion.div>
  );
};

export default ProjectCard;
