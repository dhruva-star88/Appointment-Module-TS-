import "./sessiondetails.css"

export const SessionDetails = () => {
    return(
        <>
        <div className="session-details">
            <p>Session Deatils</p>
            <div className="data">
                <div className="session">
                    <div className="session-with"></div>
                    <div className="session-price"></div>
                </div>
                <div className="slot"></div>
            </div>
            <div className="proceed"></div>
        </div>
        </>
    )
}