import { NavLink, Route, Routes } from "react-router-dom";
import "./App.scss";

import { Login, ErrorPage, Registr, Therapy } from "./pages";

function App() {
  return (
    <div className="container">
      <header></header>
      <main>
        <Routes>
          <Route path="/" element={<Therapy/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/registr" element={<Registr/>}/>
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
      </main>
    </div>
  )
}

export default App;
