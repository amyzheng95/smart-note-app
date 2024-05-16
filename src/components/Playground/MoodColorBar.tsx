import React from "react";
import "./style/moodColorBar.css";
import { COLOR } from "../../utilities/Color";

interface MoodColorBarProps {
  savedColor: string;
  setColor: (color: keyof typeof COLOR) => void;
}

export default function MoodColorBar({
  savedColor,
  setColor,
}: MoodColorBarProps) {
  function handleColorChange(newColor: keyof typeof COLOR) {
    setColor(newColor);
  }

  return (
    <div className="bar-container">
      {Object.entries(COLOR).map((color) => {
        return (
          <button
            disabled={color[0] === savedColor}
            style={{ backgroundColor: `${color[1]}` }}
            className={`color-selection ${
              color[0] === savedColor ? "color-selected" : ""
            }`}
            onClick={() => handleColorChange(color[0] as keyof typeof COLOR)}
            key={color[0]}
          ></button>
        );
      })}
    </div>
  );
}
