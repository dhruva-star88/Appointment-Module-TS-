import { useState } from "react";
import { BackButton } from "../../components/BackButton(book-session)";
import { Stepper } from "../../components/Stepper";
import { Payment } from "../../components/StepperComponents/Payment";
import { ProvideDetails } from "../../components/StepperComponents/ProvideDetails";
import { SessionDetails } from "../../components/StepperComponents/SessionDetails";
import "./booksession.css";
import { useNavigate } from "react-router-dom";

export const BookSession = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isComplete, setIsComplete] = useState(false);
  const navigate = useNavigate()

  const CHECK_STEPS = [
    { name: "Session Details", Component: () => <SessionDetails /> },
    { name: "Provide your Details", Component: () => <ProvideDetails /> },
    { name: "Checkout & Payment", Component: () => <Payment /> },
  ];

  const ActiveComponent = CHECK_STEPS[currentStep - 1]?.Component;

  const handleNext = () => {
    if (currentStep < CHECK_STEPS.length) {
      setCurrentStep(currentStep + 1);
      console.log("Number of Step", CHECK_STEPS.length)
    } 
    
    else if(CHECK_STEPS.length === 3){
      navigate("/booking-confirm")
    }
    else {
      setIsComplete(true);
    }
  };

  return (
    <div className="book-session">
      <div className="book-session-map">
        <BackButton />
        <div className="checkout-stepper">
          <Stepper stepsConfig={CHECK_STEPS} currentStep={currentStep} isComplete={isComplete} />
        </div>
      </div>

      {/* Render ActiveComponent below the Stepper */}
      <ActiveComponent />

      {/* Render button AFTER the ActiveComponent */}
      {!isComplete && (
        <button className="btn" onClick={handleNext}>
          {currentStep === CHECK_STEPS.length ? "Make Payment" : "Proceed"}
        </button>
      )}
    </div>
  );
};
