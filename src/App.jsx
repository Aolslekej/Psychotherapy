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
        </Routes>
      </main>
    </div>
  );
}

export default App;
