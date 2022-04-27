import Sidebar from "../../../components/dashboard/sidebar/Sidebar";
import Navbar from "../../../components/dashboard/navbar/Navbar";
import "./home.scss";
import Widget from "../../../components/dashboard/widget/Widget";
import Featured from "../../../components/dashboard/featured/Featured";
import Chart from "../../../components/dashboard/chart/Chart";


const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        
      </div>
    </div>
  );
};

export default Home;
