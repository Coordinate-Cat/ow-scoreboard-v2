import { DRAW, LOSE, WIN } from "../const/const";

export const decrementScore = ({
  type,
  win,
  setWin,
  lose,
  setLose,
  draw,
  setDraw,
}: {
  type: string;
  win: number;
  setWin: (value: number) => void;
  lose: number;
  setLose: (value: number) => void;
  draw: number;
  setDraw: (value: number) => void;
}) => {
  if (type === WIN && win > 0) setWin(win - 1);
  if (type === LOSE && lose > 0) setLose(lose - 1);
  if (type === DRAW && draw > 0) setDraw(draw - 1);
};
