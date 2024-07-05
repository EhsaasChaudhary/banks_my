import HeaderBox from "@/components/ui/HeaderBox";
import TotalBalanceBox from "@/components/ui/TotalBalanceBox";

const Home = () => {
  const loggedin = { firstname: "Ehsaas" };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedin?.firstname || "Guest"}
            subtext="Access and manage your bank account and transactions with utmost efficiency"
          />
        </header>

        <TotalBalanceBox 
        account={[]}
        totalBanks={1}
        totalCurrentBalance={1251.35}
        />
      </div>
    </section>
  );
};

export default Home;
