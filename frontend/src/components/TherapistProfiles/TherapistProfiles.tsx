import { useReducer } from "react";
import { Button } from "../Button";
import "./therapistprofile.css";
import { BookMark } from "../../icons/BookMark";

interface Props {
  property1: "frame-762" | "frame-761";
  divClassName?: any;
  starSvgrepoCom: string;
}

export const TherapistProfile = ({
  property1,
  divClassName,
  starSvgrepoCom = "https://c.animaapp.com/e1d4PZQa/img/star-svgrepo-com-1.svg",
}: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "frame-761",
  });

  return (
    <div
      className={`component ${state.property1}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <div className="div">
        <img
          className="rectangle"
          alt="Rectangle"
          src="https://c.animaapp.com/e1d4PZQa/img/rectangle-187-7@2x.png"
        />
        {/* Content inside the profile-card except the photo */}
        <div className="frame-2">
          <div className="frame-3">
            <div className="frame-4">
              <div className={`text-wrapper ${divClassName}`}>Maya Trivedi</div>
              {/* top 3 icons on the top right profile-card */}
                <div className="frame-5">
                    {/* Rating */}
                    <div className="frame-6">
                      <img
                        className="img"
                        alt="Star svgrepo com"
                        src={
                          state.property1 === "frame-762"
                            ? "https://c.animaapp.com/e1d4PZQa/img/star-svgrepo-com-1-1.svg"
                            : starSvgrepoCom
                        }
                      />

                      <div className="text-wrapper-2">4.8</div>
                    </div>

                  <img
                    className="img"
                    alt="Share svgrepo com"
                    src="https://c.animaapp.com/e1d4PZQa/img/share-svgrepo-com-1-7.svg"
                  />

                  <BookMark className="img" />
                </div>
            </div>

            <div className="frame-7">
              <div className="text-wrapper-3">Clinical Psychologist</div>

              <div className="text-wrapper-4">4+ years of experience</div>

              <p className="p">Charge ₹1000 for 60 mins</p>

              <div className="frame-8">
                <div className="text-wrapper-5">Speaks:</div>

                <div className="div-wrapper">
                  <div className="text-wrapper-6">English</div>
                </div>

                <div className="div-wrapper">
                  <div className="text-wrapper-7">Hindi</div>
                </div>
              </div>
            </div>
          </div>

          <div className="frame-9">
            <Button
              CTA="NEXT"
              className={`${state.property1 === "frame-762" ? "class" : "class-2"}`}
              hover={false}
              iconType="no-icon"
              stateProp={state.property1 === "frame-762" ? "enable" : "disable"}
              text="View profile"
              divClassName={divClassName}
              navigateTo="/view-profile"
            />
            <Button
              CTA="NEXT"
              className={`${state.property1 === "frame-762" ? "class" : "class-2"}`}
              hover={false}
              iconType="no-icon"
              stateProp={state.property1 === "frame-762" ? "enable" : "disable"}
              text="Book session"
              divClassName={divClassName}
              navigateTo="/book-session"
            />
          </div>
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
        property1: "frame-762",
      };

    case "mouse_leave":
      return {
        ...state,
        property1: "frame-761",
      };
  }

  return state;
}
