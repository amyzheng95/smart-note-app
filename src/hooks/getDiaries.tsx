export default async function getDiaries(addToast: (msg: string) => void) {
  try {
    const resp = await fetch("http://localhost:3000/");
    if (!resp.ok) {
      addToast("Failed to fetch diaries");
      return {};
    }
    const rspJson = await resp.json();
    return rspJson;
  } catch (error) {
    addToast("Something went wrong when fetching diaries" + error);
    return {};
  }
}
