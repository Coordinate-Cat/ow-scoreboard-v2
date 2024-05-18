export const ControlRate = ({
  rate,
  changeRate,
}: {
  rate: string;
  changeRate: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="flex flex-col">
      <div className="mt-1 flex flex-col">
        <div className="flex items-center">
          <div className="w-44">
            <input
              type="radio"
              id="bronze-btn"
              name="rate"
              value="bronze"
              checked={rate === "bronze"}
              onChange={changeRate}
            />
            <label htmlFor="bronze-btn" className="flex items-center">
              <div className="mb-1 mr-1 flex w-8 justify-center">
                <img src="/Bronze.png" alt="Bronze" width="24" />
              </div>
              Bronze
            </label>
          </div>
          <div className="w-44">
            <input
              type="radio"
              id="silver-btn"
              name="rate"
              value="silver"
              className="rate-btn"
              checked={rate === "silver"}
              onChange={changeRate}
            />
            <label htmlFor="silver-btn" className="flex items-center">
              <div className="mb-1 mr-1 flex w-8 justify-center">
                <img src="/Silver.png" alt="Silver" width="24" />
              </div>
              Silver
            </label>
          </div>
          <div className="w-32">
            <input
              type="radio"
              id="gold-btn"
              name="rate"
              value="gold"
              className="rate-btn"
              checked={rate === "gold"}
              onChange={changeRate}
            />
            <label htmlFor="gold-btn" className="flex items-center">
              <div className="mb-1 mr-1 flex w-8 justify-center">
                <img src="/Gold.png" alt="Gold" width="24" />
              </div>
              Gold
            </label>
          </div>
        </div>

        <div className="flex items-center">
          <div className="w-44">
            <input
              type="radio"
              id="platinum-btn"
              name="rate"
              value="platinum"
              className="rate-btn"
              checked={rate === "platinum"}
              onChange={changeRate}
            />
            <label htmlFor="platinum-btn" className="flex items-center">
              <div className="mb-1 mr-1 flex w-8 justify-center">
                <img src="/Platinum.png" alt="Platinum" width="24" />
              </div>
              Platinum
            </label>
          </div>
          <div className="w-44">
            <input
              type="radio"
              id="diamond-btn"
              name="rate"
              value="diamond"
              className="rate-btn"
              checked={rate === "diamond"}
              onChange={changeRate}
            />
            <label htmlFor="diamond-btn" className="flex items-center">
              <div className="mb-1 mr-1 flex w-8 justify-center">
                <img src="/Diamond.png" alt="Diamond" width="24" />
              </div>
              Diamond
            </label>
          </div>
          <div className="w-38">
            <input
              type="radio"
              id="masters-btn"
              name="rate"
              value="masters"
              className="rate-btn"
              checked={rate === "masters"}
              onChange={changeRate}
            />
            <label htmlFor="masters-btn" className="flex items-center">
              <div className="mb-1 mr-1 flex w-8 justify-center">
                <img src="/Masters.png" alt="Masters" width="28" />
              </div>
              Masters
            </label>
          </div>
        </div>

        <div className="mt-[2px] flex items-center">
          <div className="w-44">
            <input
              type="radio"
              id="grandmaster-btn"
              name="rate"
              value="grandmaster"
              className="rate-btn"
              checked={rate === "grandmaster"}
              onChange={changeRate}
            />
            <label htmlFor="grandmaster-btn" className="flex items-center">
              <div className="mb-1 mr-1 flex w-8 justify-center">
                <img src="/Grandmaster.png" alt="Grandmaster" width="32" />
              </div>
              Grandmaster
            </label>
          </div>
          <div className="w-44">
            <input
              type="radio"
              id="champion-btn"
              name="rate"
              value="champion"
              className="rate-btn"
              checked={rate === "champion"}
              onChange={changeRate}
            />
            <label htmlFor="champion-btn" className="flex items-center">
              <div className="mb-1 mr-1 flex w-8 justify-center">
                <img src="/Champion.png" alt="Champion" width="32" />
              </div>
              Champion
            </label>
          </div>
          <div className="w-32">
            <input
              type="radio"
              id="top500-btn"
              name="rate"
              value="top500"
              className="rate-btn"
              checked={rate === "top500"}
              onChange={changeRate}
            />
            <label htmlFor="top500-btn" className="flex items-center">
              <div className="mb-1 mr-1 flex w-8 justify-center">
                <img src="/Top500.png" alt="Top500" width="32" />
              </div>
              Top500
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
