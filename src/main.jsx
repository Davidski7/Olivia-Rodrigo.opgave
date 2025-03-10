import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./pages/App.jsx";
import Songs from "./pages/songs.jsx";
import Timeline from "./pages/timeline.jsx";



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/songs" element={<Songs />} />
        <Route path="/timeline" element={<Timeline />} />
       
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
