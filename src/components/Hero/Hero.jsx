import { FaPlay } from "react-icons/fa";
import HeroImg from "../../assets/Hero.jpg";
import { motion } from "framer-motion";
import { SlidUpRight } from "../../utility/animation";

const Hero = () => {
  return (
    <>
      <section>
        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative">
          <div className="flex flex-col justify-center py-14 md:py-0 font-playfair">
            <div className="text-center md:text-left space-y-6">
              <motion.h1 variants={SlidUpRight(0.6)} initial="hidden" animate="visible" className="text-5xl lg:text-6xl font-bold text-primary leading-relaxed xl:leading-normal">
                Exercise maintains optimal <span className="text-black hover:text-purple-500">Health</span>{" "}
              </motion.h1>
              <motion.p variants={SlidUpRight(1.2)} initial="hidden" animate="visible" className="text-black xl:max-w-[500px]">
              Regular physical activity boosts cardiovascular fitness, strengthens muscles, and enhances mental well-being. By incorporating diverse exercises into your routine, you can improve flexibility, maintain a healthy weight, and reduce the risk of chronic diseases.
              </motion.p>
              <motion.div variants={SlidUpRight(1.6)} initial="hidden" animate="visible" className="flex justify-center items-center gap-8 md:justify-start !mt-4">
                <button className="primary-btn flex items-center gap-2 ">Buy Now</button>
                <button className="flex justify-center items-center gap-2">
                  <FaPlay />
                  View Now
                </button>
              </motion.div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <motion.img
              initial={{ opacity: 0, x: -100 }} 
              animate={{ opacity: 1, x: 0 }}  
              transition={{ duration: 1, ease: "easeInOut" }} 
              className="w-[350px] md:w-[550px] xl:w-[500px] drop-shadow"
              src={HeroImg}
              alt="hero_img"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
