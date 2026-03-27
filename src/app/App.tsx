import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Enquiry from "./pages/Enquiry";
import { ProjectShowcase } from './components/ProjectShowcase';
import SabiPlayProposal from "./pages/SabiPlayProposal";
import Resume from "./pages/Resume";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/enquiry" element={<Enquiry />} />
      <Route path="/work/:categoryId" element={<ProjectShowcase />} />
      <Route path="/sabiplay" element={<SabiPlayProposal />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
  );
}