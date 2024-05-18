export const changeRole = ({
  event,
  setRole,
}: {
  event: any;
  setRole: (role: string) => void;
}) => {
  setRole(event.target.value);
};
