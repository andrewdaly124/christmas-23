import { useSelector } from "react-redux";

import {
  getNoAudioRender,
  getNoBg,
  getNumAnswered,
} from "../../../store/selectors";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import bythesea from "../../assets/audio/bythesea.mp3";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import poker from "../../assets/img/poker.png";
import Dialog from "../Dialog";
import classes from "./index.module.scss";

export default function TheTable() {
  const noBg = useSelector(getNoBg);
  const noAudioRender = useSelector(getNoAudioRender);

  const numAnswered = useSelector(getNumAnswered);

  return (
    <div className={classes.theTableContainer}>
      <div className={classes.theTable}>
        {!noBg && <img src={poker} alt="" />}
      </div>
      <div className={classes.dialog}>
        <Dialog key={numAnswered} />
      </div>
      <div className={classes.audioTrack}>
        {!noAudioRender && <audio src={bythesea} autoPlay />}
      </div>
    </div>
  );
}
