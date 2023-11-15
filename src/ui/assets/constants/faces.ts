// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import big_moe from "../img/big_moe.png";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import don from "../img/don.png";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import jimmy from "../img/jimmy.png";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import tony from "../img/tony.png";
import { NameKey } from "../prompts/types";

export const FACES: Map<NameKey, any> = new Map([
  ["tony", tony],
  ["don", don],
  ["jimmy", jimmy],
  ["big_moe", big_moe],
]);
