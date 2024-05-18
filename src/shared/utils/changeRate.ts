export const changeRate = ({
  event,
  setRate,
}: {
  event: any;
  setRate: (rate: string) => void;
}) => {
  setRate(event.target.value);
};
