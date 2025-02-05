import "./applycoupon.css"
import Down from "../../../../assets/down.png"
import Up from "../../../../assets/up.png"
import { useEffect, useState } from "react"
import Tick from "../../../../assets/check.png"

interface ApplyCouponprops{
    updateSavings:(savings: number) => void; // Function to update the savings in the parent
}

export const ApplyCoupon = ({updateSavings} : ApplyCouponprops) => {
    const[isOpen, setIsOpen] = useState(false);
    const[checkedItems, setCheckedItems] = useState<{ [key: number]: boolean }>({});
    const offer = 300;

    const handleOpen = () => {
        setIsOpen(!isOpen)
    }
    
    const handleCheck = (index: number) => {
        setCheckedItems((prev) => ({
            ...prev,
            [index]: !prev[index],
        }))
    }

    const handleApplyCoupon = () => {
        // Calculate the total savings based on checked items
        const totalSavings = Object.keys(checkedItems).reduce((total, index) => {
            return checkedItems[Number(index)] ? total + offer : total;
        }, 0);

        // Update the savings in the parent component
        updateSavings(totalSavings);
    };

    useEffect(() => {
        // If a coupon is unchecked, reset savings to 0 immediately
        if (Object.values(checkedItems).every(value => !value)) {
            updateSavings(0);
        }
    }, [checkedItems, updateSavings]); // This triggers when the checkbox state changes

    

    // Calculate total savings based on checked items
    const totalSavings = Object.keys(checkedItems).reduce((total, index) => {
        return checkedItems[Number(index)] ? total + offer : total;
    }, 0)
    console.log("Total Savings is" ,totalSavings);


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
                <div className={`savings ${totalSavings > 0 ? "checked" : ""}`}>
                    <p>Savings: &#8377;<span>{totalSavings}</span></p>
                    <div className={`apply1 ${totalSavings > 0 ? "checked" : ""}`} onClick={handleApplyCoupon}>
                        Apply
                    </div>
                </div>
            </>
            )}
        </div>
        </>
    )
}