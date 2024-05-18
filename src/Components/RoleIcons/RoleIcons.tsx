export const RoleIconTank = ({
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
      <path d="m5.4398 34.59v-24.069c0-3.8588 8.0447-8.9157 24.723-8.9157 16.678 0 24.723 5.0568 24.723 8.9157v24.069c0 5.821-19.817 24.133-24.723 24.133-4.9053 0-24.723-18.312-24.723-24.133z" />
    </svg>
  );
};

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

export const RoleIconSupport = ({
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
      <path d="m40.777 54.38c0 1.8962-1.6187 4.3473-3.6536 4.3473h-13.922c-2.0349 0-3.6536-2.4511-3.6536-4.3473v-13.597h-13.597c-1.8962 0-4.3473-1.6187-4.3473-3.6536v-13.922c0-2.0349 2.4511-3.6536 4.3473-3.6536h13.597v-13.597c0-1.8962 1.6187-4.3473 3.6536-4.3473h13.922c2.0349 0 3.6536 2.4511 3.6536 4.3473v13.597h13.597c1.8962 0 4.3473 1.6187 4.3473 3.6536v13.922c0 2.0349-2.4511 3.6536-4.3473 3.6536h-13.597z" />
    </svg>
  );
};
