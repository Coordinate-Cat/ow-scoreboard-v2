export const resetScore = ({
  setWin,
  setLose,
  setDraw,
}: {
  setWin: (value: number) => void;
  setLose: (value: number) => void;
  setDraw: (value: number) => void;
}) => {
  setWin(0);
  setLose(0);
  setDraw(0);
};
