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
            <li data-testid="quick-add-task-action" className="settings__add">
              +
            </li>
            <li data-testid="dark-mode-action" className="settings__darkmode">
              <FaPizzaSlice />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
