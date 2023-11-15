import HOME_PROMPTS from "./home";
import INTRO_PROMPTS from "./intros";
import { PromptTree } from "./types";

const ALL_PROMPTS: PromptTree<string> = {
  ...INTRO_PROMPTS,
  ...HOME_PROMPTS,
};

export default ALL_PROMPTS;
