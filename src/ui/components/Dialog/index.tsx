import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { gotoKey } from "../../../store/actions";
import { getCurrentPromptKey } from "../../../store/selectors";
import { FACES } from "../../assets/constants/faces";
import { NAMES } from "../../assets/constants/names";
import ALL_PROMPTS from "../../assets/prompts";
import { Prompt } from "../../assets/prompts/types";
import classes from "./index.module.scss";

function Response({ text, onClick }: { text: string; onClick: () => void }) {
  return (
    <div className={classes.response} onClick={onClick}>
      {`> ${text}`}
    </div>
  );
}
const TEXT_DELAY = 25;

export default function Dialog() {
  const dispatch = useDispatch();

  const promptKey = useSelector(getCurrentPromptKey);

  const sentenceIndexRef = useRef<number>(-1);
  const shownWordsRef = useRef<string[]>([]);

  const [shownWords, setShownWords] = useState<string[]>([]);
  const [sentenceIndex, setSentenceIndex] = useState<number>(0);

  const { who, prompt, answers } = useMemo(
    () => ALL_PROMPTS[promptKey],
    [promptKey]
  );

  const seperatedWords = useMemo(() => prompt.split(" "), [prompt]);

  useEffect(() => {
    if (
      sentenceIndexRef.current !== sentenceIndex &&
      sentenceIndex < seperatedWords.length
    ) {
      shownWordsRef.current = [
        ...shownWordsRef.current,
        seperatedWords[sentenceIndex],
      ];
      sentenceIndexRef.current = sentenceIndex;
      setShownWords([...shownWordsRef.current]);
      setTimeout(() => {
        setSentenceIndex(sentenceIndex + 1);
      }, TEXT_DELAY);
    }
  }, [sentenceIndex, seperatedWords]);

  // Set state in a memo is bad
  const done = useMemo(() => {
    if (sentenceIndex === seperatedWords.length) {
      return true;
    }
    return false;
  }, [sentenceIndex, seperatedWords.length]);

  const promptString = useMemo(() => shownWords.join(" "), [shownWords]);

  const faceUrl = useMemo(() => (who !== null ? FACES.get(who) : who), [who]);
  const name = useMemo(() => (who !== null ? NAMES.get(who) : ""), [who]);

  const respond = useCallback(
    (response: Prompt["answers"][number]["goto"]) => {
      if (typeof response === "string") {
        dispatch(gotoKey(response));
      } else {
        console.log("imp random response");
      }
    },
    [dispatch]
  );

  return (
    <div className={classes.dialogContainer}>
      <div className={classes.speaker}>
        <div className={classes.face}>
          <div className={classes.portrait}>
            {faceUrl && <img src={faceUrl} />}
          </div>
          <div className={classes.name}>{name}</div>
        </div>
        <div className={classes.prompt}>
          <div className={classes.asterisk}>{"*"}</div>
          <div className={classes.words}>{promptString}</div>
        </div>
      </div>
      <div className={classes.responses}>
        {done &&
          answers.map((ans, i) => (
            <Response
              key={`${promptKey}-${i}`}
              text={ans.text}
              onClick={() => respond(ans.goto)}
            />
          ))}
      </div>
    </div>
  );
}
