/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { SlidUpLeft } from "../../utility/animation";

const Banner2 = () => {
  return (
    <div className="container my-14">
      <div className="bg-[#f9f9f9] py-14 md:py-24 flex justify-center items-center">
        <div className="flex flex-col justify-center text-center space-y-8 lg:px-44">
          <motion.h1
            variants={SlidUpLeft(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl lg:text-5xl font-bold uppercase"
          >
            Receive 20% off your initial purchase, are you prepared to shop?
          </motion.h1>

          <motion.p
            variants={SlidUpLeft(0.7)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            We'll ensure you receive the finest and most suitable products for your training.
          </motion.p>

          <motion.div variants={SlidUpLeft(0.9)} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex justify-center gap-6">
            <button className="primary-btn hover:bg-purple-500">Learn More</button>
            <button className="primary-btn border-2 border-primary hover:bg-purple-500 font-bold px-5 rounded-lg">Keep Connected</button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
