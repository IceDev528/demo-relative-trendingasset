import logo from "../assets/icons/logo.svg";
import TrendingCard from "../components/TrendingCard";
import btcLogo from "../assets/icons/btc.svg";
import busdLogo from "../assets/icons/busd.svg";
import solLogo from "../assets/icons/sol.svg";
import ethLogo from "../assets/icons/eth.svg";
import shibLogo from "../assets/icons/shib.svg";

const Home = () => {
  const trendingList = [
    {
      id: "btc",
      logo: btcLogo,
      title: "Bitcoin (BTC)",
      change: "+10%",
      price: 31812.8,
      tvl: 60000,
      pairs: [
        {
          id: "sol",
          logo: solLogo,
        },
        {
          id: "eth",
          logo: ethLogo,
        },
        {
          id: "busd",
          logo: busdLogo,
        },
      ],
    },
    {
      id: "sol",
      logo: solLogo,
      title: "Solana (SOL)",
      change: "-12.32%",
      price: 32.83,
      tvl: 60000,
      pairs: [
        {
          id: "btc",
          logo: btcLogo,
        },
        {
          id: "eth",
          logo: ethLogo,
        },
        {
          id: "busd",
          logo: busdLogo,
        },
      ],
    },
    {
      id: "eth",
      logo: ethLogo,
      title: "Ethereum (ETH)",
      change: "-11.93%",
      price: 1466.45,
      tvl: 60000,
      pairs: [
        {
          id: "sol",
          logo: solLogo,
        },
        {
          id: "btc",
          logo: btcLogo,
        },
        {
          id: "busd",
          logo: busdLogo,
        },
      ],
    },
    {
      id: "busd",
      logo: busdLogo,
      title: "Binance USD (BUSD)",
      change: "+0.26%",
      price: 1,
      tvl: 60000,
      pairs: [
        {
          id: "sol",
          logo: solLogo,
        },
        {
          id: "eth",
          logo: ethLogo,
        },
        {
          id: "busd",
          logo: busdLogo,
        },
      ],
    },
    {
      id: "shib",
      logo: shibLogo,
      title: "Shiba Inu (SHIB)",
      change: "-8.1%",
      price: 0.00000001948,
      tvl: 60000,
      pairs: [
        {
          id: "sol",
          logo: solLogo,
        },
        {
          id: "eth",
          logo: ethLogo,
        },
        {
          id: "busd",
          logo: busdLogo,
        },
      ],
    },
  ];

  return (
    <div style={{ boxShadow: "box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);" }}>
      <div className="mb-14 flex items-center">
        <img src={logo} className="mr-4" alt="logo" />
        <span>Trending Assets</span>
      </div>
      <div className="grid grid-cols-1 gap-[70px] sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {trendingList.map((t, idx) => (
          <TrendingCard
            id={t.id}
            logo={t.logo}
            title={t.title}
            price={t.price}
            change={t.change}
            tvl={t.tvl}
            pairs={t.pairs}
          ></TrendingCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
