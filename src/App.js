import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page9 from "./pages/page9/page9";
import Page10 from "./pages/page10/page10";
import Page4 from "./pages/page4/page4";
import Start from "./pages/Start";

export default function App() {
  return (
    <div>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Start />} />
            <Route path="/page4" exact element={<Page4 />} />
            <Route path="/page9" exact element={<Page9 />} />
            <Route path="/page10" exact element={<Page10 />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
