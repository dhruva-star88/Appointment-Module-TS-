import { OptionChatStateWrapper } from "../OptionChatStateWrapper";
import "./propertydefaultwrapper.css";

interface Props {
  property1: "default";
  className: any;
  optionChatStateWrapperSupportSvgrepoCom: string;
}

export const PropertyDefaultWrapper = ({
  //property1,
  className,
  optionChatStateWrapperSupportSvgrepoCom = "https://c.animaapp.com/e1d4PZQa/img/support-svgrepo-com-1.svg",
}: Props): JSX.Element => {
  return (
    <div className={`property-default-wrapper ${className}`}>
      <div className="frame-24">
        <div className="frame-25">
          <div className="frame-26">
            <img
              className="connect-svgrepo-com"
              alt="Connect svgrepo com"
              src="https://c.animaapp.com/e1d4PZQa/img/connect-svgrepo-com-1-1.svg"
            />

            <p className="text-wrapper-15">
              Not Sure Who to Choose? We’re Here to Help!
            </p>
          </div>

          <p className="text-wrapper-16">
            Whether you need guidance or prefer to explore your options, we’ve
            got you covered. Connect with our advisors, get personalized
            recommendations to find the expert you need.
          </p>
        </div>

        <div className="frame-27">
          <OptionChatStateWrapper
            chatLineSvgrepo="https://c.animaapp.com/e1d4PZQa/img/chat-line-svgrepo-com-1-3.svg"
            option="chat"
            stateProp="unselect"
          />
          <OptionChatStateWrapper
            option="call"
            stateProp="unselect"
            supportSvgrepoCom={optionChatStateWrapperSupportSvgrepoCom}
          />
        </div>
      </div>
    </div>
  );
};
