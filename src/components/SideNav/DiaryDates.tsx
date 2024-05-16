import React, { useContext } from "react";
import "./style/diary.css";
import { DiaryType } from "../../interface/Diary";
import { COLOR } from "../../utilities/Color";

interface DiaryDatesProps {
  diaries: DiaryType;
  setDate: (date: string) => void;
  currentDate: string;
}

export default function DiaryDates({
  diaries,
  setDate,
  currentDate,
}: DiaryDatesProps) {
  function handleOnClick(date: string) {
    setDate(date);
  }

  return (
    <>
      {Object.keys(diaries).map((date) => {
        return (
          <button
            style={{
              backgroundColor: COLOR[diaries[date].color],
              border: currentDate === date ? "5px solid grey" : "",
              color: "black",
            }}
            onClick={() => handleOnClick(date)}
            className="diary-date-button"
            key={date}
          >
            {date}
          </button>
        );
      })}
    </>
  );
}
