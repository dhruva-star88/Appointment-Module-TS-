import { Component4 } from "../../icons/Component4";
import { LogoWrapper } from "../LogoWrapper";
import "./topnavigationbar.css";

interface Props {
  //property1: type;
  className?: string;
  frame?: string;
  img?: string;
}

export const TopNavigationBar = ({
  className = "",
  frame = "https://c.animaapp.com/e1d4PZQa/img/frame-1597884373.svg",
  img = "https://c.animaapp.com/e1d4PZQa/img/frame-407.svg",
}: Props): JSX.Element => {
  console.log("farme", frame);
  return (
    
    <div className={`top-navigation-bar ${className}`}>
      <div className="frame-28">
        <LogoWrapper className="LOGO-2" />
        <div className="frame-29">
          <div className="text-wrapper-17">Home</div>
          <div className="text-wrapper-17">Learning Hub</div>
          <div className="text-wrapper-17">Appointment</div>
          <div className="text-wrapper-17">Events</div>

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
