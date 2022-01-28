import { BrowserRouter, Routes, Route } from "react-router-dom";
import CommentPage from "./pages/CommentPage.js";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/comment" element={<CommentPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
