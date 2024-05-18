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
        className={`flex items-center px-2 pt-3 text-6xl leading-none ${
          layout === "vertical" && "w-32"
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
          src="./public/Bronze.png"
          alt="Bronze"
          height="48"
          className={`${rate === "bronze" ? "flex" : "hidden"} mt-1 h-[48px]`}
        />
        <img
          id="silver"
          src="./public/Silver.png"
          alt="Silver"
          height="48"
          className={`${rate === "silver" ? "flex" : "hidden"} mt-1 h-[48px]`}
        />
        <img
          id="gold"
          src="./public/Gold.png"
          alt="Gold"
          height="48"
          className={`${rate === "gold" ? "flex" : "hidden"} mt-1 h-[48px]`}
        />
        <img
          id="platinum"
          src="./public/Platinum.png"
          alt="Platinum"
          height="48"
          className={`${rate === "platinum" ? "flex" : "hidden"} mt-1 h-[48px]`}
        />
        <img
          id="diamond"
          src="./public/Diamond.png"
          alt="Diamond"
          height="48"
          className={`${rate === "diamond" ? "flex" : "hidden"} mt-1 h-[48px]`}
        />
        <img
          id="masters"
          src="./public/Masters.png"
          alt="Masters"
          height="48"
          className={`${rate === "masters" ? "flex" : "hidden"} mt-1 h-[48px]`}
        />
        <img
          id="grandmaster"
          src="./public/Grandmaster.png"
          alt="Grandmaster"
          height="48"
          className={`${rate === "grandmaster" ? "flex" : "hidden"} mt-1 h-[48px]`}
        />
        <img
          id="champion"
          src="./public/Champion.png"
          alt="Champion"
          height="48"
          className={`${rate === "champion" ? "flex" : "hidden"} mt-1 h-[48px]`}
        />
        <img
          id="top500"
          src="./public/Top500.png"
          alt="Top500"
          height="48"
          className={`${rate === "top500" ? "flex" : "hidden"} mt-1 h-[48px]`}
        />
        {rate === "top500" ? (
          <p id="tier" className="pt-3 text-[42px]">
            {tierTop500}
          </p>
        ) : (
          <p id="tier" className="pl-3 pt-3">
            {tier}
          </p>
        )}
      </div>
    </div>
  );
};
