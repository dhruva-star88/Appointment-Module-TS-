import "./bookanappointment.css"
import { BottomNavigation } from "../../components/BottomNavigation"
import { PropertyDefaultWrapper } from "../../components/PropertyDefaultWrapper"
import { Component } from "../../components/Component"
import { Bar } from "../../components/Bar"
//import { FiltersWrapper } from "../../components/FiltersWrapper"


function BookAnAppointment() {
  return (
    <>
    <div className="book-an-appointment">
      <div className="FLAT-OFF-on-your-wrapper">
        <p className="FLAT-OFF-on-your">
          <span className="span">FLAT 300 OFF</span>

          <span className="text-wrapper-18">
            {" "}
            on your first session | Use Code : S300 |
          </span>
        </p>
      </div>
      <div className="frame-37">
        {/* Therapist Profile Part */}
          <div className="frame-38">
            <div className="frame-39">
              <div className="frame-40">
                <Component
                  divClassName="component-74"
                  property1="frame-761"
                  starSvgrepoCom="https://c.animaapp.com/e1d4PZQa/img/star-svgrepo-com-1-2.svg"
                />
                <Component
                  divClassName="component-74"
                  property1="frame-761"
                  starSvgrepoCom="https://c.animaapp.com/e1d4PZQa/img/star-svgrepo-com-1-3.svg"
                />
              </div>

              <div className="frame-40">
                <Component
                  divClassName="component-74"
                  property1="frame-761"
                  starSvgrepoCom="https://c.animaapp.com/e1d4PZQa/img/star-svgrepo-com-1-4.svg"
                />
                <Component
                  divClassName="component-74"
                  property1="frame-761"
                  starSvgrepoCom="https://c.animaapp.com/e1d4PZQa/img/star-svgrepo-com-1-5.svg"
                />
              </div>

              <div className="frame-40">
                <Component
                  divClassName="component-74"
                  property1="frame-761"
                  starSvgrepoCom="https://c.animaapp.com/e1d4PZQa/img/star-svgrepo-com-1-6.svg"
                />
                <Component
                  divClassName="component-74"
                  property1="frame-761"
                  starSvgrepoCom="https://c.animaapp.com/e1d4PZQa/img/star-svgrepo-com-1-7.svg"
                />
              </div>
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
        <PropertyDefaultWrapper property1="default" className="" optionChatStateWrapperSupportSvgrepoCom="https://c.animaapp.com/e1d4PZQa/img/support-svgrepo-com-1.svg"/>
        
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
        {/* Bottom Navigation */}
        <BottomNavigation className="defaultclass" frame="https://c.animaapp.com/e1d4PZQa/img/frame-4521.svg"/>
      </div>
    </div>
    </>
  )
}

export default BookAnAppointment