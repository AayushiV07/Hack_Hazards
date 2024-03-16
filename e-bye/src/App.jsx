import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./components/Login"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </>
    </Router>
  );
}

export default App;
