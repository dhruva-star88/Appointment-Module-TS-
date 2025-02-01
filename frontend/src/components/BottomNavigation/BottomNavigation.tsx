import { Logo } from "../Logo";
import "./bottomnavigation.css";

interface Props {
  className: string;
  frame: string;
}

export const BottomNavigation = ({
  className,
  frame = "https://c.animaapp.com/e1d4PZQa/img/frame-4521.svg",
}: Props): JSX.Element => {
  return (
    <div className={`bottom-navigation ${className}`}>
      <div className="frame-wrapper">
        <div className="frame-16">
          <Logo className="LOGO-instance" />
          <div className="frame-17">
            <div className="frame-18">
              <div className="text-wrapper-12">Services</div>

              <div className="text-wrapper-13">Book an Appointment</div>

              <div className="text-wrapper-13">Workshops</div>

              <div className="text-wrapper-13">Webinars</div>

              <div className="text-wrapper-13">Learning Hub</div>
            </div>

            <div className="frame-18">
              <div className="text-wrapper-12">Explore</div>

              <div className="text-wrapper-13">About Us</div>

              <div className="text-wrapper-13">Our Experts</div>
            </div>

            <div className="frame-18">
              <div className="text-wrapper-12">Support</div>

              <div className="text-wrapper-13">FAQs</div>

              <div className="text-wrapper-13">Contact Us</div>

              <div className="text-wrapper-13">Feedback</div>
            </div>
          </div>

          <div className="frame-19">
            <div className="text-wrapper-12">Connect with us</div>

            <img className="frame-20" alt="Frame" src={frame} />
          </div>
        </div>
      </div>

      <div className="frame-21">
        <div className="frame-22">
          <div className="text-wrapper-14">Terms and Conditons</div>
        </div>

        <div className="frame-22">
          <div className="text-wrapper-14">Privacy Policy</div>
        </div>

        <div className="frame-22">
          <div className="text-wrapper-14">Content Policy</div>
        </div>

        <div className="frame-22">
          <div className="text-wrapper-14">Cookie Policy</div>
        </div>
      </div>
    </div>
  );
};
