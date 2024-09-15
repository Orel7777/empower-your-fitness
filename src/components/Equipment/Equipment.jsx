import { GiGymBag } from "react-icons/gi"; 
import { FaDumbbell } from "react-icons/fa"; 
import { GrYoga } from "react-icons/gr"; 
import {motion} from "framer-motion";
import { SlidUpLeft } from "../../utility/animation";

const DataEquipment = [
    {
        id: 1,
        title: "Yoga Equipment",
        description: "Practicing yoga is essential for maintaining both physical and mental well-being. It enhances flexibility, reduces stress, and promotes overall balance in life.",
        icon: <GrYoga />
    },
    {
        id: 2,
        title: "Muscle Equipment", 
        description: "Building muscle is crucial for overall strength, metabolism, and physical health. It improves endurance, supports joint stability, and enhances daily performance.",
        icon: <FaDumbbell />
    },
    {
        id: 3,
        title: "Fitness Equipment",
        description: "Fitness is vital for maintaining a healthy body and mind, improving energy levels, and reducing the risk of chronic diseases. Regular exercise boosts physical strength, mental clarity, and overall well-being.",
        icon: <GiGymBag />
    }
]
const Equipment = () => {
  return (
    <div>
        <div className="container py-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 font-playfair">
                <div className="space-y-4 p-6">
                    <h1 className="text-3xl md:text-4xl font-bold">What do we provide for you?</h1>
                    <p className="text-gray-500">We provide the best equipment for you</p>
                </div>
                {
                    DataEquipment.map((item)=>{
                        return (
                          <motion.div  variants={SlidUpLeft(0.6)} initial="hidden" whileInView="visible" key={item.id} className="space-y-4 p-6 bg-[#fbfbfb]
                          hover:bg-secondary rounded-xl hover:shadow-[0_0_20px_rgba(0,0,0,15)]">
                             <div className="text-4xl">{item.icon}</div>   
                             <p className="text-2xl font-semibold">{item.title}</p>
                             <p className="text-gray-500">{item.description}</p>
                          </motion.div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Equipment