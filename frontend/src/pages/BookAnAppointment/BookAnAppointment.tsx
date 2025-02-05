import "./bookanappointment.css"
import { HelperBlock } from "../../components/HelperBlock"
import { TherapistProfile } from "../../components/TherapistProfiles"
import { Bar } from "../../components/Bar"
//import { FiltersWrapper } from "../../components/FiltersWrapper"


function BookAnAppointment() {
  return (
    <>
    <div className="book-an-appointment">
      {/* Frame-37 Contains Profiles */}
        <div className="frame-37">
          {/* Therapist Profile Part - Inner div */}
          <div className="frame-38">
            {/* Therapist Profile-inner-inner div */}
            <div className="frame-39">
              <div className="frame-40">
                <TherapistProfile
                  divClassName="component-74"
                  property1="frame-761"
                  starSvgrepoCom="https://c.animaapp.com/e1d4PZQa/img/star-svgrepo-com-1-2.svg"
                />
                <TherapistProfile
                  divClassName="component-74"
                  property1="frame-761"
                  starSvgrepoCom="https://c.animaapp.com/e1d4PZQa/img/star-svgrepo-com-1-3.svg"
                />
              </div>

              <div className="frame-40">
                <TherapistProfile
                  divClassName="component-74"
                  property1="frame-761"
                  starSvgrepoCom="https://c.animaapp.com/e1d4PZQa/img/star-svgrepo-com-1-4.svg"
                />
                <TherapistProfile
                  divClassName="component-74"
                  property1="frame-761"
                  starSvgrepoCom="https://c.animaapp.com/e1d4PZQa/img/star-svgrepo-com-1-5.svg"
                />
              </div>

              <div className="frame-40">
                <TherapistProfile
                  divClassName="component-74"
                  property1="frame-761"
                  starSvgrepoCom="https://c.animaapp.com/e1d4PZQa/img/star-svgrepo-com-1-6.svg"
                />
                <TherapistProfile
                  divClassName="component-74"
                  property1="frame-761"
                  starSvgrepoCom="https://c.animaapp.com/e1d4PZQa/img/star-svgrepo-com-1-7.svg"
                />
              </div>
              {/* <div className="frame-40">
                <TherapistProfile
                  divClassName="component-74"
                  property1="frame-761"
                  starSvgrepoCom="https://c.animaapp.com/e1d4PZQa/img/star-svgrepo-com-1-6.svg"
                />
                <TherapistProfile
                  divClassName="component-74"
                  property1="frame-761"
                  starSvgrepoCom="https://c.animaapp.com/e1d4PZQa/img/star-svgrepo-com-1-7.svg"
                />
              </div> */}
            </div>
            <Bar
              className="BAR-instance"
              divClassName="BAR-2"
              divClassName1="BAR-3"
              divClassNameOverride="BAR-3"
              frame="https://c.animaapp.com/e1d4PZQa/img/frame-591-5.svg"
              img="https://c.animaapp.com/e1d4PZQa/img/frame-764-1.svg"
            />
          </div>
        </div>
        
        {/* Helper Block */}
        <HelperBlock property1="default" className="" optionChatStateWrapperSupportSvgrepoCom="https://c.animaapp.com/e1d4PZQa/img/support-svgrepo-com-1.svg"/>
        
        {/* Frequently asked Questions */}
        <div className="frame-41">
          <div className="frame-42">
          <div className="frame-43">
            <img
              className="faq-svgrepo-com"
              alt="Faq svgrepo com"
              src="https://c.animaapp.com/e1d4PZQa/img/faq-svgrepo-com--1--1.svg"
            />

            <div className="text-wrapper-20">Frequently Asked Questions</div>
          </div>

          <div className="frame-44">
            <div className="frame-40">
              <div className="frame-45">
                <div className="text-wrapper-21">Search</div>

                <img
                  className="vector-2"
                  alt="Vector"
                  src="https://c.animaapp.com/e1d4PZQa/img/vector.svg"
                />
              </div>

              <div className="text-wrapper-22">View All</div>
            </div>

            <div className="frame-46">
              <div className="FAQ-format">
                <div className="frame-47">
                  <div className="text-wrapper-23">Why should I consider?</div>

                  <img
                    className="frame-35"
                    alt="Frame"
                    src="https://c.animaapp.com/e1d4PZQa/img/frame-591-10.svg"
                  />
                </div>
              </div>

              <div className="FAQ-format">
                <div className="frame-47">
                  <div className="text-wrapper-23">Why should I consider?</div>

                  <img
                    className="frame-35"
                    alt="Frame"
                    src="https://c.animaapp.com/e1d4PZQa/img/frame-591-10.svg"
                  />
                </div>
              </div>

              <div className="FAQ-format">
                <div className="frame-47">
                  <div className="text-wrapper-23">Why should I consider?</div>

                  <img
                    className="frame-35"
                    alt="Frame"
                    src="https://c.animaapp.com/e1d4PZQa/img/frame-591-10.svg"
                  />
                </div>
              </div>

              <div className="FAQ-format">
                <div className="frame-47">
                  <div className="text-wrapper-23">Why should I consider?</div>

                  <img
                    className="frame-35"
                    alt="Frame"
                    src="https://c.animaapp.com/e1d4PZQa/img/frame-591-10.svg"
                  />
                </div>
              </div>

              <div className="FAQ-format">
                <div className="frame-47">
                  <div className="text-wrapper-23">Why should I consider?</div>

                  <img
                    className="frame-35"
                    alt="Frame"
                    src="https://c.animaapp.com/e1d4PZQa/img/frame-591-10.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          
        </div>
        
      </div>
    </div>
    </>
  )
}

export default BookAnAppointment