import { ConfirmationButton } from "../../components/ConfirmationButton"
import "./bookingconfirmation.css"

function BookingConfirmation(){
  return (
    <>
    <div className="booking-confirmation">
    <div className="frame-10">
        <img
          className="group"
          alt="Group"
          src="https://c.animaapp.com/EVyZfTX4/img/group-1000001532.svg"
        />

        <div className="frame-11">
          <div className="frame-12">
            <div className="text-wrapper-5">Booking Confirmed!</div>

            <p className="p">Session details sent via WhatsApp and email.</p>
          </div>

          <div className="frame-13">
            <div className="frame-14">
              <div className="text-wrapper-6">Therapist:</div>

              <div className="maya-trivedi">
                Maya Trivedi
                <br />
                Clinical Psychologist
              </div>
            </div>

            <img
              className="line"
              alt="Line"
              src="https://c.animaapp.com/EVyZfTX4/img/line-92.svg"
            />

            <div className="frame-14">
              <div className="text-wrapper-6">Date &amp; Time:</div>

              <div className="element">
                28-12-2024
                <br />
                01:00pm - 02:00pm
              </div>
            </div>

            <img
              className="line"
              alt="Line"
              src="https://c.animaapp.com/EVyZfTX4/img/line-92.svg"
            />

            <div className="frame-14">
              <div className="text-wrapper-7">Session Link:</div>

              <div className="text-wrapper-8">
                https://meet.google.com/ecr-ibvf-nbs
              </div>
            </div>
          </div>

          <div className="frame-15">
            <ConfirmationButton
              CTA="NEXT"
              className="button-instance"
              divClassName="design-component-instance-node-2"
              hover={false}
              iconType="no-icon"
              stateProp="disable"
              text="Contact support"
            />
            <ConfirmationButton
              CTA="NEXT"
              className="button-2"
              hover={false}
              iconType="no-icon"
              stateProp="enable"
              text="View my sessions"
              divClassName=""
            />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default BookingConfirmation