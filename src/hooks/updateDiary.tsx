import { COLOR } from "../utilities/Color";

export default async function updateDiary(date: string, content: string, color: keyof typeof COLOR) {
  try {
    const resp = await fetch("http://localhost:3000/diaries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        date,
        content,
        color
      }),
    });
    if (!resp.ok) {
      throw new Error(
        `Something went wrong when updating diary with date: ${date}`
      );
    }
    const respJson = resp.json();
    return respJson;
  } catch {
    throw new Error(
      `Something went wrong when updating diary with date: ${date}`
    );
  }
}
