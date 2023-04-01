import Image from "../assets/avatar.svg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[33px] font-bold leading-[0.8] lg:text-[65px]"
            >
              Hi,
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-3 text-[35px] ig:text-[50px] font-secondary font-semibold uppercase loading-[1]"
            >
              <TypeAnimation
                speed={30}
                sequence={[
                  "I am Paul Otomewo",
                  2000,
                  "A Frontend Developer",
                  2000,
                ]}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            {/* <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-5 max-w-lg mx-auto lg:mx-0"
            >
              Lorem ipsum dolor sit amet. Vel unde facilis aut totam tenetur.
            </motion.p> */}
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-7 items-center mb-12 mx-auto lg:mx-0"
            >
              <button className="btn btn-lg">
                <a href="#contact">Contact Me</a>
              </button>
              <a href="#" className="text-gradient btn-link">
                My Portfolio
              </a>
            </motion.div>

            {/* social */}

            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[25pxx] gap-x-7 max-w-max mx-auto lg:mx-0"
            >
              <a href="https://github.com/00Saint00" target="_blank">
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/paul-otomewo-476142188/"
                target="_blank"
              >
                <FaLinkedin />
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
          >
            <img src={Image} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
