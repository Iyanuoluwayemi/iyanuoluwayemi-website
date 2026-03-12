import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Enquiry from "./pages/Enquiry";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/enquiry" element={<Enquiry />} />
    </Routes>
  );
}