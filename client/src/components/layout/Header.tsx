import React from "react";

export const Header = () => {
  const a = 1;

  return (
    <header data-testid="header">
      <nav>
        <div>logo</div>
        <div>
          <ul>
            <li>+</li>
            <li>Pizza slice</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
