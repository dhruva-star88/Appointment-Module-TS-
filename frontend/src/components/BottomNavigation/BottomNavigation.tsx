import { Logo } from "../Logo";
import { Link } from "react-router-dom";
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
              <div className="text-wrapper-12">
                <Link to="/services" className="text-link">Services</Link>
              </div>

              <div className="text-wrapper-13">
                <Link to="/" className="text-link">Book an Appointment</Link>
              </div>

              <div className="text-wrapper-13">
                <Link to="/workshops" className="text-link">Workshops</Link>
              </div>

              <div className="text-wrapper-13">
                <Link to="/webinars" className="text-link">Webinars</Link>
              </div>

              <div className="text-wrapper-13">
                <Link to="/learning-hub" className="text-link">Learning Hub</Link>
              </div>
            </div>

            <div className="frame-18">
              <div className="text-wrapper-12">
                <Link to="/about-us" className="text-link">About Us</Link>
              </div>

              <div className="text-wrapper-13">
                <Link to="/our-experts" className="text-link">Our Experts</Link>
              </div>
            </div>

            <div className="frame-18">
              <div className="text-wrapper-12">
                <Link to="/faqs" className="text-link">FAQs</Link>
              </div>

              <div className="text-wrapper-13">
                <Link to="/contact-us" className="text-link">Contact Us</Link>
              </div>

              <div className="text-wrapper-13">
                <Link to="/feedback" className="text-link">Feedback</Link>
              </div>
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
          <Link to="/terms-and-conditions" className="text-link">
            <div className="text-wrapper-14">Terms and Conditions</div>
          </Link>
        </div>

        <div className="frame-22">
          <Link to="/privacy-policy" className="text-link">
            <div className="text-wrapper-14">Privacy Policy</div>
          </Link>
        </div>

        <div className="frame-22">
          <Link to="/content-policy" className="text-link">
            <div className="text-wrapper-14">Content Policy</div>
          </Link>
        </div>

        <div className="frame-22">
          <Link to="/cookie-policy" className="text-link">
            <div className="text-wrapper-14">Cookie Policy</div>
          </Link>
        </div>
      </div>
    </div>
  );
};
