import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between px-5 py-2 bg-primary text-blue fixed w-full z-10">
      <a href="/" className="logo text-2xl font-bold">
        Jonathan Healy
      </a>

      {/* Desktop Nav */}
      <nav className="hidden md:block">
        <ul className="flex">
          <li>
            <a href="/#about">About</a>
          </li>
          <li>
            <a href="/#projects">Projects</a>
          </li>
          <li>
            <a href="/#blog">Blog</a>
          </li>
          <li>
            <a href="/#contact">Contact</a>
          </li>
          <li>
            <a href="#resume -link" target="_blank" without rel="noreferrer">
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile Nav */}
        {/* Toggle Button */}
      </nav>
    </header>
  );
};

export default Header;
