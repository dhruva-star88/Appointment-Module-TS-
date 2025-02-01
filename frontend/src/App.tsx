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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />} > 
      <Route index element={<BookAnAppointment />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
