import { useNavigate } from "react-router-dom";
import "./booksessionbutton.css";

interface Props {
  iconType?: "no-icon";
  state?: "enable";
  hover?: boolean;
  CTA?: "NEXT";
  className?: any;
  text?: string;
  navigateTo: string;
}

export const BookSessionButton = ({
  // iconType,
  // state,
  // hover,
  // CTA,
  className,
  text = "Next",
  navigateTo,
}: Props): JSX.Element => {

  const navigate = useNavigate();
  return (
    <button className={`button ${className}`} 
    onClick={() => {
      if(navigateTo) navigate(navigateTo);
    }}>
      <div className="frame">
        <div className="next">{text}</div>
      </div>
    </button>
  );
};
