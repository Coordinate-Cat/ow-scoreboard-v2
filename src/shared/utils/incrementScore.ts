import { MAX, DRAW, LOSE, WIN } from "../const/const";

export const incrementScore = ({
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
  if (type === WIN && win < MAX) setWin(win + 1);
  if (type === LOSE && lose < MAX) setLose(lose + 1);
  if (type === DRAW && draw < MAX) setDraw(draw + 1);
};
