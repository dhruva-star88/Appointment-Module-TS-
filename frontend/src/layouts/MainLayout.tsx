import { TopNavigationBar } from "../components/TopNavigationBar";
import { Outlet } from "react-router-dom";

const MainLayout = (): JSX.Element => {
  return (
    <>
      <TopNavigationBar className="top-navigation-bar-instance" frame="https://c.animaapp.com/e1d4PZQa/img/frame-1597884373.svg" img="https://c.animaapp.com/e1d4PZQa/img/frame-407.svg" />
      <Outlet />
    </>
  );
};

export default MainLayout;
