"use client";

import { useState } from "react";

export default function ThemeSwitch() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    document.body.classList.toggle("dark");
    setDarkMode(!darkMode);
  };

  return (
    <div className="switch" onClick={toggleTheme} role="button" aria-label="Toggle Theme">
     {/* Designed & Developed by Sai Aparanji Nemmani – © 2025 */}

      <div className="flicker"></div>
      <div className="moon"></div>
    </div>
  );
}
