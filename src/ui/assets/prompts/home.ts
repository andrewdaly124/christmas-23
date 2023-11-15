import { PromptTree } from "./types";

export type HomeKey = "home_1";

const HOME_PROMPTS: PromptTree<HomeKey> = {
  home_1: {
    who: "tony",
    prompt: "You're gettin' on my nerves pal.",
    answers: [{ text: "Sorry Tony", goto: "intro_exodus" }],
  },
};

export default HOME_PROMPTS;
