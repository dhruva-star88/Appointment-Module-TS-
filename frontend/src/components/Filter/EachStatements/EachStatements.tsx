import { useReducer } from "react";
import "./eachstatements.css";

interface Props {
  concern: "concern";
  stateProp: boolean;
  className: any;
  professionTypeClassName: any;
  text: string;
  pcb: string;
}

export const EachStatements = ({
  concern,
  stateProp,
  className,
  professionTypeClassName,
  text = "Clinical Psychologist",
  pcb = "https://c.animaapp.com/e1d4PZQa/img/pcb04.svg",
}: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    concern: concern || "concern",

    state: stateProp,
  });

  return (
    <div
      className={`each-statements ${className}`}
      onClick={() => {
        dispatch("click");
      }}
    >
      <div className="profession-type-wrapper">
        <div className={`profession-type ${professionTypeClassName}`}>
          {text}
        </div>
      </div>

      <img
        className="pcb"
        alt="Pcb"
        src={
          state.state ? "https://c.animaapp.com/e1d4PZQa/img/pcb04-1.svg" : pcb
        }
      />
    </div>
  );
};

function reducer(state: any, action: any) {
  if (state.concern === "concern" && state.state === false) {
    switch (action) {
      case "click":
        return {
          concern: "concern",

          state: true,
        };
    }
  }

  if (state.concern === "concern" && state.state === true) {
    switch (action) {
      case "click":
        return {
          concern: "concern",

          state: false,
        };
    }
  }

  return state;
}
