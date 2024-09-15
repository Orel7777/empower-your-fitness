import Banner from "./components/Banner/Banner";
import Equipment from "./components/Equipment/equipment";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import BgImage from "./assets/bg.png";
import img1 from './assets/img1.jpg'
import img2 from './assets/img2.jpg'
import TabComp from "./components/TabComp/TabComp";
import Testimonies from "./components/Testimonies/Testimonies";
import Banner2 from "./components/Banner/Banner2";
import Footer from "./components/Footer/Footer";

const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
};


const BannerData = {
  image: img1,
  title: "Resistance training strengthens body and mind.",
  subtitle: "Weight training is an excellent form of exercise that builds muscle, increases strength, and boosts metabolism. Regular resistance training improves bone density, enhances overall fitness, and can contribute to better mental health and confidence.",
  link: "#",
}

const Banner2Data = {
  image: img2,
  title: "Weightlifting: health's powerful, transformation ally.",
  subtitle: "Lifting weights not only sculpts your physique but also enhances your body's functionality, promoting better posture, balance, and reducing the risk of injury in daily activities.",
  link: "#",
}
const App = () => {
  return (
    <div className="overflow-x-hidden">
      <div className={bgStyle}>
        <Navbar />
        <Hero />
      </div>
      <Equipment/>
      <Banner {...BannerData}/>
      <TabComp/>
      <Banner {...Banner2Data}/>
      <Testimonies/>
      <Banner2/>
      <Footer/>
    </div>
  );
};

export default App;
