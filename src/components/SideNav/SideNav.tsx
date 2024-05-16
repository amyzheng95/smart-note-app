import React from "react";
import "./style/sidenav.css";
import DiaryDates from "./DiaryDates";
import { DiaryType } from "../../interface/Diary";

interface SideNavProps {
  open: boolean;
  diaries: DiaryType;
  setDate: (date: string) => void;
  currentDate: string;
}

export default function SideNav({
  open,
  diaries,
  setDate,
  currentDate,
}: SideNavProps) {
  return (
    <>
      {!open && <div className="closed nav"></div>}
      {open && (
        <div className="open nav">
          <DiaryDates
            currentDate={currentDate}
            diaries={diaries}
            setDate={setDate}
          />
        </div>
      )}
    </>
  );
}
