import React from "react";
import BaseButton from "./BaseButton";

function Navbar({ title }) {
  return (
    <header className="z-[999] p-5 mb-4 rounded-2xl fixed top-4 md:top-0 left-4 right-4">
      <nav className="flex justify-between relative">
          <BaseButton type="button" label="Available Now" showDot={false} showPulse={true} classes="max-md:hidden" />

          <h2 className="developer-name absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-medium">
              {title}
          </h2>
          <BaseButton
              type="link"
              link="https://www.upwork.com/freelancers/uidevelopment"
              label="Hire Me"
              showDot={true}
              classes="max-md:hidden"
          />
      </nav>
    </header>
  );
}

export default Navbar;
