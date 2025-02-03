import { useNavigate } from "react-router-dom"
import "./backbutton.css"


export const BackButton = () => {
    const navigate = useNavigate()

    const handleClick = () => {
      navigate("/view-profile")
    }
    return(
        <>
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
        </>
    )
}