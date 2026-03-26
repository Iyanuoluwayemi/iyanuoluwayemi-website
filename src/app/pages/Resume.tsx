import React from 'react';
import { Link } from 'react-router';
import { ChevronLeft, Download, ExternalLink, Globe } from 'lucide-react';

export default function Resume() {
  const experienceData = [
    {
      role: 'Lead Designer',
      company: 'MyPay',
      date: 'Present',
      bullets: [
        'Spearhead the complete visual strategy for all marketing campaigns, ensuring cohesive brand messaging across all digital touchpoints.',
        'Designed high-converting App Store banners and visual assets, directly driving 500+ new app downloads and significantly boosting user acquisition.',
        'Collaborated strategically with the Social Media Management team to engineer robust content pillars, expanding the brand’s digital footprint to reach and engage a broader target demographic.'
      ]
    },
    {
      role: 'Brand Designer',
      company: 'Cafe Innovate Hub (CIH)',
      date: 'Present',
      bullets: [
        'Architected the brand\'s visual identity from the ground up, establishing a premium and trustworthy visual presence aimed at youth and MSME development.',
        'Designed compelling, conversion-focused promotional campaigns for exclusive, limited-seat training sessions.',
        'Successfully translated brand trust into revenue, driving registrations that generated ~₦1,000,000 across two highly curated cohorts.'
      ]
    },
    {
      role: 'Brand Designer',
      company: 'Genevic Space',
      date: 'May 2023 - Present',
      bullets: [
        'Developed comprehensive brand identity systems and investor-facing pitch decks that successfully secured critical funding from international sponsors.',
        'Designed the visual identity and marketing collateral for a highly exclusive, curated conference aimed at creatives at Obafemi Awolowo University, exceeding attendance targets by 50%.'
      ]
    },
    {
      role: 'Social Media Designer',
      company: 'Solacx LLC',
      date: 'April 2024 - Feb 2025',
      bullets: [
        'Conceptualized and executed targeted marketing ad designs tailored to client specifications and audience psychology.',
        'Developed strategic visual assets for a major marketing campaign that successfully acquired 30 high-value business prospects within a single week.'
      ]
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-6 animate-fade-in bg-[#0a0a0a] min-h-screen font-sans">
      <div className="flex justify-between items-center mb-16">
        <Link to="/" className="text-neutral-500 hover:text-white flex items-center gap-2 text-sm transition-colors">
          <ChevronLeft className="w-4 h-4" /> Back to Portfolio
        </Link>
        <a href="/Iyanuoluwa_Oluwayemi_CV.pdf" download className="text-neutral-500 hover:text-white flex items-center gap-2 text-sm transition-colors">
          <Download className="w-4 h-4" /> Download PDF
        </a>
      </div>

      <header className="mb-16 border-b border-neutral-800 pb-12">
        <h1 className="text-5xl md:text-6xl text-white tracking-tighter mb-4">Iyanuoluwa Oluwayemi</h1>
        <h2 className="text-lg font-mono tracking-widest text-neutral-400 uppercase mb-6">Visual Identity Designer & Brand Strategist</h2>
        <div className="flex flex-wrap gap-6 text-sm text-neutral-500 font-mono">
          <a href="mailto:theiyanuoluwayemi@gmail.com" className="hover:text-white transition-colors">theiyanuoluwayemi@gmail.com</a>
          <a href="https://iyanuoluwayemi.vercel.app" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-white transition-colors">
            iyanuoluwayemi.vercel.app <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 md:gap-20">
        <div className="space-y-16">
          <section>
            <h3 className="text-xs font-mono tracking-widest text-neutral-500 uppercase mb-6">Summary</h3>
            <p className="text-neutral-300 text-sm leading-relaxed">
              Strategic Visual Identity Designer with over 5 years of experience building cohesive brand narratives and high-converting marketing campaigns.
            </p>
          </section>

          <section>
            <h3 className="text-xs font-mono tracking-widest text-neutral-500 uppercase mb-5">Global Experience</h3>
            <div className="flex gap-3 items-center">
              <img src="https://flagcdn.com/w40/gb.png" alt="UK" className="w-6 h-6 rounded-full object-cover border border-neutral-800" title="United Kingdom" />
              <img src="https://flagcdn.com/w40/us.png" alt="USA" className="w-6 h-6 rounded-full object-cover border border-neutral-800" title="United States" />
              <img src="https://flagcdn.com/w40/ng.png" alt="Nigeria" className="w-6 h-6 rounded-full object-cover border border-neutral-800" title="Nigeria" />
              <img src="https://flagcdn.com/w40/lr.png" alt="Liberia" className="w-6 h-6 rounded-full object-cover border border-neutral-800" title="Liberia" />
            </div>
          </section>

          <section>
            <h3 className="text-xs font-mono tracking-widest text-neutral-500 uppercase mb-6">Core Competencies</h3>
            <div className="flex flex-wrap gap-2">
              {['Brand Strategy', 'Identity Design', 'Visual Storytelling', 'Art Direction', 'Campaign Design', 'Pitch Decks', 'User Acquisition', 'Figma', 'Photoshop'].map(skill => (
                <span key={skill} className="px-3 py-1.5 bg-neutral-900 border border-neutral-800 rounded-md text-xs text-neutral-300">{skill}</span>
              ))}
            </div>
          </section>
          <section>
            <h3 className="text-xs font-mono tracking-widest text-neutral-500 uppercase mb-6">Education</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-white font-medium text-sm">Obafemi Awolowo University</h4>
                <p className="text-neutral-500 text-xs font-mono mt-1 mb-1">Expected 2028</p>
                <p className="text-neutral-400 text-sm">Bachelor of Agriculture</p>
              </div>
              <div>
                <h4 className="text-white font-medium text-sm">SGDM by Valuehub</h4>
                <p className="text-neutral-500 text-xs font-mono mt-1 mb-1">Mar - Jun 2024</p>
                <p className="text-neutral-400 text-sm">Brand Identity Masterclass</p>
              </div>
            </div>
          </section>
        </div>
        <div>
          <h3 className="text-xs font-mono tracking-widest text-neutral-500 uppercase mb-8">Professional Experience</h3>
          <div className="space-y-12">
            {experienceData.map((exp, idx) => (
              <div key={idx} className="group">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-4 gap-2">
                  <h4 className="text-xl text-white font-medium tracking-tight">
                    {exp.role} <span className="text-neutral-500 font-normal ml-1">at {exp.company}</span>
                  </h4>
                  <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest whitespace-nowrap">{exp.date}</span>
                </div>
                <ul className="space-y-3">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="text-sm text-neutral-400 leading-relaxed flex gap-3">
                      <span className="text-neutral-600 mt-1.5 h-1.5 w-1.5 rounded-full bg-neutral-700 flex-shrink-0"></span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
