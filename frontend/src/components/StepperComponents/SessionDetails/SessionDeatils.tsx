import { useEffect } from 'react';
import { Link } from "react-router-dom";
import "./sessiondetails.css";
import Left from "../../../assets/left.png";
import Right from "../../../assets/right.png";

interface SessionDetailsProps {
    focusRef: React.RefObject<HTMLInputElement>;
  }

export const SessionDetails = ({ focusRef }: SessionDetailsProps)  => {

    useEffect(() => {
        // Focus on the first field when the component is rendered
        focusRef.current?.focus();
      }, []);

    const data = [
        {"date": "2025-02-03", "day": "Monday"},
        {"date": "2025-02-04", "day": "Tuesday"},
        {"date": "2025-02-05", "day": "Wednesday"},
        {"date": "2025-02-06", "day": "Thursday"},
        {"date": "2025-02-07", "day": "Friday"},
        {"date": "2025-02-08", "day": "Saturday"},
        {"date": "2025-02-09", "day": "Sunday"},
        {"date": "2025-02-10", "day": "Monday"},
        {"date": "2025-02-11", "day": "Tuesday"},
        {"date": "2025-02-12", "day": "Wednesday"},
        {"date": "2025-02-13", "day": "Thursday"},
        {"date": "2025-02-14", "day": "Friday"},
        {"date": "2025-02-15", "day": "Saturday"},
        {"date": "2025-02-16", "day": "Sunday"},
    ];

    useEffect(() => {
        const scrollContainer = document.querySelector(".slide-calender-inner");
        const backBtn = document.getElementById("backBtn");
        const nextBtn = document.getElementById("nextBtn");

        const handleBackClick = () => {
            if (scrollContainer) {
                scrollContainer.scrollLeft -= 500; // Adjust scroll increment as needed
            }
        };

        const handleNextClick = () => {
            if (scrollContainer) {
                scrollContainer.scrollLeft += 500; // Adjust scroll increment as needed
            }
        };

        backBtn?.addEventListener("click", handleBackClick);
        nextBtn?.addEventListener("click", handleNextClick);

        // Cleanup event listeners on component unmount
        return () => {
            backBtn?.removeEventListener("click", handleBackClick);
            nextBtn?.removeEventListener("click", handleNextClick);
        };
    }, []);

    return (
        <div ref={focusRef} className="session-details">
            <p>Session Details</p>
            <div className="data">
                <div className="session">
                    <div className="session-with">
                        <p>Session with:</p>
                        <div className="profile">
                            <img src="https://c.animaapp.com/ecgbvuVg/img/rectangle-328@2x.png" alt="" />
                            <div className="name">
                                <h3>Maya Trivedi</h3>
                                <p>Clinical Psychologisty</p>
                            </div>
                        </div>
                    </div>
                    <div className="session-price">
                        <p>Session price:</p>
                        <h3>&#8377;1000</h3>
                    </div>
                </div>
                {/* Slots */}
                <div className="slot">
                    <div className="date-outer-div">
                        <div className="date-inner-div">
                            <div className="header">
                                <p>Select a date</p>
                                <Link to="">Check Calendar</Link>
                            </div>
                            <div className="slide-calender">
                                <div className="slide-calender-inner">
                                    {/* Data in Each Block */}
                                    {data.map((e, index) => (
                                        <div key={index} className="each-block">
                                            <div className="data-inner">
                                                <h3>{e.date}</h3>
                                                <p>{e.day}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="line">
                                <p>You can also book multiple slots at once</p>
                            </div>
                            {/* Arrows */}
                            <div className="left">
                                <button id="backBtn"><img src={Left} alt="" /></button>
                            </div>
                            <div className="right">
                                <button id="nextBtn"><img src={Right} alt="" /></button>
                            </div>
                        </div>
                    </div>
                    <div className="choose-slot"></div>
                    <div className="selected-slot"></div>
                </div>
            </div>
        </div>
    );
};
