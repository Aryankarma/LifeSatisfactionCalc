import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home  from "../pages/Homepage";
import DetailedCheck from '../pages/DetailedCheck'
import QuickCheck from "../pages/QuickCheck"

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/QuickCheck" element={<QuickCheck/>} />
          <Route path="/DetailedCheck" element={<DetailedCheck/>} />
        </Routes>
      </BrowserRouter>
  );

}

export default App;
