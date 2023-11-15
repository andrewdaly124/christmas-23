import { createReducer } from "@reduxjs/toolkit";

import ALL_PROMPTS from "../../ui/assets/prompts";
import { gotoKey } from "../actions";
import { DEFAULT_STORE_STATE } from "../types";

const reducer = createReducer(DEFAULT_STORE_STATE, (builder) => {
  builder.addCase(gotoKey, (state, { payload }) => {
    state.options.noBg =
      ALL_PROMPTS[payload].options?.indexOf("noBg") !== undefined;
    state.options.noAudioRender =
      ALL_PROMPTS[payload].options?.indexOf("noAudioRender") !== undefined;
    state.numAnswered = state.numAnswered + 1;
    state.promptKey = payload;
  });
});

export default reducer;
