import { NavLink, Route, Routes } from "react-router-dom";
import "./App.scss";

import {
  Login,
  ErrorPage,
  Registr,
  Therapy,
  Medit,
  Therapists,
  Live,
  Forgot,
  Cab,
  Review,
  Onboarding,
  Contact,
  Ocean,
  Lego,
  Bench,
  Society,
  Enjoy,
} from "./pages";

function App() {
  return (
    <div className="container">
      <header></header>
      <main>
        <Routes>
          <Route path="/" element={<Therapy />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registr" element={<Registr />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/meditations" element={<Medit />} />
          <Route path="/therapists" element={<Therapists />} />
          <Route path="/live" element={<Live />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/cab" element={<Cab />} />
          <Route path="/rev" element={<Review />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ocean" element={<Ocean />} />
          <Route path="/lego" element={<Lego />} />
          <Route path="/bench" element={<Bench />} />
          <Route path="/society" element={<Society />} />
          <Route path="/enjoy" element={<Enjoy />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
