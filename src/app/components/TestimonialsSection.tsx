import { useRef } from 'react';
import BorderGlow from '../../component/BorderGlow';

const testimonials = [
    {
        id: 1,
        name: "Oladiti Oluwanifemi",
        role: "CEO, 19th Scents & More",
        text: "The level of detail Iyanuoluwa puts into a visual identity is actually mind-blowing. I could genuinely tell you took your time with every single element—from the choice of colors to the typography and the overall brand strategy. The final result captured the exact feeling and premium vibe I wanted to convey; it just resonates so well with me and my business.",
        image: "https://res.cloudinary.com/dykvipays/image/upload/v1774525771/WhatsApp_Image_2026-03-26_at_12.48.59_oct6d3.jpg"
    },
    {
        id: 2,
        name: "The Global Bolaji",
        role: "CEO, Rosebud Events",
        text: "Working with Iyanuoluwa is an exceptional experience. From shaping the strategic direction to the final visual execution, their commitment to excellence is clear. They didn’t just build our brand; they elevated our business into a refined, professional standard. I highly recommend them to anyone looking for creativity, structure, and excellence all in one.",
        image: "https://res.cloudinary.com/dykvipays/image/upload/v1774446157/WhatsApp_Image_2026-03-25_at_14.40.12_mbnzvk.jpg"
    },
    {
        id: 3,
        name: "Dave Of Abcdee Events",
        role: "Event Photographer/Videographer",
        text: "I am a total perfectionist with my visuals, and Iyanuoluwa delivered on every single front. The YouTube thumbnails, ad content, and business cards created for Abcdee Events were crafted with incredible attention to detail. Highly recommended for anyone looking to elevate their visual identity with a designer who truly gets it.",
        image: "https://res.cloudinary.com/dykvipays/image/upload/v1774446380/cd5a07bd-3e2c-47b3-aa07-f52a47eba99d.png"
    }
];

export function TestimonialsSection() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = window.innerWidth < 768 ? window.innerWidth : 420;
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <>
            {/* Hide scrollbar styles */}
            <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

            <section id="reviews" className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto w-full">

                {/* Header Area */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div className="flex flex-col">
                        <h2 className="text-4xl md:text-[51px] font-semibold tracking-[-0.02em] text-white leading-[1.1] mb-4">
                            What People are Saying
                        </h2>
                        <p className="text-white/60 max-w-xl text-base md:text-lg">
                            Discover what our satisfied clients have to say about their experiences elevating their visual identity and brand strategy.
                        </p>
                    </div>

                    {/* Carousel Controls */}
                    <div className="flex gap-3">
                        <button
                            onClick={() => scroll('left')}
                            className="p-3 rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10 hover:border-[#ccff00]/50 hover:text-[#ccff00] transition-all duration-300 backdrop-blur-sm"
                            aria-label="Previous review"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="p-3 rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10 hover:border-[#ccff00]/50 hover:text-[#ccff00] transition-all duration-300 backdrop-blur-sm"
                            aria-label="Next review"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                        </button>
                    </div>
                </div>

                {/* Carousel Track */}
                <div
                    ref={scrollContainerRef}
                    className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-12 pt-4"
                >
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="min-w-[100%] sm:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)] snap-center flex"
                        >
                            <BorderGlow
                                edgeSensitivity={48}
                                glowColor="40 80 80"
                                backgroundColor="#0a0f0a"
                                borderRadius={24}
                                glowRadius={56}
                                glowIntensity={1.5}
                                coneSpread={25}
                                animated={true}
                                colors={['#ccff00', '#023331', '#05a69e']}
                                className="w-full flex-grow cursor-pointer"
                            >
                                <div className="p-8 flex flex-col h-full gap-8">
                                    <div className="flex items-center gap-4">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-14 h-14 rounded-full object-cover border border-white/10"
                                        />
                                        <div className="flex flex-col">
                                            <h4 className="text-white font-semibold text-lg leading-tight mb-1">
                                                {testimonial.name}
                                            </h4>
                                            <span className="text-[#ccff00]/80 font-mono font-semibold text-xs uppercase tracking-wider">
                                                {testimonial.role}
                                            </span>
                                        </div>
                                    </div>
                                    <p className="text-white/70 leading-relaxed flex-grow text-[15px] md:text-base">
                                        "{testimonial.text}"
                                    </p>
                                </div>
                            </BorderGlow>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}