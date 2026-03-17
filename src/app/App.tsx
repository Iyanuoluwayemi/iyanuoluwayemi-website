import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Enquiry from "./pages/Enquiry";
import WorkCategory from "./pages/WorkCategory";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/enquiry" element={<Enquiry />} />
      <Route path="/work/:categoryId" element={<WorkCategory />} />
    </Routes>
  );
}