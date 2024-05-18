export const RoleIconDamage = ({
  colorHex,
}: {
  colorHex: {
    CurrentRoleTextColor: string;
  };
}) => {
  return (
    <svg
      height="48"
      version="1.1"
      viewBox="0 0 60.325 60.325"
      fill={colorHex.CurrentRoleTextColor}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m36.451 58.73v-9.6006h-12.577v9.6006zm0-12.997v-34.224c0-5.2977-5.0459-9.8967-6.2886-9.8967s-6.2886 4.599-6.2886 9.8967v34.224zm18.777 12.997v-9.6006h-12.577v9.6006zm0-12.997v-34.224c0-5.2977-5.0459-9.8967-6.2886-9.8967s-6.2886 4.599-6.2886 9.8967v34.224zm-37.553 12.997v-9.6006h-12.577v9.6006zm0-12.997v-34.224c0-5.2977-5.0459-9.8967-6.2886-9.8967s-6.2886 4.599-6.2886 9.8967v34.224z" />
    </svg>
  );
};
