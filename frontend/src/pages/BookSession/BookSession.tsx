import { BackButton } from "../../components/BackButton(book-session)"
import "./booksession.css"

export const BookSession = () => {
  return(
    <>
    <div className="book-session">
      <div className="book-session-map">
        <BackButton />
        <div className="route"></div>
      </div>
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
    </div>
    </>
  )
}