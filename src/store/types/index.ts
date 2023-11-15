import { Options, ResponseKey } from "../../ui/assets/prompts/types";

export type StoreState = {
  promptKey: ResponseKey;
  options: Record<Options, boolean>;
  numAnswered: number;
};

export const DEFAULT_STORE_STATE: StoreState = {
  promptKey: "intro_exodus",
  options: {
    noBg: true, // Start with nobg
    noAudioRender: true,
  },
  numAnswered: 0,
};
