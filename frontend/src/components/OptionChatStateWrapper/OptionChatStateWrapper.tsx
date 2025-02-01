import { useReducer } from "react";
import { Button } from "../Button";
import "./optionchatstatewrapper.css";

interface Props {
  option: "chat" | "call";
  stateProp: "unselect" | "hover";
  chatLineSvgrepo?: string;
  supportSvgrepoCom?: string;
}

export const OptionChatStateWrapper = ({
  option,
  stateProp,
  chatLineSvgrepo = "https://c.animaapp.com/e1d4PZQa/img/chat-line-svgrepo-com-1-2.svg",
  supportSvgrepoCom = "https://c.animaapp.com/e1d4PZQa/img/support-svgrepo-com-1-1.svg",
}: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    option: option || "chat",

    state: stateProp || "unselect",
  });

  return (
    <div
      className={`option-chat-state-wrapper ${state.state}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <img
        className="chat-line-svgrepo"
        alt="Chat line svgrepo"
        src={
          state.option === "chat"
            ? chatLineSvgrepo
            : state.state === "hover" && state.option === "call"
              ? "https://c.animaapp.com/e1d4PZQa/img/support-svgrepo-com-1-2.svg"
              : supportSvgrepoCom
        }
      />

      <div className="frame-23">
        <div className="live-chat">
          {state.option === "chat" && <>Live Chat</>}

          {state.option === "call" && <>Call Support</>}
        </div>

        <div className="have-a-personalized">
          {state.option === "chat" && (
            <p className="text-wrapper-24">
              Have a personalized chat with our team to find your match.
            </p>
          )}

          {state.option === "call" && (
            <p className="text-wrapper-24">
              Speak directly to an advisor for tailored support.
            </p>
          )}
        </div>
      </div>

      <div className="frame-23">
        <Button
          CTA="NEXT"
          className={`${state.state === "hover" ? "class-3" : "class-4"}`}
          divClassName={`${state.state === "hover" && "class-5"}`}
          hover={false}
          iconType="no-icon"
          stateProp={state.state === "hover" ? "enable" : "disable"}
          text="Connect Now"
        />
        <div className="replies-within">
          {state.option === "chat" && <>Replies within 2-3 minutes</>}

          {state.option === "call" && <>Available in 5-10 minutes</>}
        </div>
      </div>
    </div>
  );
};

function reducer(state: any, action: any) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        state: "hover",
      };

    case "mouse_leave":
      return {
        ...state,
        state: "unselect",
      };
  }

  return state;
}
