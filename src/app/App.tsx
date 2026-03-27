import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Enquiry from "./pages/Enquiry";

import SabiPlayProposal from "./pages/SabiPlayProposal";
import Resume from "./pages/Resume";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/enquiry" element={<Enquiry />} />
      <Route path="/sabiplay" element={<SabiPlayProposal />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
  );
}