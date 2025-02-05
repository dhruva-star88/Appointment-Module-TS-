import { useEffect, useRef, useState } from "react";
import { BackButton } from "../../components/BackButton(book-session)";
import { Stepper } from "../../components/Stepper";
import { Payment } from "../../components/StepperComponents/Payment";
import { ProvideDetails } from "../../components/StepperComponents/ProvideDetails";
import { SessionDetails } from "../../components/StepperComponents/SessionDetails";
import { useLocation, useNavigate } from "react-router-dom";
import "./booksession.css";

export const BookSession = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isComplete, setIsComplete] = useState(false);
  const navigate = useNavigate()

  const location = useLocation();

  useEffect(() => {
    if(location.hash){
      const element = document.querySelector(location.hash);
      if(element){
        element.scrollIntoView({behavior:"smooth"})
      }
    }
  }, [location])


// In BookSession component, create useRef with a type
const sessionDetailsRef = useRef<HTMLInputElement | null>(null);
const provideDetailsRef = useRef<HTMLInputElement | null>(null);
const paymentRef = useRef<HTMLInputElement | null>(null);


  const CHECK_STEPS = [
    { name: "Session Details", Component: () => <SessionDetails focusRef={sessionDetailsRef}/> },
    { name: "Provide your Details", Component: () => <ProvideDetails focusRef={provideDetailsRef} /> },
    { name: "Checkout & Payment", Component: () => <Payment focusRef={paymentRef}/> },
  ];

  const ActiveComponent = CHECK_STEPS[currentStep - 1]?.Component;

  const handleNext = () => {
    if (currentStep < CHECK_STEPS.length) {
      setCurrentStep(currentStep + 1);
      console.log("Number of Step", CHECK_STEPS.length)
    } 
    
    else if(CHECK_STEPS.length === 3){
      navigate("/booking-confirm#booking-summary")
    }
    else {
      setIsComplete(true);
    }
  };

  // UseEffect to focus on the first element when the step changes
  useEffect(() => {
    if (currentStep === 1) {
      sessionDetailsRef.current?.focus();
    } else if (currentStep === 2) {
      provideDetailsRef.current?.focus();
    } else if (currentStep === 3) {
      paymentRef.current?.focus();
    }
  }, [currentStep]);

  return (
    <div className="book-session" id="booking-session">
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
