import { CallSupportButton } from "../../components/CallSupportButton"
import { BookSessionButton } from "../../components/BookSessionButton"
import "./viewprofile.css"
import { useNavigate } from "react-router-dom"
import { useState } from "react";
// import {Offer} from "../../components/Offer";

function ViewProfile(){
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/")
  }

  // Function to toggle Read More
  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };
  
  return (
    <>
    <div className="psychologist-profile">

      <div className="overlap">
        <div className="rectangle" />

        <BookSessionButton
          CTA="NEXT"
          className="button-instance"
          hover
          iconType="no-icon"
          state="enable"
          text="Book Session"
          navigateTo="/book-session#booking-session"
        />
        {/* Frame- 10 Therapist Details */}
        <div className="frame-10">
          <div className="frame-11">
            <div className="frame-12">
              <div className="text-wrapper-6">Maya Trivedi</div>
            </div>

            <div className="frame-13">
              <div className="text-wrapper-7">Clinical Psychologist</div>

              <div className="text-wrapper-8">4+ years of experience</div>

              <p className="text-wrapper-8">Charge ₹1000 for 60 mins</p>

              <div className="frame-14">
                <div className="text-wrapper-9">Speaks:</div>

                <div className="frame-15">
                  <div className="text-wrapper-10">English</div>
                </div>

                <div className="frame-15">
                  <div className="text-wrapper-10">Hindi</div>
                </div>
              </div>
            </div>
          </div>

          <div className="frame-16">
            <div className="text-wrapper-11">About me</div>

            <p className="hello-i-m-maya">
              Hello, I’m Maya Trivedi, a Psychologist at Amaha with a Master’s
              degree in Clinical Psychology from Christ University. Over the
              years, I’ve had the privilege of working with a diverse range of
              clients across various clinical settings. My expertise includes
              supporting individuals struggling with depression, low
              self-esteem, relationship challenges, and anxiety-related
              conditions.
              <br />I am trained in cognitive behavior therapy, client-centered
              therapy, and solution-focused brief therapy, and I adopt an
              eclectic approach to tailor sessions to each client’s unique
              needs. I believe that healing is a journey—each small step leads
              us closer to self-understanding and acceptance.
              <br />
              Outside of my professional life, I find joy in reading, doodling,
              creating mandala art, exploring nature, photography, playing
              sports, listening to music, and traveling. These passions help me
              stay grounded and creative in my work.
              <br />
              Looking forward to being a part of your journey toward growth and
              well-being!
            </p>

            <div className="text-wrapper-12" onClick={toggleReadMore}>
            {isExpanded ? "Read less" : "Read more"}
            </div>
          </div>
        </div>

        <div className="frame-17">
          <div className="frame-18">
            <img
              className="img-2"
              alt="Star svgrepo com"
              src="https://c.animaapp.com/ecgbvuVg/img/star-svgrepo-com-1.svg"
            />

            <div className="text-wrapper-13">4.8</div>
          </div>

          <img
            className="img-2"
            alt="Share svgrepo com"
            src="https://c.animaapp.com/ecgbvuVg/img/share-svgrepo-com-1.svg"
          />

          <img
            className="img-2"
            alt="Save button"
            src="https://c.animaapp.com/ecgbvuVg/img/save-button.svg"
          />
        </div>

        <div className="group">
          <img
            className="rectangle-2"
            alt="Rectangle"
            src="https://c.animaapp.com/ecgbvuVg/img/rectangle-328@2x.png"
          />

          <img
            className="polygon"
            alt="Polygon"
            src="https://c.animaapp.com/ecgbvuVg/img/polygon-1.svg"
          />
        </div>
      
        {/* Back Button */}
        <button className="back-svgrepo-com" onClick={handleClick}>
          <div className="overlap-group">
            <img
              className="vector"
              alt="Vector"
              src="https://c.animaapp.com/ecgbvuVg/img/vector.svg"
            />
            <img
              className="vector-2"
              alt="Vector"
              src="https://c.animaapp.com/ecgbvuVg/img/vector-1.svg"
            />
          </div>
        </button>
      </div>
      <div className="frame-19">
          <div className="frame-20">
            {/* Frame 21- Who I support */}
            <div className="frame-21">
              <div className="text-wrapper-14">Who I Support</div>
                <div className="frame-22">
                  <div className="frame-23">
                    <div className="text-wrapper-15">Teens</div>
                  </div>

                  <div className="frame-23">
                    <div className="text-wrapper-15">Adults</div>
                  </div>

                  <div className="frame-23">
                    <div className="text-wrapper-15">Couples</div>
                  </div>
              </div>
            </div>
            {/* Frame 24- My Expertise and Common Struggle */}
            <div className="frame-24">
              <div className="group-wrapper">
                <div className="group-2">
                  <div className="frame-25">
                    <div className="text-wrapper-14">My Expertise</div>

                    <div className="frame-26">
                      <div className="skills-wrapper">
                        <div className="skills">Stress Management</div>
                      </div>

                      <div className="skills-wrapper">
                        <div className="skills">Loneliness and Isolation</div>
                      </div>

                      <div className="skills-wrapper">
                        <div className="skills">
                          Depression and Mood Disorders
                        </div>
                      </div>

                      <div className="frame-27">
                        <div className="skills">
                          Overthinking and Intrusive Thoughts
                        </div>
                      </div>

                      <div className="skills-wrapper">
                        <div className="skills">Anxiety and Panic Attacks</div>
                      </div>

                      <div className="skills-wrapper">
                        <div className="skills">Low Self-Esteem</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="frame-28">
                <div className="group-3">
                  <div className="frame-25">
                    <div className="text-wrapper-16">
                      Common Struggles I Address
                    </div>

                    <div className="frame-26">
                      <div className="skills-wrapper">
                        <p className="skills">
                          I am unable to do things properly
                        </p>
                      </div>

                      <div className="skills-wrapper">
                        <p className="skills">No one loves/cares for me</p>
                      </div>

                      <div className="skills-wrapper">
                        <p className="skills">I am not good enough</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Frame 29- Therapist's Calender */}
            <div className="frame-29">
              <div className="text-wrapper-17">Check Therapist’s Calendar</div>

              <div className="frame-30">
                <div className="text-wrapper-18">Check Calendar</div>

                <img
                  className="calendar-xmark-alt"
                  alt="Calendar xmark alt"
                  src="https://c.animaapp.com/ecgbvuVg/img/calendar-xmark-alt-svgrepo-com-1.svg"
                />
              </div>
            </div>
            {/* Frame- 21(Again) FAQ's */}
            <div className="frame-21">
              <div className="frame-31">
                <img
                  className="faq-svgrepo-com"
                  alt="Faq svgrepo com"
                  src="https://c.animaapp.com/ecgbvuVg/img/faq-svgrepo-com--1--1.svg"
                />

                <div className="text-wrapper-19">Frequently Asked Questions</div>
              </div>

              <div className="frame-32">
                <div className="FAQ-format">
                  <div className="frame-33">
                    <div className="text-wrapper-20">Why should I consider?</div>

                    <img
                      className="frame-34"
                      alt="Frame"
                      src="https://c.animaapp.com/ecgbvuVg/img/frame-591-5.svg"
                    />
                  </div>
              </div>

                <div className="FAQ-format">
                  <div className="frame-33">
                    <div className="text-wrapper-20">Why should I consider?</div>

                    <img
                      className="frame-34"
                      alt="Frame"
                      src="https://c.animaapp.com/ecgbvuVg/img/frame-591-5.svg"
                    />
                  </div>
                </div>

                <div className="FAQ-format">
                  <div className="frame-33">
                    <div className="text-wrapper-20">Why should I consider?</div>

                    <img
                      className="frame-34"
                      alt="Frame"
                      src="https://c.animaapp.com/ecgbvuVg/img/frame-591-5.svg"
                    />
                  </div>
                </div>

                <div className="FAQ-format">
                  <div className="frame-33">
                    <div className="text-wrapper-20">Why should I consider?</div>

                    <img
                      className="frame-34"
                      alt="Frame"
                      src="https://c.animaapp.com/ecgbvuVg/img/frame-591-5.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Helper Block */}
            <div className="frame-35">
              <div className="frame-36">
                <div className="frame-37">
                  <div className="text-wrapper-21">Need Help?</div>

                  <div className="text-wrapper-22">Talk to Our Advisors</div>
                </div>

                <CallSupportButton
                  className="design-component-instance-node"
                  text="Call support"
                />
              </div>

              <img
                className="line"
                alt="Line"
                src="https://c.animaapp.com/ecgbvuVg/img/line-5.svg"
              />

              <div className="frame-38">
                <p className="p">You can also reach us at</p>

                <div className="group-4">
                  <div className="text-wrapper-23">care@souloxy.com</div>

                  <img
                    className="iconsax-linear"
                    alt="Iconsax linear"
                    src="https://c.animaapp.com/ecgbvuVg/img/iconsax-linear-smsedit.svg"
                  />
                </div>
              </div>
              </div>
            </div>
            {/* Book Session Button */}
            <div className="button-wrapper">
                <BookSessionButton
                  CTA="NEXT"
                  className="button-2"
                  hover
                  iconType="no-icon"
                  state="enable"
                  text="Book Session"
                  navigateTo="/book-session#booking-session"
                />
              </div>
          </div>
        {/* Bottom-Navigation */}
        </div>
    </>
  )
}

export default ViewProfile