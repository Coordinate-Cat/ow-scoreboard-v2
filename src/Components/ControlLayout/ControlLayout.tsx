export const ControlLayout = ({
  layout,
  setLayout,
}: {
  layout: string;
  setLayout: (layout: string) => void;
}) => {
  return (
    <div className="flex flex-col">
      <h2>LAYOUT</h2>
      <div className="mt-2 flex">
        <button
          className={`mr-1 h-7 w-fit rounded px-1 pt-1 text-white ${
            layout === "horizontal" ? "bg-primary" : "bg-tertiary"
          }`}
          onClick={() => setLayout("horizontal")}
        >
          Horizontal
        </button>
        <button
          className={`h-7 w-fit rounded px-1 pt-1 text-white ${
            layout === "vertical" ? "bg-primary" : "bg-tertiary"
          }`}
          onClick={() => setLayout("vertical")}
        >
          Vertical
        </button>
      </div>
    </div>
  );
};
