import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Enquiry from "./pages/Enquiry";
import WorkCategory from "./pages/WorkCategory";
import SabiPlayProposal from "./pages/SabiPlayProposal";
import Resume from "./pages/Resume";
import StudioPage from "./pages/Studio";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/enquiry" element={<Enquiry />} />
      <Route path="/work/:categoryId" element={<WorkCategory />} />
      <Route path="/sabiplay" element={<SabiPlayProposal />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/studio/*" element={<StudioPage />} />
    </Routes>
  );
}