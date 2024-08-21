import { Route, Routes } from "react-router-dom";
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
  LectionPage,
  MeditationPage,
  ForestAudio,
  TherapistsPage,
  LivePage,
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
          <Route path="/lections/:id" element={<LectionPage />} />
          <Route path="/meditations/:id" element={<MeditationPage />} />
          <Route path="/audio" element={<ForestAudio />} />
          <Route path="/therapists/:id" element={<TherapistsPage />} />
          <Route path="/live/:id" element={<LivePage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
