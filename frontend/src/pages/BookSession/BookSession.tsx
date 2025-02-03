import { BackButton } from "../../components/BackButton(book-session)"
import { Stepper } from "../../components/Stepper"
import { Payment } from "../../components/StepperComponents/Payment"
import { ProvideDetails } from "../../components/StepperComponents/ProvideDetails"
import { SessionDetails } from "../../components/StepperComponents/SessionDetails"
import "./booksession.css"

export const BookSession = () => {
  const CHECK_STEPS = [
    {
      name: "Session Details",
      Component:() => <SessionDetails />
    },
    {
      name: "Provide your Details",
      Component:() => <ProvideDetails />
    },
    {
      name: "Checkout & Payment",
      Component:() => <Payment />
    },
  ] 
  return(
    <>
    <div className="book-session">
      <div className="book-session-map">
        <BackButton />
        <div className="checkout-stepper">
          <Stepper stepsConfig = {CHECK_STEPS}/>
        </div>
      </div>
      {/* Session Details Block */}
      <SessionDetails />
    </div>
    </>
  )
}