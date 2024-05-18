import "./styles.css";

import { ControlScore } from "./Components/ControlScore/ControlScore";
import { ControlRole } from "./Components/ControlRole/ControlRole";
import { ControlRate } from "./Components/ControlRate/ControlRate";
import { ControlTier } from "./Components/ControlTier/ControlTier";
// import { ControlWing } from "./Components/ControlWing/ControlWing";
import { ViewerScore } from "./Components/ViewerScore/ViewerScore";
import { ViewerRole } from "./Components/ViewerRole/ViewerRole";
import { ViewerRate } from "./Components/ViewerRate/ViewerRate";

import { useStore } from "./shared/store/store";

import { incrementScore } from "./shared/utils/incrementScore";
import { decrementScore } from "./shared/utils/decrementScore";

import { resetScore } from "./shared/utils/resetScore";
import { useError } from "./shared/hooks/useError";
import { changeRate } from "./shared/utils/changeRate";
import { adjustTier } from "./shared/utils/adjustTier";
import { changeRole } from "./shared/utils/changeRole";
import { adjustTierTop500 } from "./shared/utils/adjustTierTop500";
import { ControlLayout } from "./Components/ControlLayout/ControlLayout";
import { ControlAppearance } from "./Components/ControlAppearance/ControlAppearance";

function App() {
  const {
    layout,
    setLayout,
    win,
    setWin,
    lose,
    setLose,
    draw,
    setDraw,
    role,
    setRole,
    rate,
    setRate,
    tier,
    setTier,
    tierTop500,
    setTierTop500,
    wing,
    // setWings,
    colorHex,
    setColorHex,
  } = useStore();

  useError(win, lose, draw);

  const setTransparentBgColor = () => {
    const newColorHex = {
      ScoreTitleBgColor: "",
      ScoreTitleTextColor: colorHex.ScoreTitleTextColor,
      RoleTitleBgColor: "transparent",
      RoleTitleTextColor: colorHex.RoleTitleTextColor,
      RateTitleBgColor: "transparent",
      RateTitleTextColor: colorHex.RateTitleTextColor,
      CurrentScoreBgColor: "transparent",
      CurrentScoreTextColor: colorHex.CurrentScoreTextColor,
      CurrentRoleBgColor: "transparent",
      CurrentRoleTextColor: colorHex.CurrentRoleTextColor,
      CurrentRateBgColor: "transparent",
      CurrentRateTextColor: colorHex.CurrentRateTextColor,
    };
    setColorHex(newColorHex);

    return newColorHex;
  };

  const defaultColorHex = () => {
    const newColorHex = {
      // Title colors
      ScoreTitleBgColor: "#ffffff",
      ScoreTitleTextColor: "#2f2f2f",
      RoleTitleBgColor: "#ffffff",
      RoleTitleTextColor: "#2f2f2f",
      RateTitleBgColor: "#ffffff",
      RateTitleTextColor: "#2f2f2f",

      // Current Record colors
      CurrentScoreBgColor: "#e9e9e9",
      CurrentScoreTextColor: "#2f2f2f",
      CurrentRoleBgColor: "#e9e9e9",
      CurrentRoleTextColor: "#2f2f2f",
      CurrentRateBgColor: "#e9e9e9",
      CurrentRateTextColor: "#2f2f2f",
    };
    setColorHex(newColorHex);

    return newColorHex;
  };

  return (
    <div>
      {/* --------------- Viewer --------------- */}
      <div
        id="viewer"
        className={`flex h-[140px] items-start justify-start bg-[#00ff00] ${
          layout === "vertical" && "h-[280px]"
        }`}
      >
        <div
          className={`flex items-start justify-center py-8 pl-5 ${
            layout === "vertical" ? "flex-col" : "flex-row"
          }`}
        >
          {layout === "horizontal" && wing && (
            <div
              id="wing-left"
              className={`wing-left-downer bg-[${colorHex.ScoreTitleBgColor}]`}
            ></div>
            // <div id="wing-left" className="wing-left-upper"></div>
          )}

          <ViewerScore
            win={win}
            lose={lose}
            draw={draw}
            layout={layout}
            colorHex={colorHex}
          />
          <ViewerRole role={role} layout={layout} colorHex={colorHex} />
          <ViewerRate
            rate={rate}
            tier={tier}
            tierTop500={tierTop500}
            layout={layout}
            colorHex={colorHex}
          />

          {layout === "horizontal" && wing && (
            // <div id="wing-right" className="wing-right-downer"></div>
            <div id="wing-right" className="wing-right-upper"></div>
          )}
        </div>
      </div>

      {/* --------------- Control Panel --------------- */}
      <div
        className={`flex w-full overflow-auto bg-white ${
          layout === "vertical" ? "h-[390px]" : "h-[540px]"
        }`}
      >
        <div className="m-0 flex w-full flex-col p-[20px] pt-2 text-[24px] text-[#2f2f2f]">
          <div className="flex flex-col pb-8">
            <div className="flex w-full items-center justify-center">
              <img
                src="./src/assets/Overwatch_circle_logo.svg"
                alt="Overwatch"
                width={24}
              />
            </div>
            <ControlScore
              win={win}
              lose={lose}
              draw={draw}
              incrementScore={(type: string) =>
                incrementScore({
                  type,
                  win,
                  setWin,
                  lose,
                  setLose,
                  draw,
                  setDraw,
                })
              }
              decrementScore={(type: string) =>
                decrementScore({
                  type,
                  win,
                  setWin,
                  lose,
                  setLose,
                  draw,
                  setDraw,
                })
              }
              resetScore={() => resetScore({ setWin, setLose, setDraw })}
            />
            <ControlRole
              role={role}
              changeRole={(event: React.ChangeEvent<HTMLInputElement>) => {
                changeRole({ event, setRole });
              }}
            />
            <h2>RATE</h2>
            <div className="flex items-center">
              <ControlRate
                rate={rate}
                changeRate={(event: React.ChangeEvent<HTMLInputElement>) => {
                  changeRate({ event, setRate });
                }}
              />
              <div className="mt-2 h-full w-[1px] bg-black"></div>
              <ControlTier
                tier={tier}
                tierTop500={tierTop500}
                rate={rate}
                adjustTier={(direction: string) =>
                  adjustTier({ rate, direction, tier, setTier })
                }
                adjustTierTop500={(direction: string) =>
                  adjustTierTop500({
                    rate,
                    direction,
                    tierTop500,
                    setTierTop500,
                  })
                }
              />
            </div>
            {/* {layout === "horizontal" && <ControlWing setWings={setWings} />} */}
            <ControlLayout layout={layout} setLayout={setLayout} />
            <ControlAppearance
              colorHex={colorHex}
              setColorHex={setColorHex}
              setTransparentBgColor={setTransparentBgColor}
              defaultColorHex={defaultColorHex}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
