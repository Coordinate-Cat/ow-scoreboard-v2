export const ViewerScore = ({
  win,
  lose,
  draw,
  layout,
  colorHex,
}: {
  win: number;
  lose: number;
  draw: number;
  layout: string;
  colorHex: {
    ScoreTitleBgColor: string;
    ScoreTitleTextColor: string;
    CurrentScoreBgColor: string;
    CurrentScoreTextColor: string;
  };
}) => {
  return (
    <div className={`flex w-auto`}>
      <div
        style={{
          backgroundColor: colorHex.ScoreTitleBgColor,
          color: colorHex.ScoreTitleTextColor,
        }}
        className={`flex items-center px-2 pt-3 text-6xl leading-none ${
          layout === "vertical" && "w-32"
        }`}
      >
        Score
      </div>
      <div
        style={{
          backgroundColor: colorHex.CurrentScoreBgColor,
          color: colorHex.CurrentScoreTextColor,
        }}
        className={`flex items-center px-2 pt-3 text-6xl ${
          layout === "vertical" && "w-44 justify-center"
        }`}
      >
        <p id="win-score">{win}</p>
        {"-"}
        <p id="lose-score">{lose}</p>
        {"-"}
        <p id="draw-score">{draw}</p>
      </div>
    </div>
  );
};
