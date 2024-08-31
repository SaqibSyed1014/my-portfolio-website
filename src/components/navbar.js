import React from "react";
import BaseButton from "./BaseButton";

function Navbar() {
  return (
    <header className="z-[999] p-5 mb-4 rounded-2xl fixed top-4 left-4 right-4 mix-blend-difference">
      <nav className="flex justify-between relative">
          <BaseButton type="button" label="Available for work" showDot={false} />

          <h2 className="mix-blend-difference absolute z-[999] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-light-grey text-2xl font-medium">
              Saqib Syed
          </h2>
          <BaseButton type="button" label="About Me" showDot={true} />
      </nav>
    </header>
  );
}

export default Navbar;
