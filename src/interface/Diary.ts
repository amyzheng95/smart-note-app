import { COLOR } from "../utilities/Color";

export type DiaryType = {
  [key: string]: {content: string, color: keyof typeof COLOR};
};
