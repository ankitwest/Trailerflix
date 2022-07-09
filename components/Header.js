import React, { useEffect, useState } from 'react';
import Image from 'next/image';

function Header() {
  const [header, setHeader] = useState(false);

  const transitionNavbar = () => {
    if (window.scrollY > 70) setHeader(true);
    else setHeader(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', transitionNavbar);
  }, []);
  return (
    <main
      className={`flex justify-between items-center z-[1000] h-16 px-7
     pt-3 sticky top-0 ${
       header && ' bg-black duration-300 transition-all ease-in-out'
     }`}
    >
      <div className=" relative h-8 w-20 lg:h-10 lg:w-32">
        <Image
          src="https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png"
          layout="fill"
          objectFit="contain"
          alt=""
        />
      </div>
      <div className=" md:flex space-x-7 hidden">
        <p className="menu-items">movies</p>
        <p className="menu-items">shows</p>
        <p className="menu-items">favorites</p>
        <p className="menu-items">my list</p>
      </div>

      <div className="">
        <p className="text-gray-200">Login</p>
      </div>
    </main>
  );
}
export default Header;

//!when md then we can see it menu items
//!sticky top-0
