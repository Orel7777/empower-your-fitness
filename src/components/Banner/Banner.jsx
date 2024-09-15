/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { SlidUp } from "../../utility/animation";
// eslint-disable-next-line no-unused-vars
const Banner = ({ image, title, subtitle, link }) => {
  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-14 py-14">
        <div className="flex justify-center items-center">
          <motion.img initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ type: "spring", stiffness: 100, delay: 0.2 }} className="w-[300px] md:max-w-[400px] xl:min-w-[600px] h-full object-cover" src={image} alt="" />
        </div>
        <div className="flex flex-col justify-center text-center md:text-left space-y-4 lg:max-w-[500px]">
          <motion.p variants={SlidUp(0.5)} initial="hidden" whileInView={"visible"} viewport={{ once: true }} className="text-2xl lg:text-4xl font-bold capitalize font-playfair">
            {title}
          </motion.p>
          <motion.p variants={SlidUp(0.7)} initial="hidden" whileInView={"visible"} viewport={{ once: true }}>
            {subtitle}
          </motion.p>
          <motion.div variants={SlidUp(0.9)} initial="hidden" whileInView={"visible"} viewport={{ once: true }} className="flex justify-center md:justify-start">
            <button className="primary-btn hover:bg-purple-500">Discover more</button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
