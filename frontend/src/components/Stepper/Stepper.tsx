import { useEffect, useRef, useState } from "react";
import "./stepper.css";

interface Step {
  name: string;
  Component: () => JSX.Element;
}

interface StepperProps {
  stepsConfig: Step[];
  currentStep: number;
  isComplete: boolean;
}

export const Stepper = ({ stepsConfig, currentStep, isComplete }: StepperProps): JSX.Element => {
  const [margins, setMargins] = useState({
    marginLeft: 0,
    marginRight: 0,
  });

  const stepRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const firstElement = stepRef.current[0];
    const lastElement = stepRef.current[stepsConfig.length - 1];

    if (firstElement && lastElement) {
      setMargins({
        marginLeft: firstElement.offsetWidth / 2 || 0,
        marginRight: lastElement.offsetWidth / 2 || 0, // Fix: Use offsetWidth
      });
    }
  }, [stepRef, stepsConfig.length]); // Dependency array changed to avoid unnecessary re-renders

  if (!stepsConfig.length) {
    return <></>;
  }

  const calculateProgressBarWidth = () => {
    return ((currentStep - 1) / (stepsConfig.length - 1)) * 100;
  };

  return (
    <div className="stepper">
      {stepsConfig.map((step, index) => (
        <div
          key={index}
          ref={(el) => (stepRef.current[index] = el)}
          className={`step ${currentStep > index + 1 || isComplete ? "complete" : ""} 
                 ${currentStep === index + 1 ? "active" : ""}`}
        >
          <div className="step-number">
            {currentStep > index + 1 || isComplete ? <span>&#x2713;</span> : index + 1}
          </div>
          <div className="step-name">{step.name}</div>
          <div className="progress-bar" style={{
            width:`calc(100% - ${margins.marginLeft + margins.marginRight}px)`,
            marginLeft: margins.marginLeft,
            marginRight: margins.marginRight
          }}>
            <div className="progress" style={{ width: `${calculateProgressBarWidth()}%` }}></div>
          </div>
        </div>
      ))}
    </div>
  );
};
