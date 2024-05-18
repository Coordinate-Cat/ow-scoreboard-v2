export const ControlRole = ({
  role,
  changeRole,
}: {
  role: string;
  changeRole: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="flex flex-col">
      <h2>ROLE</h2>
      <div className="mt-1 flex">
        <div className="w-44">
          <input
            type="radio"
            id="tank-btn"
            name="role"
            value="tank"
            className="role-btn"
            checked={role === "tank"}
            onChange={changeRole}
          />
          <label htmlFor="tank-btn">Tank</label>
        </div>
        <div className="w-44">
          <input
            type="radio"
            id="damage-btn"
            name="role"
            value="damage"
            className="role-btn"
            checked={role === "damage"}
            onChange={changeRole}
          />
          <label htmlFor="damage-btn">Damage</label>
        </div>
        <div className="w-44">
          <input
            type="radio"
            id="support-btn"
            name="role"
            value="support"
            className="role-btn"
            checked={role === "support"}
            onChange={changeRole}
          />
          <label htmlFor="support-btn">Support</label>
        </div>
      </div>
    </div>
  );
};
