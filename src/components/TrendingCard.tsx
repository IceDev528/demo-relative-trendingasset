import cardBG from "../assets/icons/card.svg";

interface IPairs {
  id: string;
  logo: string;
}

interface ITrend {
  id: string;
  logo: string;
  title: string;
  price: number;
  change: string;
  tvl: number;
  pairs: IPairs[];
}

function commafy(num: string) {
  var str = num.split(".");
  if (str[0].length >= 4) {
    str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, "$1,");
  }
  return str.join(".");
}

const TrendingCard = ({
  id,
  logo,
  title,
  price,
  change,
  tvl,
  pairs,
}: ITrend) => {
  return (
    <div className="w-[290px] m-auto">
      <div
        className="m-auto h-[100px] w-[100px] rounded-full p-0.5"
        style={{
          background:
            "linear-gradient(180deg, rgba(236, 240, 255, 0.1) 0%, rgba(59, 63, 87, 0) 100%)",
        }}
      >
        <div
          className={`card ${id} flex h-full w-full items-center justify-center rounded-full`}
        >
          <img src={logo} width={50} height={50} alt="trending logo" />
        </div>
      </div>
      <div className="relative -mt-[50px] h-96 w-full">
        <img src={cardBG} alt="card" />
        <div className="absolute top-[72px] left-0 grid w-full gap-1 px-5 text-center">
          <span className="text-sm text-text">{title}</span>
          <div
            className="rounded-2xl p-[1px]"
            style={{
              background:
                "linear-gradient(180deg, rgba(236, 240, 255, 0.1) 0%, rgba(59, 63, 87, 0) 100%)",
            }}
          >
            <div className="relative flex w-full items-center justify-center rounded-2xl bg-bg">
              <span>
                {"$" + commafy(Number(price).toFixed(id === "shib" ? 11 : 2))}
              </span>
              <span
                className={`absolute top-0 right-3 block text-sm ${
                  change.substring(0, 1) === "+"
                    ? "text-green-secondary"
                    : "text-red-secondary"
                }`}
              >
                {change}
              </span>
            </div>
          </div>
          <span className="text-sm text-text">Price</span>
          <div
            className="rounded-2xl p-[1px]"
            style={{
              background:
                "linear-gradient(180deg, rgba(236, 240, 255, 0.1) 0%, rgba(59, 63, 87, 0) 100%)",
            }}
          >
            <div className="relative flex w-full items-center justify-center rounded-2xl bg-bg">
              <span>{"$" + tvl.toLocaleString()}</span>
            </div>
          </div>
          <span className="text-sm text-text">TVL</span>
          <div className="flex items-center justify-center gap-3 rounded-3xl bg-bg px-4 py-2 w-fit m-auto">
            {pairs &&
              pairs.map((p) => (
                <img src={p.logo} width={22} height={22} alt="pair logo" />
              ))}
          </div>
          <span className="text-sm text-text">Popular pairs</span>
        </div>
      </div>
    </div>
  );
};

export default TrendingCard;
