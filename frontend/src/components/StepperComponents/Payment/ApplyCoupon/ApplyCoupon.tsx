import "./applycoupon.css"
import Down from "../../../../assets/down.png"
import Up from "../../../../assets/up.png"
import { useState } from "react"
import Tick from "../../../../assets/check.png"

export const ApplyCoupon = () => {
    const[isOpen, setIsOpen] = useState(false);
    const[checkedItems, setCheckedItems] = useState<{ [key: number]: boolean }>({});

    const handleOpen = () => {
        setIsOpen(!isOpen)
    }
    
    const handleCheck = (index: number) => {
        setCheckedItems((prev) => ({
            ...prev,
            [index]: !prev[index],
        }))
    }

    return(
        <>
        <div className={`coupons ${isOpen ? "open" : "closed"}`} >
            <div className="coupons-header">
                <h3>Apply-coupons</h3>
                <button onClick={handleOpen}><img src={isOpen ? Up : Down} alt="Toggle Arrow" /></button>
            </div>
            {isOpen && (
                <>
                <div className="coupons-content">
                    <div className="enter-coupon">
                        <input className="enter-name" type="text" placeholder="Enter coupon code"/>
                        <button><h2>CHECK</h2></button>
                    </div>
                </div>
                <div className="offer-layout">
                    {[...Array(3)].map((_, index) => (
                        <div className="each-offer">
                            <div className="each-offer-inner">
                                <div 
                                    className={`check-box ${checkedItems[index] ? "checked" : ""}`}
                                    onClick={() => handleCheck(index)}
                                    >
                                        {checkedItems[index] && <img src={Tick} alt="Tick"></img>}
                                    </div>
                                <div className="offer-value">$300</div>
                            </div>
                            <div className="offer-name">
                                <p>FLAT 300 OFF on your first session</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="savings">
                    <p>Savings: &#8377;<span>0</span></p>
                    <div className="apply1">
                        Apply
                    </div>
                </div>
            </>
            )}
        </div>
        </>
    )
}