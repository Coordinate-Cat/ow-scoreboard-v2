export const adjustTierTop500 = ({
  direction,
  tierTop500,
  setTierTop500,
}: {
  rate: string;
  direction: string;
  tierTop500: number;
  setTierTop500: (tierTop500: number) => void;
}) => {
  if (direction === "up" && tierTop500 > 1) setTierTop500(tierTop500 - 1);
  if (direction === "down" && tierTop500 < 500) setTierTop500(tierTop500 + 1);
};
