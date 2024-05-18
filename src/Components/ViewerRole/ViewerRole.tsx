import {
  RoleIconDamage,
  RoleIconSupport,
  RoleIconTank,
} from "../RoleIcons/RoleIcons";

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
        className={`flex items-center px-2 pt-2 text-6xl leading-none ${
          layout === "vertical" && "w-32 justify-center"
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
          layout === "vertical" && "w-44 justify-start"
        }`}
      >
        {role === "tank" && (
          <div className="flex">
            <RoleIconTank colorHex={colorHex} />
          </div>
        )}
        {role === "damage" && (
          <div className="flex">
            <RoleIconDamage colorHex={colorHex} />
          </div>
        )}
        {role === "support" && (
          <div className="flex">
            <RoleIconSupport colorHex={colorHex} />
          </div>
        )}
        {layout === "vertical" && role === "tank" && (
          <div className="ml-2 mt-2 text-6xl">tank</div>
        )}
        {layout === "vertical" && role === "damage" && (
          <div className="ml-2 mt-2 text-6xl">dps</div>
        )}
        {layout === "vertical" && role === "support" && (
          <div className="ml-2 mt-2 text-6xl">support</div>
        )}
      </div>
    </div>
  );
};
