import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/routes/Home";
import Reviews from "./components/routes/Reviews";
import ReviewCreate from "./components/routes/ReviewCreate";
import Review from "./components/routes/Review";
import ReviewEdit from "./components/routes/ReviewEdit";
import "./App.css";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <h3>{location.state ? location.state.msg : null}</h3>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/create-review" element={<ReviewCreate />} />
        <Route path="/reviews/:id" element={<Review />} />
        <Route path="/reviews/:id/edit" element={<ReviewEdit />} />
      </Routes>
    </div>
  );
}

export default App;
