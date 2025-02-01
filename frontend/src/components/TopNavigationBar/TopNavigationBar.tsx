import { Link } from "react-router-dom";
import { Component4 } from "../../icons/Component4";
import { LogoWrapper } from "../LogoWrapper";
import "./topnavigationbar.css";

interface Props {
  className?: string;
  frame?: string;
  img?: string;
}

export const TopNavigationBar = ({
  className = "",
  frame = "https://c.animaapp.com/e1d4PZQa/img/frame-1597884373.svg",
  img = "https://c.animaapp.com/e1d4PZQa/img/frame-407.svg",
}: Props): JSX.Element => {
  return (
    <div className={`top-navigation-bar ${className}`}>
      <div className="frame-28">
        <LogoWrapper className="LOGO-2" />
        <div className="frame-29">
          <Link to="/" className="text-wrapper-17">Home</Link>
          <Link to="/learning-hub" className="text-wrapper-17">Learning Hub</Link>
          <Link to="/appointment" className="text-wrapper-17">Appointment</Link>
          <Link to="/events" className="text-wrapper-17">Events</Link>

          <img
            className="search"
            alt="Search"
            src="https://c.animaapp.com/e1d4PZQa/img/search-1.svg"
          />
        </div>
      </div>

      <div className="frame-30">
        <div className="component-wrapper">
          <Component4 className="search" />
        </div>

        <img className="frame-31" alt="Frame" src={frame} />
        <img className="frame-31" alt="Frame" src={img} />
      </div>
    </div>
  );
};
