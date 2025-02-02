import { useState } from "react";
import "./callsupportbutton.css";
import ContactForm from "./ContactForm/ContactForm";

interface Props {
  className: any;
  text: string;
}

export const CallSupportButton = ({
  className,
  text = "Next",
}: Props): JSX.Element => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Function to toggle popup
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <>
    {/* Button to open popup */}
      <button className={`icon-type-no-icon-wrapper ${className}`} onClick={togglePopup}>
        <div className="next-wrapper">
          <div className="text-wrapper" >{text}</div>
        </div>
      </button>
      {/* Pop Up Model */}
      {isPopupOpen && (
        <div className="popup-overlay">
          {/* Header */}
          <div className="popup-content">
          <button className="close-btn" onClick={togglePopup}>&times;</button>
            <div className="popup-header">
              <p>Call Support</p>
            </div>
            {/* Call us Directly Div*/}
            <div className="call-us-directly">
              <p>Call us directly</p>
              <div className="phone-number">At +91 999888989 for immediate assistance.</div>
            </div>
            <div className="OR">OR</div>
            {/* Request Call Back */}
            <div className="request-call-back">
              <p>Request a call back</p>
              <div className="input-wrapper">
              Fill in your details, and one of our advisors will call you back in 5-10 minutes.
              </div>
            </div>
            {/* Form */}
            <ContactForm />
            {/* <button className="close-button" onClick={togglePopup}>Close</button> */}
          </div>
        </div>
      )}
    </>
  );
};
