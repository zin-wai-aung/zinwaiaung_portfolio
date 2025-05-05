"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FaMoon, FaTimes, FaBars } from "react-icons/fa";
import { LucideSunMedium } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "@/hooks/useTheme";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Handle navbar visibility based on scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > prevScrollY && currentScrollY > 500) {
        // Hide navbar when scrolling down
        setIsVisible(false);
      } else {
        // Show navbar when scrolling up
        setIsVisible(true);
      }
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY]);

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.25 }, // Stagger items' animations
        },
      }}
      className={`fixed backdrop-blur-md w-full z-50 dark:bg-primary-Nav/60 shadow-sm transform transition-transform duration-500 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav>
        <div className="flex justify-between items-center py-4 px-20">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              <Image src={"/logo.png"} alt="logo" width={70} height={100} />
            </motion.div>
          </Link>

          {/* Navigation Links */}
          <ul className={`hidden md:flex items-center space-x-10`}>
            {navItems.map((item) => (
              <motion.li
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                key={item.href}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "text-gray-500 hover:text-black dark:text-Darksecondary dark:hover:text-primary",
                    "transition duration-300"
                  )}
                >
                  {item.label}
                </Link>
              </motion.li>
            ))}
            {/* Resume Button */}
            <motion.li
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border-[1.5px] border-primary text-primary px-3 py-2 rounded-md hover:bg-primary/10"
              >
                Resume
              </a>
            </motion.li>
            {/* Dark Mode Toggle */}
            <motion.li
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              <button>
                {theme === "dark" ? (
                  <LucideSunMedium
                    onClick={() => toggleTheme("light")}
                    className="text-primary"
                  />
                ) : (
                  <FaMoon
                    onClick={() => toggleTheme("dark")}
                    className="text-primary"
                  />
                )}
              </button>
            </motion.li>
          </ul>

          {/* Mobile Menu Toggle Button */}
          <button
            className="block md:hidden text-primary dark:text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu Items */}
        {isMobileMenuOpen && (
          <ul className="absolute flex flex-col w-full items-end md:hidden bg-gray-400 shadow-sm dark:bg-Lightsecondary rounded-lg p-5 space-y-8">
            {navItems.map((item) => (
              <li key={item.href} className="w-full">
                <Link
                  href={item.href}
                  className={cn(
                    "text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-primary",
                    "transition duration-300"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            {/* Resume Button */}
            <li className="my-5 flex justify-between items-center w-full">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border-[1.5px] border-Lightsecondary dark:border-primary text-Lightsecondary dark:text-primary px-3 py-2 rounded-md"
              >
                Resume
              </a>
              {/* Dark Mode Toggle */}
              <button>
                {theme === "dark" ? (
                  <LucideSunMedium
                    onClick={() => toggleTheme("light")}
                    className=" text-Lightsecondary dark:text-primary"
                  />
                ) : (
                  <FaMoon
                    onClick={() => toggleTheme("dark")}
                    className=" text-Lightsecondary dark:text-primary"
                  />
                )}
              </button>
            </li>
          </ul>
        )}
      </nav>
    </motion.header>
  );
}
