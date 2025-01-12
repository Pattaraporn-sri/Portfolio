import React from "react";

function Navbar(): JSX.Element {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="flex justify-evenly sticky top-0  z-10">
      <button
        onClick={() => handleScroll("Home")}
        className="mt-1 text-yellow-800 hover:text-yellow-600"
      >
        HOME
      </button>
      <button
        onClick={() => handleScroll("AboutMe")}
        className="mt-1 text-yellow-800 hover:text-yellow-600"
      >
        ABOUT ME!
      </button>
      <button
        onClick={() => handleScroll("MyWork")}
        className="mt-1 text-yellow-800 hover:text-yellow-600"
      >
        MY WORK
      </button>
      <button
        onClick={() => handleScroll("ConTact")}
        className="mt-1 text-yellow-800 hover:text-yellow-600"
      >
        CONTACT
      </button>
    </nav>
  );
}

export default Navbar;
