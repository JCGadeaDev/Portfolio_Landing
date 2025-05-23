"use client";

import { useState } from "react";
import Link from "next/link";
import { socialNetworks } from "@/data";
import MotionTransition from "./transition-component";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MotionTransition
      position="bottom"
      className="fixed top-0 left-0 z-50 w-full bg-darkBg/80 backdrop-blur-md shadow-md"
    >
      <header className="px-4 py-3 md:px-20">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-white">
            JCGadea<span className="text-secondary">Dev</span>
          </Link>

          {/* Redes en desktop */}
          <nav className="hidden md:flex items-center gap-6">
            {socialNetworks.map(({ logo, src, id }) => (
              <Link
                key={id}
                href={src}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-colors duration-300 hover:text-secondary"
              >
                {logo}
              </Link>
            ))}
          </nav>

          {/* Botón menú móvil */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <XMarkIcon className="w-7 h-7 text-secondary" />
              ) : (
                <Bars3Icon className="w-7 h-7" />
              )}
            </button>
          </div>
        </div>

        {/* Redes sociales en mobile (menú desplegable) */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 overflow-hidden opacity-0"
          }`}
        >
          <div className="flex flex-col gap-2 mt-3 px-4 pb-4">
            {socialNetworks.map(({ logo, src, id }) => (
              <Link
                key={id}
                href={src}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white transition hover:text-secondary"
              >
                {logo}
              </Link>
            ))}
          </div>
        </div>
      </header>
    </MotionTransition>
  );
};

export default Header;

