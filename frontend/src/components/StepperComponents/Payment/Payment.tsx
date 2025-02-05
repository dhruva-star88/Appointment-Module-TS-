import "./payment.css";
import { Link } from "react-router-dom";
import Edit from "../../../assets/edit.png";
import User from "../../../assets/user.jpg";
import { ApplyCoupon } from "./ApplyCoupon";
import { useEffect, useState } from "react";

interface PaymentProps {
    focusRef: React.RefObject<HTMLInputElement>;
  }

export const Payment = ({ focusRef }: PaymentProps) => {

    useEffect(() => {
        // Focus on the first field when the component is rendered
        focusRef.current?.focus();
      }, []);

    const [totalSavings, setTotalSavings] = useState(0);

    const updateSavings = (savings: number) => {
        setTotalSavings(savings)
    }

    // Calculate the total amount
    const sessionCost = 1000;
    const gst = 0.18 * sessionCost;
    const totalAmount = sessionCost + gst - totalSavings;

    return(
        <>
        <div className="payment">
            <h3>Checkout & Payment</h3>
            <div className="checkout-details">
                <div ref={focusRef}  className="session-with1" tabIndex={-1}>
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
                {/* Offer-Coupons */}
                <ApplyCoupon updateSavings = { updateSavings }/>
                {/* Billing */}
                <div className="billing">
                    <div className="billing-header1">
                        <p>Billing Details</p>
                    </div>
                    <div className="payment1">
                        <div className="payment-inner1">
                            <div className="sum">
                                <div className="sum-header">
                                    <p>Session Cost</p>
                                    <p>GST (18%)</p>
                                    <h3>Coupon Discount</h3>
                                </div>
                                <div className="sum-value">
                                    <p>{sessionCost}</p>
                                    <p>{gst}</p>
                                    <h3>{`-${totalSavings}`}</h3>
                                </div>
                            </div>
                            <div className="total">
                                <h3>Total Amount</h3>
                                <p>&#8377; {totalAmount}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}