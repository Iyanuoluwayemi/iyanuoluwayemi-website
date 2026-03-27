import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Enquiry from "./pages/Enquiry";
import ProjectDetails from "./pages/ProjectDetails";
import StudioPage from "./pages/Studio";

import SabiPlayProposal from "./pages/SabiPlayProposal";
import Resume from "./pages/Resume";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/enquiry" element={<Enquiry />} />
      <Route path="/work/:categoryId" element={<ProjectDetails />} />
      <Route path="/sabiplay" element={<SabiPlayProposal />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/studio/*" element={<StudioPage />} />
    </Routes>
  );
}