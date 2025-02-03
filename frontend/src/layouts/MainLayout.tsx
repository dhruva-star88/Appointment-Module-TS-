import { BottomNavigation } from "../components/BottomNavigation";
import { TopNavigationBar } from "../components/TopNavigationBar";
import { Outlet } from "react-router-dom";
import { Offer } from "../components/Offer";  // Import Offer component
import "./mainlayout.css";

const MainLayout = (): JSX.Element => {
  return (
    <div className="main-layout">
      <TopNavigationBar className="top-navigation-bar-instance" frame="https://c.animaapp.com/e1d4PZQa/img/frame-1597884373.svg" img="https://c.animaapp.com/e1d4PZQa/img/frame-407.svg" />

      {/* Offer Component Added Below the Navigation Bar */}
      <Offer />

      <div className="content-wrapper">
        <Outlet />
      </div>

      <BottomNavigation className="defaultclass" frame="https://c.animaapp.com/e1d4PZQa/img/frame-4521.svg" />
    </div>
  );
};

export default MainLayout;
