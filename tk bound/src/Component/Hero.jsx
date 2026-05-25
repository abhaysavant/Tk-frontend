import React from "react";
import Navbar from "./Navbar";  // Use the separate Navbar component

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/tk-video.mp4"  // Updated to match public asset
        autoPlay
        loop
        muted
      />

      <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>

      {/* Navbar using component */}
      <Navbar />

      {/* Main content - positioned lower-left, left-aligned, responsive */}
      <div className="absolute bottom-20 left-20 md:bottom-24 md:left-24 text-white z-20 max-w-md text-left animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
          TK moments
        </h1>
        <p className="text-xl md:text-2xl tracking-wide font-light mb-8">
          Stories of Love & Joy of Weddings
        </p>
        {/* Added CTA button for better UX */}
        <a 
          href="#contact" 
          className="inline-block bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 text-lg"
        >
          Get in Touch
        </a>
      </div>
    </div>
  );
};

export default Hero;

//         <p className="text-lg tracking-wide">
//           Stories of Love & Joy of Weddings
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Hero;


import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">

      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/videos/wedding.mp4"
        autoPlay
        loop
        muted
      />

      <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>

      <div className="absolute top-0 left-0 w-full flex justify-between items-center px-10 py-5 text-white z-10">
        <h1 className="text-xl font-light tracking-widest">
          Knots <span className="font-bold">by AMP</span>
        </h1>

        <ul className="flex gap-8 text-sm font-light">
          <li>Home</li>
          <li>Wedding Stories</li>
          <li>Wedding Films</li>
          <li>Couple Shoot</li>
          <li>About</li>
          <li>Testimonials</li>
          <li>Contact</li>
          <li>FAQ</li>
        </ul>
      </div>

      {/* Text — bottom left */}
      <div className="absolute bottom-16 left-10 text-white z-10">
        <h1 className="text-6xl md:text-7xl font-serif mb-4">
          TK moments
        </h1>
        <p className="text-lg tracking-wide">
          Stories of Love & Joy of Weddings
        </p>
      </div>

    </div>
  );
};

export default Hero;