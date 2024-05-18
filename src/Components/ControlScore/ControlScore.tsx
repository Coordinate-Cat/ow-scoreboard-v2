export const ControlScore = ({
  win,
  lose,
  draw,
  incrementScore,
  decrementScore,
  resetScore,
}: {
  win: number;
  lose: number;
  draw: number;
  incrementScore: (type: string) => void;
  decrementScore: (type: string) => void;
  resetScore: () => void;
}) => {
  return (
    <div className="flex flex-col">
      <h2>SCORE</h2>
      <div className="mt-1 flex items-center">
        <div className="mr-4 flex items-center">
          <div className="mt-1 flex w-20 items-center">
            <p>Win:</p>
            <p id="current-win-score" className="w-8">
              {win}
            </p>
          </div>
          <button
            className="bg-primary h-7 w-5 rounded-sm text-white"
            onClick={() => incrementScore("win")}
          >
            ▲
          </button>
          <button
            className="bg-secondary ml-1 h-7 w-5 rounded-sm text-white"
            onClick={() => decrementScore("win")}
          >
            ▼
          </button>
        </div>
        <div className="mr-4 flex items-center">
          <div className="mt-1 flex w-20 items-center">
            <p>Lose:</p>
            <p id="current-lose-score" className="w-8">
              {lose}
            </p>
          </div>
          <button
            className="bg-primary h-7 w-5 rounded-sm text-white"
            onClick={() => incrementScore("lose")}
          >
            ▲
          </button>
          <button
            className="bg-secondary ml-1 h-7 w-5 rounded-sm text-white"
            onClick={() => decrementScore("lose")}
          >
            ▼
          </button>
        </div>
        <div className="mr-4 flex items-center">
          <div className="mt-1 flex w-20 items-center">
            <p>Draw:</p>
            <p id="current-draw-score" className="w-8">
              {draw}
            </p>
          </div>
          <button
            className="bg-primary h-7 w-5 rounded-sm text-white"
            onClick={() => incrementScore("draw")}
          >
            ▲
          </button>
          <button
            className="bg-secondary ml-1 h-7 w-5 rounded-sm text-white"
            onClick={() => decrementScore("draw")}
          >
            ▼
          </button>
        </div>
        <button
          id="reset-btn"
          className="bg-tertiary mr-4 flex items-center justify-center rounded-sm px-1 pt-1 text-white"
          onClick={resetScore}
        >
          Reset
        </button>
        <p id="error" className="mt-1 text-sm text-red-600">
          You can't go over 999. Please reset the score.
        </p>
      </div>
    </div>
  );
};
