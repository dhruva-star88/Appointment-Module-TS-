import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css"
import "./index.css"
import MainLayout from "./layouts/MainLayout";
import BookAnAppointment from "./pages/BookAnAppointment/BookAnAppointment";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ViewProfile from "./pages/ViewProfile/ViewProfile";
import {BookSession} from "./pages/BookSession";
import BookingConfirmation from "./pages/BookingConfirmation/BookingConfirmation";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />} > 
      <Route index element={<BookAnAppointment />} />
      <Route path="/view-profile" element={<ViewProfile />} />
      <Route path="/book-session" element={<BookSession />} />
      <Route path="/booking-confirm" element={<BookingConfirmation />} />
      <Route path = '*' element = {<NotFoundPage/>} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
