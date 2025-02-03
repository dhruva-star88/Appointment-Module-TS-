import { useState } from "react";
import "./stepper.css"

interface Step{
    name:String,
    Component: () => JSX.Element;
}

interface StepperProps{
    stepsConfig: Step[];
}

export const Stepper = ({stepsConfig}: StepperProps): JSX.Element => {
    const [currentStep, setCurrentStep] = useState(1);
    const [isComplete, setIsComplete] = useState(false)

    if(!stepsConfig.length){
        return <></>
    }

    const handleNext = () => {}
    return(
        <>
        <div className="stepper">
        {stepsConfig.map((step, index) => {
            return(
                <div key={index} className={`step + ${currentStep > index + 1 || isComplete ? "complete" : ""}
                 ${currentStep === index + 1 ? "active" : ""} `}>
                    <div className="step-number">{
                            currentStep > index + 1 || isComplete ? (
                            <span>&#x2713;</span>
                        ) : (
                            index + 1
                            )}
                    </div>
                    <div className="step-name">{step.name}</div>
                </div>
            )
        })}
        </div>

        {!isComplete && (
            <button className="btn" onClick={handleNext}>
                {currentStep === stepsConfig.length ? "Make Payment" : "Proceed"}
            </button>
        )}
        </>
    )
}