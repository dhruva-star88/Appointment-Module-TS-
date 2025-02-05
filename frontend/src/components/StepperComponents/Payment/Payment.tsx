import "./payment.css";
import { Link } from "react-router-dom";
import Edit from "../../../assets/edit.png";
import User from "../../../assets/user.jpg";

export const Payment = () => {
    return(
        <>
        <div className="payment">
            <h3>Checkout & Payment</h3>
            <div className="checkout-details">
                <div className="session-with1">
                    <div className="session-head">
                        <p>Session with</p>
                        <Link to=""><span><img src={Edit} alt="" /></span>Edit</Link>
                    </div>
                    {/* Session Details */}
                    <div className="session-details12">
                        <div className="sp-details">
                            <img src="https://c.animaapp.com/ecgbvuVg/img/rectangle-328@2x.png" alt="" />
                            <div className="sp-detail">
                                <h3>Maya Trivedi</h3>
                                <p>Clinical Psychologist</p>
                            </div>
                        </div>
                        <div className="slot-timings">
                            <h3>28-12-2024</h3>
                            <p className="day1">Saturday</p>
                            <p className="time1">01:00pm - 02:00pm</p>
                        </div>
                    </div>
                </div>
                {/* User Details */}
                <div className="your-details">
                    <div className="your-details-head">
                        <p>Your details</p>
                        <Link to=""><span><img src={Edit} alt="" /></span>Edit</Link>
                    </div>
                    <div className="details-confirmation">
                        <div className="your-details-confirmation">
                            <img src={User} alt="" />
                            <div className="confirm-details1">
                                <div className="confirm-data">
                                    <div className="data-headers1">
                                        <p>Name</p>
                                        <p>Contact no</p>
                                        <p>Email address</p>
                                        <p>Files attached</p>
                                    </div>
                                    <div className="data-values1">
                                        <p>Priyal Goyak</p>
                                        <p>+91 9898989890</p>
                                        <p><a href="">priyal.goyak178@gmail.com</a></p>
                                        <p>2</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p>Session Confirmation details will be shared via <span>Whatsapp</span> and <span>Email</span>.</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}