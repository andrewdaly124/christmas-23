import { PromptTree } from "./types";

export type IntroKey =
  | "intro_exodus"
  | "intro_didnt_knock"
  | "intro_didnt_knock_2"
  | "intro_didnt_knock_3"
  | "intro_knocked_once"
  | "intro_awk_silence"
  | "intro_tony_asks"
  | "intro_jimmy_never_seen"
  | "intro_don_annoyed"
  | "intro_left";

const INTRO_PROMPTS: PromptTree<IntroKey> = {
  intro_exodus: {
    who: null,
    prompt: "(There's a door. Knock on it?)",
    answers: [
      { text: "(Knock on the door)", goto: "intro_knocked_once" },
      { text: "(Don't knock)", goto: "intro_didnt_knock" },
    ],
    options: ["noBg", "noAudioRender"],
  },
  intro_didnt_knock: {
    who: null,
    prompt: "(You didn't knock)",
    answers: [
      { text: "(Knock on the door)", goto: "intro_knocked_once" },
      { text: "(Ok)", goto: "intro_didnt_knock" },
    ],
    options: ["noBg", "noAudioRender"],
  },
  intro_knocked_once: {
    who: null,
    prompt: "(You hear shuffling... knock again?)",
    answers: [
      { text: "(Knock on the door)", goto: "intro_awk_silence" },
      { text: "(No)", goto: "intro_didnt_knock_2" },
    ],
    options: ["noBg", "noAudioRender"],
  },
  intro_didnt_knock_2: {
    who: null,
    prompt: "(You're staring at the door, but nothing is happening)",
    answers: [
      { text: "(Knock on the door)", goto: "intro_awk_silence" },
      {
        text: "(Ok)",
        goto: "intro_didnt_knock_3",
      },
    ],
    options: ["noBg", "noAudioRender"],
  },
  intro_didnt_knock_3: {
    who: null,
    prompt: "...",
    answers: [
      { text: "(Knock on the door)", goto: "intro_awk_silence" },
      {
        text: "(...)",
        goto: "intro_didnt_knock_3",
      },
    ],
    options: ["noBg"],
  },
  intro_awk_silence: {
    who: null,
    prompt: "...",
    answers: [
      {
        text: "(...)",
        goto: "intro_tony_asks",
      },
    ],
  },
  intro_tony_asks: {
    who: "tony",
    prompt: "Who's this guy?",
    answers: [
      {
        text: "(...)",
        goto: "intro_jimmy_never_seen",
      },
    ],
  },
  intro_jimmy_never_seen: {
    who: "jimmy",
    prompt: "Never seem 'em in my life",
    answers: [
      {
        text: "(...)",
        goto: "intro_don_annoyed",
      },
    ],
  },
  intro_don_annoyed: {
    who: "don",
    prompt:
      "As you can see, me and my friends here are enjoying a game of Poker. Is there a reason you've so rudely interrupted?",
    answers: [
      {
        text: "I'm here for Andrew's Christmas List",
        goto: "intro_left",
      },
      {
        text: "I'm sorry, I'll get out of your way",
        goto: "intro_left",
      },
    ],
  },
  intro_left: {
    who: null,
    prompt: "(You left the room)",
    answers: [
      {
        text: "Go back in",
        goto: "intro_don_annoyed",
      },
      {
        text: "(...)",
        goto: "intro_left",
      },
    ],
    options: ["noBg", "noAudioRender"],
  },
};

export default INTRO_PROMPTS;
