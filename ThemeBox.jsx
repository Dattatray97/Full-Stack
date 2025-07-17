import React, { useState } from "react";
import "./ThemeBox.css";

function ThemeBox() {
  const [theme, setTheme] = useState("light");

  return (
    <div className={`box-wrapper ${theme}`}>
      <div className="box">
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          Click Me!
        </button>

        <h3>The current mode is:</h3>
        <div className="mode-display">{theme.toUpperCase()}</div>
      </div>
    </div>
  );
}

export default ThemeBox;
