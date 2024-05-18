export const ControlTier = ({
  rate,
  tier,
  tierTop500,
  adjustTier,
  adjustTierTop500,
}: {
  rate: string;
  tier: number;
  tierTop500: number;
  adjustTier: (direction: string) => void;
  adjustTierTop500: (direction: string) => void;
}) => {
  return (
    <div id="control-tier" className="ml-2 mt-1 flex flex-col">
      <div className="mt-1 flex">
        <div className="mt-1 flex w-20 items-center">
          <p id="current-tier-text">Tier:</p>
          {rate === "top500" ? (
            <p id="current-tier" className="tier">
              {tierTop500}
            </p>
          ) : (
            <p id="current-tier" className="tier">
              {tier}
            </p>
          )}
        </div>
        <button
          className="bg-primary h-7 w-5 rounded-sm text-white"
          onClick={
            rate === "top500"
              ? () => adjustTierTop500("up")
              : () => adjustTier("up")
          }
        >
          ▲
        </button>
        <button
          className="bg-secondary ml-1 h-7 w-5 rounded-sm text-white"
          onClick={
            rate === "top500"
              ? () => adjustTierTop500("down")
              : () => adjustTier("down")
          }
        >
          ▼
        </button>
      </div>
    </div>
  );
};
