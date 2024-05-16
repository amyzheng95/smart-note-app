import React, { useEffect, useState } from "react";
import Diary from "./components/Playground/Diary";
import SideNav from "./components/SideNav/SideNav";
import { getNow } from "./utilities/Date";
import { DiaryType } from "./interface/Diary";
import MoodColorBar from "./components/Playground/MoodColorBar";
import getDiaries from "./hooks/getDiaries";
import { ToastContext } from "./components/Toast/Toast";
import updateDiary from "./hooks/updateDiary";
import { COLOR } from "./utilities/Color";

export default function () {
  const today = getNow();
  const [date, setDate] = useState(today);
  const [diaries, setDiaries] = useState<DiaryType | null>(null);
  const [color, setColor] = useState<keyof typeof COLOR>("red");
  const [input, setInput] = useState<null | string>(null);
  const [saved, setSaved] = useState(false);
  const { addToast } = React.useContext(ToastContext);

  function updateState(resp: any) {
    setDiaries(resp);

    if (resp[date]) {
      setColor(resp[date].color);
      setInput(resp[date].content);
    }
  }

  const fetchDiaries = async () => {
    const resp = await getDiaries(addToast);
    updateState(resp);
  };

  async function handleOnSave() {
    if (input) {
      const resp = await updateDiary(date, input, color);
      updateState(resp);
    }
    setSaved(true);
  }

  useEffect(() => {
    fetchDiaries();
  }, []);

  useEffect(() => {
    if (diaries) {
      setColor(diaries[date].color);
      setInput(diaries[date].content);
    }
  }, [date]);

  return (
    <div style={{ display: "flex" }}>
      <SideNav
        open={true}
        setDate={setDate}
        currentDate={date}
        diaries={diaries ? diaries : {}}
      />
      <div className="playground-container" style={{ flex: "1" }}>
        <MoodColorBar setColor={setColor} savedColor={color} />
        <Diary input={input ? input : ""} setInput={setInput} />
        <button disabled={saved} className="save-btn" onClick={handleOnSave}>
          Save
        </button>
      </div>
    </div>
  );
}
