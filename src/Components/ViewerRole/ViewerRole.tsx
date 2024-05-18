import { RoleIconDamage } from "../RoleIcons/RoleIcons";

export const ViewerRole = ({
  role,
  layout,
  colorHex,
}: {
  role: string;
  layout: string;
  colorHex: {
    RoleTitleBgColor: string;
    RoleTitleTextColor: string;
    CurrentRoleBgColor: string;
    CurrentRoleTextColor: string;
  };
}) => {
  return (
    <div className="flex w-fit">
      <div
        style={{
          backgroundColor: colorHex.RoleTitleBgColor,
          color: colorHex.RoleTitleTextColor,
        }}
        className={`flex items-center px-2 pt-3 text-6xl leading-none text-gray-800 ${
          layout === "vertical" && "w-32"
        }`}
      >
        Role
      </div>
      <div
        style={{
          backgroundColor: colorHex.CurrentRoleBgColor,
          color: colorHex.CurrentRoleTextColor,
        }}
        className={`flex items-center bg-gray-300 px-2 text-6xl text-gray-800 ${
          layout === "vertical" && "w-44 justify-center"
        }`}
      >
        <img
          id="tank"
          src="./src/assets/role/tank.svg"
          alt="Tank"
          height="48"
          className={`${role === "tank" ? "flex" : "hidden"} mt-1 h-[48px]`}
        />
        {role === "damage" && (
          <div className="flex">
            <RoleIconDamage colorHex={colorHex} />
          </div>
        )}
        <img
          id="support"
          src="./src/assets/role/support.svg"
          alt="Support"
          height="48"
          className={`${role === "support" ? "flex" : "hidden"} mt-1 h-[48px]`}
        />
        {layout === "vertical" && role === "tank" && (
          <div className="ml-2 mt-2 text-[42px]">tank</div>
        )}
        {layout === "vertical" && role === "damage" && (
          <div className="ml-2 mt-2 text-[42px]">dps</div>
        )}
        {layout === "vertical" && role === "support" && (
          <div className="ml-2 mt-2 text-[42px]">support</div>
        )}
      </div>
    </div>
  );
};
