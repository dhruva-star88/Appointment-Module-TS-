import { useReducer } from "react";
import "./confirmationbutton.css";

interface Props {
  iconType: "no-icon";
  stateProp: "enable" | "disable";
  hover: boolean;
  CTA: "NEXT";
  className: any;
  divClassName: any;
  text: string;
}

export const ConfirmationButton = ({
  iconType,
  stateProp,
  hover,
  CTA,
  className,
  divClassName,
  text = "Next",
}: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    iconType: iconType || "no-icon",

    state: stateProp || "disable",

    hover: hover,

    CTA: CTA || "NEXT",
  });

  return (
    <button
      className={`button hover-${state.hover} ${state.state} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <div className="frame">
        <div className={`next ${divClassName}`}>{text}</div>
      </div>
    </button>
  );
};

function reducer(state: any, action: any) {
  if (
    state.CTA === "NEXT" &&
    state.hover === false &&
    state.iconType === "no-icon" &&
    state.state === "disable"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          CTA: "NEXT",

          hover: false,

          iconType: "no-icon",

          state: "enable",
        };
    }
  }

  if (
    state.CTA === "NEXT" &&
    state.hover === false &&
    state.iconType === "no-icon" &&
    state.state === "enable"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          CTA: "NEXT",

          hover: false,

          iconType: "no-icon",

          state: "disable",
        };

      case "mouse_enter":
        return {
          CTA: "NEXT",

          hover: true,

          iconType: "no-icon",

          state: "enable",
        };
    }
  }

  if (
    state.CTA === "NEXT" &&
    state.hover === true &&
    state.iconType === "no-icon" &&
    state.state === "enable"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          CTA: "NEXT",

          hover: false,

          iconType: "no-icon",

          state: "enable",
        };
    }
  }

  return state;
}
