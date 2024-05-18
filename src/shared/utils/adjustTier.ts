export const adjustTier = ({
  direction,
  tier,
  setTier,
}: {
  rate: string;
  direction: string;
  tier: number;
  setTier: (tier: number) => void;
}) => {
  if (direction === "up" && tier > 1) setTier(tier - 1);
  if (direction === "down" && tier < 5) setTier(tier + 1);
};
