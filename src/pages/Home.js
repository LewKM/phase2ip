import { useNavigate } from "react-router-dom";
import "../css/Home.css";
// eslint-disable-next-line no-undef

export default function LandingPage() {
  let nav = useNavigate();
  const routeChange = () => {
    nav("/add");
  };
  return (
    <div className="landing-page">
      <div className="content">
        <h1>SPERIZONS FOREX Ideas Platform.</h1>
        <p>
          This is a forex forum app that allows you to create,
          Welcome to the trading chat discussion website! This is a place where traders can come to share ideas and discuss the markets. Feel free to post your ideas and questions here, and please be respectful of other members. Let's make this a great place to learn and grow together!
        </p>
        <p>
        Forex trading is the act of simultaneously buying one currency and selling another. The purpose of forex trading is to exchange one currency for another in order to make a profit. For example, if a trader believes that the US dollar will appreciate against the Japanese yen, they will buy US dollars and sell Japanese yen.
        </p>
        <p>
        In the forex market, "smart money" is a term used to describe the collective actions of large professional traders, such as banks, hedge funds, and other institutional investors. These traders have deep pockets and access to information and resources that retail traders do not. As a result, they often move the market in predictable ways.
        </p>
        <p>
          By understanding how the smart money moves the market, retail traders can get a leg up on the competition. There are a number of ways to track smart money, but one of the most popular is through the use of order flow data. This data shows the number of buy and sell orders placed at different price levels and can give traders a good idea of where the smart money is active.
        </p>
        <button className="btn" onClick={routeChange}>
          Create Chart
        </button>
      </div>
      <div className="landing-page-image">
        <img
          src={process.env.PUBLIC_URL + "/bg.jpg"}
          alt="chart"
        />
      </div>
      <div>
      </div>
    </div>
  );
}