//create landing page
import { useNavigate } from "react-router-dom";
import "./Home.css";
export default function LandingPage() {
  let nav = useNavigate();
  const routeChange = () => {
    nav("/add");
  };
  return (
    <div className="landing-page">
      <div className="landing-page-content">
        <h1>Welcome to Recipe Book</h1>
        <p>
          This is a forex forum app that allows you to create, and Read ideas
          from others
        </p>
        <p>To create a chart story, click the button below.</p>
        <button className="btn" onClick={routeChange}>
          Create Chart
        </button>
      </div>
      <div className="landing-page-image">
        <img
          src={process.env.PUBLIC_URL + "/assets/images/landing.svg"}
          alt="chart"
        />
      </div>
    </div>
  );
}