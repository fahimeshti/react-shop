import Chart from "../../components/chart/Chart";
import "./DashBoard.css";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import Widgetsm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
export default function DashBoard() {
    
  const userData = [
    {
      name: "Jan",
      "Active User": 40,
    },
    {
      name: "Feb",
      "Active User": 33,
    },
    {
      name: "Mar",
      "Active User": 22,
    },
    {
      name: "Apr",
      "Active User": 29,
    },
    {
      name: "May",
      "Active User": 51,
    },
    {
      name: "Jun",
      "Active User": 65,
    },
    {
      name: "Jul",
      "Active User": 55,
    },
    {
      name: "Agu",
      "Active User": 44,
    },
    {
      name: "Sep",
      "Active User": 11,
    },
    {
      name: "Oct",
      "Active User": 66,
    },
    {
      name: "Nov",
      "Active User": 45,
    },
    {
      name: "Dec",
      "Active User": 120,
    },
  ];
    return (
      <div className="home">
      <FeaturedInfo />
        <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <Widgetsm />
      <WidgetLg />
      </div>
    );
  }
  