export const ControlWing = ({
  setWings,
}: {
  setWings: (wing: boolean) => void;
}) => {
  return (
    <div className="flex flex-col">
      <h2>WING</h2>
      <div className="mt-1 flex">
        <button
          className="bg-primary  h-7 w-fit rounded-sm px-1 pt-1 text-white"
          onClick={() => setWings(false)}
        >
          on
        </button>
        <button
          className="bg-secondary ml-1 h-7 w-fit rounded-sm px-1 pt-1 text-white"
          onClick={() => setWings(true)}
        >
          off
        </button>
      </div>
    </div>
  );
};
