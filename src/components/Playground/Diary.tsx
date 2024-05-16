import React, { useEffect, useState } from "react";
import "./style/diary.css";

interface DiaryProp {
  input: string;
  setInput: (text: string) => void;
}

export default function Diary({ input, setInput }: DiaryProp) {
  return (
    <div>
      <div id="textToHighlight" className="notepad-container">
        <textarea
          className="gentium-book-plus-regular"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
      </div>
    </div>
  );
}
