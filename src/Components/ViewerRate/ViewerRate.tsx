export const ViewerRate = ({
  rate,
  tier,
  tierTop500,
  layout,
  colorHex,
}: {
  rate: string;
  tier: number;
  tierTop500: number;
  layout: string;
  colorHex: {
    RateTitleBgColor: string;
    RateTitleTextColor: string;
    CurrentRateBgColor: string;
    CurrentRateTextColor: string;
  };
}) => {
  return (
    <div className="flex w-fit">
      <div
        style={{
          backgroundColor: colorHex.RateTitleBgColor,
          color: colorHex.RateTitleTextColor,
        }}
        className={`flex items-center px-2 pt-2 text-6xl leading-none ${
          layout === "vertical" && "w-32 justify-center"
        }`}
      >
        Rate
      </div>
      <div
        style={{
          backgroundColor: colorHex.CurrentRateBgColor,
          color: colorHex.CurrentRateTextColor,
        }}
        className={`flex items-center bg-gray-300 px-2 text-6xl text-gray-800 ${
          layout === "vertical" && "w-44 justify-center"
        }`}
      >
        <img
          id="bronze"
          src="/Bronze.png"
          alt="Bronze"
          height="48"
          className={`${rate === "bronze" ? "flex" : "hidden"} mt-1 h-[48px]`}
        />
        <img
          id="silver"
          src="/Silver.png"
          alt="Silver"
          height="48"
          className={`${rate === "silver" ? "flex" : "hidden"} mt-1 h-[48px]`}
        />
        <img
          id="gold"
          src="/Gold.png"
          alt="Gold"
          height="48"
          className={`${rate === "gold" ? "flex" : "hidden"} mt-1 h-[48px]`}
        />
        <img
          id="platinum"
          src="/Platinum.png"
          alt="Platinum"
          height="48"
          className={`${rate === "platinum" ? "flex" : "hidden"} mt-1 h-[48px]`}
        />
        <img
          id="diamond"
          src="/Diamond.png"
          alt="Diamond"
          height="48"
          className={`${rate === "diamond" ? "flex" : "hidden"} mt-1 h-[48px]`}
        />
        <img
          id="masters"
          src="/Masters.png"
          alt="Masters"
          height="48"
          className={`${rate === "masters" ? "flex" : "hidden"} mt-1 h-[48px]`}
        />
        <img
          id="grandmaster"
          src="/Grandmaster.png"
          alt="Grandmaster"
          height="48"
          className={`${rate === "grandmaster" ? "flex" : "hidden"} mt-1 h-[48px]`}
        />
        <img
          id="champion"
          src="/Champion.png"
          alt="Champion"
          height="48"
          className={`${rate === "champion" ? "flex" : "hidden"} mt-1 h-[48px]`}
        />
        <img
          id="top500"
          src="/Top500.png"
          alt="Top500"
          height="48"
          className={`${rate === "top500" ? "flex" : "hidden"} mt-1 h-[48px]`}
        />
        {rate === "top500" ? (
          <p id="tier" className="mt-2 text-6xl">
            {tierTop500}
          </p>
        ) : (
          <p id="tier" className="mt-2 pl-1 text-6xl">
            {tier}
          </p>
        )}
      </div>
    </div>
  );
};
