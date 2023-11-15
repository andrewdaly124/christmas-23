import { StoreState } from "../types";

export const getCurrentPromptKey = (store: StoreState) => store.promptKey;

export const getNoBg = (store: StoreState) => store.options.noBg;
export const getNoAudioRender = (store: StoreState) =>
  store.options.noAudioRender;

export const getNumAnswered = (store: StoreState) => store.numAnswered;
