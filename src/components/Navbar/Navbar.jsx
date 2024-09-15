import { useState, useEffect } from 'react';
import { NavbarMenu } from "../../mockData/data";
import { MdMenu } from "react-icons/md";
import { FaDumbbell } from "react-icons/fa";
import { CgShoppingCart } from "react-icons/cg";
import { BsSearch } from "react-icons/bs";
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

 
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <nav className="container">
        <div className="container flex justify-between items-center py-8">
          <div className="text-2xl flex items-center gap-2 font-bold py-8 uppercase">
            <FaDumbbell className='hover:text-purple-500'/>
            <p>Master</p>
            <p className="text-secondary hover:text-purple-500">Gym</p>
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center gap-8 text-gray-700">
              {NavbarMenu.map((item) => (
                <li key={item.id}>
                  <a
                    className="inline-block py-1 px-3 hover:bg-primary hover:text-white font-semibold"
                    href={item.link}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-4">
            <button
              className="text-2xl hover:bg-primary hover:text-white p-2 rounded-full duration-200"
            >
              <BsSearch />
            </button>
            <button
              className="text-2xl hover:bg-primary hover:text-white p-2 rounded-full duration-200"
            >
              <CgShoppingCart />
            </button>
            <button
              className="hover:bg-primary text-purple-500 font-semibold hover:text-white py-2 px-6 duration-200 border border-purple-500 hidden md:block"
            >
              Login
            </button>
          </div>
          <div onClick={() => setOpen(!open)} className="md:hidden">
            <MdMenu className="text-4xl" />
          </div>
        </div>
      </nav>
      <ResponsiveMenu open={open} />
    </>
  );
};

export default Navbar;
