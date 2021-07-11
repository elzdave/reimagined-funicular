import React from "react";

const Footer = () => {
  return (
    <div className="flex-none flex flex-col sm:flex-row px-2 h-max w-full bg-gray-800 text-gray-300 text-sm font-sans">
      <div className="flex-none sm:my-1">Versi 1.0</div>
      <div className="flex-none sm:flex-grow"></div>
      <div className="flex-none sm:my-1">© 2021, PT. Alfa Beta Romeo</div>
    </div>
  );
};

export default Footer;
