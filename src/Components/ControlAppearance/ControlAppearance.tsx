export const ControlAppearance = ({
  colorHex,
  setColorHex,
  setTransparentBgColor,
  defaultColorHex,
}: {
  colorHex: {
    ScoreTitleBgColor: string;
    ScoreTitleTextColor: string;
    CurrentScoreBgColor: string;
    CurrentScoreTextColor: string;
    RoleTitleBgColor: string;
    RoleTitleTextColor: string;
    CurrentRoleBgColor: string;
    CurrentRoleTextColor: string;
    RateTitleBgColor: string;
    RateTitleTextColor: string;
    CurrentRateBgColor: string;
    CurrentRateTextColor: string;
  };
  setColorHex: (colorHex: {
    ScoreTitleBgColor: string;
    ScoreTitleTextColor: string;
    CurrentScoreBgColor: string;
    CurrentScoreTextColor: string;
    RoleTitleBgColor: string;
    RoleTitleTextColor: string;
    CurrentRoleBgColor: string;
    CurrentRoleTextColor: string;
    RateTitleBgColor: string;
    RateTitleTextColor: string;
    CurrentRateBgColor: string;
    CurrentRateTextColor: string;
  }) => void;
  setTransparentBgColor: () => void;
  defaultColorHex: () => void;
}) => {
  return (
    <div>
      <h2>Appearance</h2>
      <div className="mt-2 flex flex-col text-sm">
        {/* Score */}
        <div className="flex items-center">
          <p className="mt-1 w-24">Score Title Bg</p>
          <input
            type="color"
            value={colorHex.ScoreTitleBgColor}
            className="mr-1 h-5 rounded border border-black"
            onChange={(event) =>
              setColorHex({
                ...colorHex,
                ScoreTitleBgColor: event.target.value,
              })
            }
          />
          <p className="mt-1 w-24">Score Title Text</p>
          <input
            type="color"
            value={colorHex.ScoreTitleTextColor}
            className="mr-1 h-5 rounded border border-black"
            onChange={(event) =>
              setColorHex({
                ...colorHex,
                ScoreTitleTextColor: event.target.value,
              })
            }
          />
          <p className="mt-1 w-24">Current Score Bg</p>
          <input
            type="color"
            value={colorHex.CurrentScoreBgColor}
            className="mr-1 h-5 rounded border border-black"
            onChange={(event) =>
              setColorHex({
                ...colorHex,
                CurrentScoreBgColor: event.target.value,
              })
            }
          />
          <p className="mt-1 w-24">Current Score Text</p>
          <input
            type="color"
            value={colorHex.CurrentScoreTextColor}
            className="mr-1 h-5 rounded border border-black"
            onChange={(event) =>
              setColorHex({
                ...colorHex,
                CurrentScoreTextColor: event.target.value,
              })
            }
          />
        </div>

        {/* Role */}
        <div className="flex items-center">
          <p className="mt-1 w-24">Role Title Bg</p>
          <input
            type="color"
            value={colorHex.RoleTitleBgColor}
            className="mr-1 h-5 rounded border border-black"
            onChange={(event) =>
              setColorHex({
                ...colorHex,
                RoleTitleBgColor: event.target.value,
              })
            }
          />
          <p className="mt-1 w-24">Role Title Text</p>
          <input
            type="color"
            value={colorHex.RoleTitleTextColor}
            className="mr-1 h-5 rounded border border-black"
            onChange={(event) =>
              setColorHex({
                ...colorHex,
                RoleTitleTextColor: event.target.value,
              })
            }
          />
          <p className="mt-1 w-24">Current Role Bg</p>
          <input
            type="color"
            value={colorHex.CurrentRoleBgColor}
            className="mr-1 h-5 rounded border border-black"
            onChange={(event) =>
              setColorHex({
                ...colorHex,
                CurrentRoleBgColor: event.target.value,
              })
            }
          />
          <p className="mt-1 w-24">Current Role Text</p>
          <input
            type="color"
            value={colorHex.CurrentRoleTextColor}
            className="mr-1 h-5 rounded border border-black"
            onChange={(event) =>
              setColorHex({
                ...colorHex,
                CurrentRoleTextColor: event.target.value,
              })
            }
          />
        </div>

        {/* Rate */}
        <div className="flex items-center">
          <p className="mt-1 w-24">Rate Title Bg</p>
          <input
            type="color"
            value={colorHex.RateTitleBgColor}
            className="mr-1 h-5 rounded border border-black"
            onChange={(event) =>
              setColorHex({
                ...colorHex,
                RateTitleBgColor: event.target.value,
              })
            }
          />
          <p className="mt-1 w-24">Rate Title Text</p>
          <input
            type="color"
            value={colorHex.RateTitleTextColor}
            className="mr-1 h-5 rounded border border-black"
            onChange={(event) =>
              setColorHex({
                ...colorHex,
                RateTitleTextColor: event.target.value,
              })
            }
          />
          <p className="mt-1 w-24">Current Rate Bg</p>
          <input
            type="color"
            value={colorHex.CurrentRateBgColor}
            className="mr-1 h-5 rounded border border-black"
            onChange={(event) =>
              setColorHex({
                ...colorHex,
                CurrentRateBgColor: event.target.value,
              })
            }
          />
          <p className="mt-1 w-24">Current Rate Text</p>
          <input
            type="color"
            value={colorHex.CurrentRateTextColor}
            className="mr-1 h-5 rounded border border-black"
            onChange={(event) =>
              setColorHex({
                ...colorHex,
                CurrentRateTextColor: event.target.value,
              })
            }
          />
        </div>
      </div>
      <div className="flex">
        <button
          className="mr-1 mt-2 h-7 rounded border border-dashed border-black px-1 pt-1"
          onClick={() => setTransparentBgColor()}
        >
          Transparent
        </button>
        <button
          className="bg-tertiary mt-2 h-7  rounded px-1 pt-1 text-white"
          onClick={() => {
            defaultColorHex();
          }}
        >
          Default
        </button>
      </div>
    </div>
  );
};
