import { HomeKey } from "./home";
import { IntroKey } from "./intros";

export type Options = "noBg" | "noAudioRender";

export type NameKey = "don" | "tony" | "big_moe" | "jimmy";

export type ResponseKey = IntroKey | HomeKey;

export type Prompt = {
  who: NameKey | null;
  prompt: string;
  answers: { text: string; goto: ResponseKey[] | ResponseKey }[];
  options?: Options[];
};

export type PromptTree<T extends string> = Record<T, Prompt>;
