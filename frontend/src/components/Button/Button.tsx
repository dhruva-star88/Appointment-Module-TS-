import { useReducer } from "react";
import "./button.css";

interface Props {
  iconType: "no-icon";
  stateProp: "enable" | "disable";
  hover: boolean;
  CTA: "NEXT" | "APPLY";
  className: any;
  text?: string;
  divClassName?: any;
}

function Button({
  iconType,
  stateProp,
  hover,
  CTA,
  className,
  text = "Next",
  divClassName,
}: Props): JSX.Element {
  const [state, dispatch] = useReducer(reducer, {
    iconType: iconType || "no-icon",
    state: stateProp || "disable",
    hover: hover,
    CTA: CTA || "NEXT",
  });

  return (
    <div
      className={`button ${state.state} ${className}`}
      onMouseLeave={() => dispatch("mouse_leave")}
      onMouseEnter={() => dispatch("mouse_enter")}
    >
      <div className="frame">
        <div className={`next ${divClassName}`}>
          {state.CTA === "NEXT" ? text : "Apply"}
        </div>
      </div>
    </div>
  );
}

function reducer(state: any, action: any) {
  switch (action) {
    case "mouse_enter":
      return { ...state, state: "enable" };
    case "mouse_leave":
      return { ...state, state: "disable" };
    default:
      return state;
  }
}

export { Button };
