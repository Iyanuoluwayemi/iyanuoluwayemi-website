import { useEffect } from "react";

const openMail = (href: string) => {
  const a = document.createElement("a");
  a.href = href;
  a.target = "_self";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

const PROPOSAL_MAILTO =
  "mailto:theiyanuoluwayemi@gmail.com?subject=Proposal%20Accepted:%20SabiPlay%20x%20Iyanuoluwayemi&body=Hi%20Iyanuoluwa,%0D%0A%0D%0AWe%20have%20reviewed%20the%20proposal%20and%20we%20are%20excited%20to%20move%20forward%20with%20the%20Ascend%20Package%20for%20Phase%201,%20followed%20by%20the%20monthly%20retainer.%0D%0A%0D%0APlease%20send%20over%20the%20Phase%201%20invoice%20so%20we%20can%20officially%20kick%20things%20off!%0D%0A%0D%0ABest,%0D%0ADuke";

export default function SabiPlayProposal() {
  useEffect(() => {
    document.title = "Proposal: SabiPlay x Iyanuoluwayemi";
  }, []);


  return (
    <div className="bg-zinc-950 text-zinc-300 font-sans antialiased leading-relaxed selection:bg-[#A3E635] selection:text-zinc-900 min-h-screen">
        <style>{`
            @keyframes fadeInUp {
                from { opacity: 0; transform: translateY(30px); }
                to { opacity: 1; transform: translateY(0); }
            }
            .animate-fade-in-up {
                opacity: 0;
                animation: fadeInUp 0.7s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
            }
        `}</style>
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
            
            <header className="mb-16 border-b border-zinc-800 pb-10 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                <h2 className="text-sm font-bold tracking-widest text-[#A3E635] uppercase mb-3">Partnership Proposal</h2>
                <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
                    SabiPlay <span className="text-zinc-600 font-light">x</span> Iyanuoluwayemi
                </h1>
                <p className="text-lg text-zinc-400 max-w-2xl">
                    Hi Duke and the SabiPlay Team. Based on our discussions, SabiPlay requires a strong foundational brand strategy before moving into an ongoing user acquisition phase. Here is the blueprint to build a brand that converts.
                </p>
            </header>

            <section className="mb-12 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 md:p-10 hover:border-[#A3E635] transition duration-300">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 border-b border-zinc-800 pb-6">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-2">Phase 1: The Foundation</h3>
                            <p className="text-sm text-zinc-400">The Ascend Package • Timeline: 1 Month</p>
                        </div>
                        <div className="mt-4 md:mt-0 text-left md:text-right">
                            <span className="block text-3xl font-bold text-[#A3E635]">₦250,000</span>
                            <span className="text-xs text-zinc-500 uppercase tracking-wider">50% Upfront / 50% on Completion</span>
                        </div>
                    </div>

                    <p className="mb-6 text-zinc-400">Before running effective ads or managing social media, we must define SabiPlay's visual identity and strategic positioning in the gaming market.</p>

                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-zinc-300">
                        <li className="flex items-center gap-3"><span className="text-[#A3E635]">✓</span> Brand Archetype &amp; Persona Development</li>
                        <li className="flex items-center gap-3"><span className="text-[#A3E635]">✓</span> Comprehensive Messaging Framework</li>
                        <li className="flex items-center gap-3"><span className="text-[#A3E635]">✓</span> Brand Logo Suite (With Variations)</li>
                        <li className="flex items-center gap-3"><span className="text-[#A3E635]">✓</span> Detailed Logo Guidelines &amp; Usage</li>
                        <li className="flex items-center gap-3"><span className="text-[#A3E635]">✓</span> Typography, Color Palette &amp; Pattern</li>
                        <li className="flex items-center gap-3"><span className="text-[#A3E635]">✓</span> Full Brand Stationery Suite</li>
                        <li className="flex items-center gap-3"><span className="text-[#A3E635]">✓</span> 30-Second Explainer Video</li>
                        <li className="flex items-center gap-3"><span className="text-[#A3E635]">✓</span> Pro Logo Intro (5-10 Seconds)</li>
                        <li className="flex items-center gap-3"><span className="text-[#A3E635]">✓</span> 6 Starter Social Media Templates</li>
                        <li className="flex items-center gap-3"><span className="text-[#A3E635]">✓</span> 30-Day Brand Consultation Access</li>
                    </ul>
                </div>
            </section>

            <section className="mb-16 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
                <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 md:p-10 hover:border-zinc-600 transition duration-300">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 border-b border-zinc-800 pb-6">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-2">Phase 2: Ongoing Execution</h3>
                            <p className="text-sm text-zinc-400">Monthly Retainer • Timeline: Month-to-Month</p>
                        </div>
                        <div className="mt-4 md:mt-0 text-left md:text-right">
                            <span className="block text-3xl font-bold text-white">₦150,000<span className="text-lg text-zinc-500 font-normal">/mo</span></span>
                            <span className="text-xs text-zinc-500 uppercase tracking-wider">Invoiced on the 1st of every month</span>
                        </div>
                    </div>

                    <p className="mb-6 text-zinc-400">Once the Phase 1 foundation is approved, I integrate into your team to drive consistent user acquisition through design, video, and ad strategy.</p>

                    <ul className="space-y-4 text-sm text-zinc-300">
                        <li className="flex items-start gap-3">
                            <span className="text-zinc-500 mt-1">✦</span> 
                            <div><strong className="text-white">Social Media Design:</strong> 2 high-quality graphics per week (8 per month).</div>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-zinc-500 mt-1">✦</span> 
                            <div><strong className="text-white">Video Editing:</strong> 4 short-form promotional videos per month.</div>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-zinc-500 mt-1">✦</span> 
                            <div><strong className="text-white">Copywriting:</strong> Engaging captions and copy for all standard monthly posts.</div>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-zinc-500 mt-1">✦</span> 
                            <div><strong className="text-white">Ad Management:</strong> Weekly monitoring and optimization of active ad creatives.</div>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="bg-zinc-950 border-t border-zinc-800 pt-12 animate-fade-in-up" style={{ animationDelay: '700ms' }}>
                <h3 className="text-xl font-bold text-white mb-6">Terms &amp; Conditions</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-zinc-400 mb-12">
                    <div>
                        <strong className="text-zinc-200 block mb-1">Ad Spend &amp; Campaigns</strong>
                        The retainer covers my creative labor. All ad budgets (Meta, TikTok) are funded directly by SabiPlay. Major promotional campaigns exceeding stated deliverables will be scoped as a separate project.
                    </div>
                    <div>
                        <strong className="text-zinc-200 block mb-1">Cancellation Policy</strong>
                        Phase 2 requires a 30-day written notice to pause or cancel the retainer. SabiPlay is responsible for the final payment covering that 30-day notice period.
                    </div>
                </div>

                <div className="bg-[#A3E635]/10 border border-[#A3E635]/20 rounded-xl p-6 text-center">
                    <p className="text-zinc-300 text-sm md:text-base mb-6">
                        <strong className="text-[#A3E635]">Validity:</strong> To ensure I can dedicate the necessary time to SabiPlay's launch, this proposal is valid for <strong>10 days</strong>. I am wrapping up a few major projects and confirming within this window locks in your spot on my calendar.
                    </p>
                    <div className="flex flex-col items-center justify-center gap-3 mt-6">
                        <button
                            onClick={() => openMail(PROPOSAL_MAILTO)}
                            className="bg-[#A3E635] text-zinc-950 font-bold px-8 py-3 rounded-full hover:bg-white transition duration-300 text-center cursor-pointer"
                        >
                            Accept Proposal &amp; Kickoff Phase 1
                        </button>
                        <p className="text-sm text-zinc-400">
                            Or email me directly at:{" "}
                            <button
                                onClick={() => openMail("mailto:theiyanuoluwayemi@gmail.com")}
                                className="text-[#A3E635] hover:underline hover:text-white transition cursor-pointer bg-transparent border-none p-0"
                            >
                                theiyanuoluwayemi@gmail.com
                            </button>
                        </p>
                    </div>
                </div>
            </section>

        </div>
    </div>
  );
}
