import { createAction } from "@reduxjs/toolkit";

import { ResponseKey } from "../../ui/assets/prompts/types";

export const gotoKey = createAction<ResponseKey>("GOTO_KEY");
