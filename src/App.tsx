import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Portfolio from "./component/Portfolio";
import AboutMe from "./component/AboutMe";
import MoreDetails from "./component/MoreDetails";
// import MoreDetails

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio/>} />
        <Route path="/about-me" element={<AboutMe/>} />
        <Route path="/more-details" element={<MoreDetails/>} />
      </Routes>
    </Router>
  );
}

export default App;
