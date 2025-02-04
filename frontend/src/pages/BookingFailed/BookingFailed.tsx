import "./bookingfailed.css"
import Failed from "../../assets/failed.png"
import { useNavigate } from "react-router-dom"

function BookingFailed(){

    const navigate = useNavigate()

    const handleTryAgain = () => {
        navigate("/book-session")
    }
  return (
    <div className="booking-failed">
        <div className="failed">
            <img src={Failed} alt="" />
        </div>
        <div className="info">
            <div className="failed-info">
                <h1>Booking Failed</h1>
                <div className="para">
                    <h2>There seems to be an issue with your payment method</h2>
                    <h3>Any amount that may have been deducted will be automatically refunded to your original payment method.</h3>
                </div>
            </div>
            <div className="buttons">
                <button className="contact">Contact Support</button>
                <button className="try-again" onClick={handleTryAgain}>Try Again</button>
            </div>
        </div>
    </div>
  )
}

export default BookingFailed