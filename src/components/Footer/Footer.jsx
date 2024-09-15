/* eslint-disable react/no-unescaped-entities */
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { FaDumbbell } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-950 rounded-t-3xl">
      <div className="container">
        <div className="grid md:grid-cols-4 md:gap-4 py-5 border-t-2 border-gray-300/10 text-white">
          <div className="py-8 px-4 space-y-4">
            <div className="text-2xl flex items-center gap-2 font-bold uppercase">
              <FaDumbbell />
              <p>Master</p>
              <p className="text-secondary">Gym</p>
            </div>
            <p>Welcome to our gym’s website, where fitness and wellness come together! We offer top-quality gym equipment for sale and personalized training programs, including high-intensity workouts and yoga classes. Our certified instructors are here to help you achieve your goals, whether you're just starting out or looking to push your limits.</p>
            <div className="flex items-center justify-start gap-5 !mt-6">
              <a href="#">
                <HiLocationMarker className="text-3xl" />
              </a>
              <a href="#">
                <FaInstagram className="text-3xl" />
              </a>
              <a href="#">
                <FaFacebookF className="text-3xl" />
              </a>
              <a href="#">
                <FaLinkedinIn className="text-3xl" />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 md:col-span-3 md:ml-14">
            <div className="py-8 px-4">
              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-5">Important Links</h1>
              <ul className="flex flex-col gap-4">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Login</a>
                </li>
              </ul>
            </div>
            <div className="py-8 px-4">
              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-5">Company Links</h1>
              <ul className="flex flex-col gap-4">
                <li>
                  <a href="#">Our Service</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
              </ul>
            </div>
            <div className="py-8 px-4">
              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-5">Resources</h1>
              <ul className="flex flex-col gap-4">
                <li>
                  <a href="#">Products</a>
                </li>
                <li>
                  <a href="#">Yoga</a>
                </li>
                <li>
                  <a href="#">Muscles</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <div className="text-center py-6 border-t-2 border-gray-300/10">
            <span className="text-sm text-gray-400 opacity-65">Written in 2024. </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
