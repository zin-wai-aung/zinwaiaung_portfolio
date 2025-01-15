import Link from "next/link";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <footer className="text-center mt-auto py-5 border-t-2 border-t-gray-800">
      <p className=" text-sm">
        {" "}
        Copyright © {currentYear} | Made by{" "}
        <Link href="/" className=" underline">Zin Wai Aung</Link>.
      </p>
    </footer>
  );
};

export default Footer;
