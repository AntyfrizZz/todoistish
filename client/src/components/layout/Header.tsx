import React from "react";
import { FaPizzaSlice } from "react-icons/fa";

export const Header = () => {
  const a = 1;

  return (
    <header data-testid="header">
      <nav>
        <div>logo</div>
        <div>
          <ul>
            <li>+</li>
            <li>
              <FaPizzaSlice />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
