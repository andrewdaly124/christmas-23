import { takeEvery } from "redux-saga/effects";

import { ResponseKey } from "../../ui/assets/prompts/types";
import { gotoKey } from "../actions";

// function* quoteWasChangedSaga({ payload }: { payload: string }) {
function onGotoKey({ payload }: { payload: ResponseKey }) {
  if (payload) {
    // yield put(action(prop));
    console.log("Answered!", payload);
  }
}

export default function* UiStoreSaga() {
  yield takeEvery(gotoKey, onGotoKey);
}
