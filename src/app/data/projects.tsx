import { ReactNode } from "react";

export interface Project {
  id: number;
  title: string;
  category: string;
  description: ReactNode;
  image: string;
  aspect: string;
  behanceUrl?: string;
}

export interface WorkCategory {
  id: string; // Used in URL slug
  title: string;
  subtitle: string;
  image: string;
}

export const WORK_CATEGORIES: WorkCategory[] = [
  {
    id: "branding",
    title: "Branding",
    subtitle: "Brand Identity Designs",
    image: "https://4mrv3lw9pg.ucarecd.net/087a3ac6-6e84-4d8a-9268-867bb10d9fa2/-/preview/1000x562/",
  },
  {
    id: "social-media-design",
    title: "Social Media Design",
    subtitle: "Strategic Social Campaigns",
    image: "https://4mrv3lw9pg.ucarecd.net/72205d78-9042-4d54-a939-76ff3df22d15/-/preview/1000x562/",
  },
  {
    id: "youtube-thumbnail",
    title: "YouTube Thumbnail",
    subtitle: "High-Converting Covers",
    image: "https://4mrv3lw9pg.ucarecd.net/60f2af7f-1f22-438e-84b3-77bdc3d3d2f3/-/preview/1000x562/",
  },
  {
    id: "event-flyer",
    title: "Event Flyer",
    subtitle: "Visual Narratives for Events",
    image: "https://4mrv3lw9pg.ucarecd.net/25b0ca28-a5b8-4154-bca0-7495071dd5ca/-/preview/1000x562/",
  }
];

export const PROJECTS: Record<string, Project[]> = {
  "branding": [
    {
      id: 1,
      title: "Brand Identity Design for Stuboard",
      category: "Visual Identity & Trust Architecture",
      description: (
        <div className="flex flex-col gap-4">
          <div>
            <strong className="block text-white text-[16px] sm:text-[18px] mb-1 font-['Manrope',sans-serif]">The Challenge:</strong>
            <span className="text-[#A1A1AA]">Stuboard needed students to trust them with their most important asset: their academics.</span>
          </div>
          <div>
            <strong className="block text-white text-[16px] sm:text-[18px] mb-1 font-['Manrope',sans-serif]">The Strategy:</strong>
            <span className="text-[#A1A1AA]">I moved away from "corporate" and focused on "approachable authority." By using a strategic color palette and a student-centric visual system, we built an identity that made students feel safe entrusting their academic journey to the brand.</span>
          </div>
          <div>
            <strong className="block text-[#BFFE5F] text-[16px] sm:text-[18px] mb-1 font-['Manrope',sans-serif]">Result:</strong>
            <span className="text-[#A1A1AA]">Established Stuboard as the go-to, reliable authority for the student demographic.</span>
          </div>
        </div>
      ),
      image:
        "https://4mrv3lw9pg.ucarecd.net/47a8a909-02a8-48f8-8de8-92de0174399e/-/preview/1000x900/",
      aspect: "square",
      behanceUrl:
        "https://www.behance.net/gallery/245571611/Stuboard-Brand-Identity",
    },
  ],
  "social-media-design": [
    {
      id: 2,
      title: "Social Media Campaign for CIH",
      category: "Strategic Social Campaign",
      description: (
        <div className="flex flex-col gap-4">
          <div>
            <strong className="block text-white text-[16px] sm:text-[18px] mb-1 font-['Manrope',sans-serif]">The Challenge:</strong>
            <span className="text-[#A1A1AA]">Selling sales-growth training to busy MSME owners who are skeptical of "marketing fluff."</span>
          </div>
          <div>
            <strong className="block text-white text-[16px] sm:text-[18px] mb-1 font-['Manrope',sans-serif]">The Strategy:</strong>
            <span className="text-[#A1A1AA]">I didn't just design; I researched. By identifying exactly what keeps small business owners up at night, I used specific visual elements and high-contrast layouts to stop the scroll and speak their language.</span>
          </div>
          <div>
            <strong className="block text-[#BFFE5F] text-[16px] sm:text-[18px] mb-1 font-['Manrope',sans-serif]">Result:</strong>
            <span className="text-[#A1A1AA]">Successfully reached and converted 30 MSMEs in less than 2 weeks, proving the power of intent-matched design.</span>
          </div>
        </div>
      ),
      image:
        "https://4mrv3lw9pg.ucarecd.net/436840ed-b8a4-4c5d-973d-54f245c60f4e/-/preview/800x1000/",
      aspect: "square",
    },
    {
      id: 3,
      title: "Social Media Design for Chilled By T",
      category: "Packaging & Market Positioning",
      description: (
        <div className="flex flex-col gap-4">
          <div>
            <strong className="block text-white text-[16px] sm:text-[18px] mb-1 font-['Manrope',sans-serif]">The Challenge:</strong>
            <span className="text-[#A1A1AA]">Rebranding a local Zobo drink to appeal to both students and office workers who value health as much as taste.</span>
          </div>
          <div>
            <strong className="block text-white text-[16px] sm:text-[18px] mb-1 font-['Manrope',sans-serif]">The Strategy:</strong>
            <span className="text-[#A1A1AA]">I handled the packaging and market entry strategy. The goal was twofold: trigger an instant "thirst" response while using clean, "safe" design cues to signal health-consciousness.</span>
          </div>
          <div>
            <strong className="block text-[#BFFE5F] text-[16px] sm:text-[18px] mb-1 font-['Manrope',sans-serif]">Result:</strong>
            <span className="text-[#A1A1AA]">Sales skyrocketed by 50% in the first week post-rebrand, reaching 250% growth within the first month through strategic market positioning.</span>
          </div>
        </div>
      ),
      image:
        "https://4mrv3lw9pg.ucarecd.net/919f6870-136b-4dd7-a341-4f0d124b226a/-/preview/1000x1000/",
      aspect: "wide",
    },
    {
      id: 8,
      title: "Social Media Design",
      category: "Visual Content",
      description: (
        <div className="flex flex-col gap-4">
          <div>
            <span className="text-[#A1A1AA]">Strategic social media design crafted to capture attention, build brand recognition, and drive meaningful engagement.</span>
          </div>
        </div>
      ),
      image: "https://iyanuoluwayemi.carrd.co/assets/images/gallery01/b74eb1b1.jpg?v=ef4799ee",
      aspect: "square",
    },
    {
      id: 9,
      title: "Social Media Design",
      category: "Visual Content",
      description: (
        <div className="flex flex-col gap-4">
          <div>
            <span className="text-[#A1A1AA]">Strategic social media design crafted to capture attention, build brand recognition, and drive meaningful engagement.</span>
          </div>
        </div>
      ),
      image: "https://iyanuoluwayemi.carrd.co/assets/images/gallery04/8d6c176a.jpg?v=ef4799ee",
      aspect: "square",
    },
    {
      id: 10,
      title: "Social Media Design",
      category: "Visual Content",
      description: (
        <div className="flex flex-col gap-4">
          <div>
            <span className="text-[#A1A1AA]">Strategic social media design crafted to capture attention, build brand recognition, and drive meaningful engagement.</span>
          </div>
        </div>
      ),
      image: "https://iyanuoluwayemi.carrd.co/assets/images/gallery04/6d79fec8.jpg?v=ef4799ee",
      aspect: "square",
    },
    {
      id: 11,
      title: "Social Media Design",
      category: "Visual Content",
      description: (
        <div className="flex flex-col gap-4">
          <div>
            <span className="text-[#A1A1AA]">Strategic social media design crafted to capture attention, build brand recognition, and drive meaningful engagement.</span>
          </div>
        </div>
      ),
      image: "https://iyanuoluwayemi.carrd.co/assets/images/gallery01/0e9af636.jpg?v=ef4799ee",
      aspect: "square",
    },
    {
      id: 12,
      title: "Social Media Design",
      category: "Visual Content",
      description: (
        <div className="flex flex-col gap-4">
          <div>
            <span className="text-[#A1A1AA]">Strategic social media design crafted to capture attention, build brand recognition, and drive meaningful engagement.</span>
          </div>
        </div>
      ),
      image: "https://iyanuoluwayemi.carrd.co/assets/images/gallery05/bd098d6a.jpg?v=ef4799ee",
      aspect: "square",
    },
    {
      id: 13,
      title: "Social Media Design",
      category: "Visual Content",
      description: (
        <div className="flex flex-col gap-4">
          <div>
            <span className="text-[#A1A1AA]">Strategic social media design crafted to capture attention, build brand recognition, and drive meaningful engagement.</span>
          </div>
        </div>
      ),
      image: "https://iyanuoluwayemi.carrd.co/assets/images/gallery06/8d8bf277.jpg?v=ef4799ee",
      aspect: "square",
    },
  ],
  "youtube-thumbnail": [
    {
      id: 4,
      title: "High-Converting Thumbnail Strategy",
      category: "Click-Through Rate Optimization",
      description: (
         <div className="flex flex-col gap-4">
          <div>
            <span className="text-[#A1A1AA]">Designed to maximize CTR by combining high-contrast elements, compelling visual hooks, and clear messaging that stops the scroll.</span>
          </div>
        </div>
      ),
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      aspect: "16/9",
    },
    {
      id: 5,
      title: "Story-Driven Video Cover",
      category: "Visual Narrative",
      description: (
         <div className="flex flex-col gap-4">
          <div>
            <span className="text-[#A1A1AA]">Creating an instant curiosity gap through strategic image composition and typography, inviting viewers into the narrative before the video even starts.</span>
          </div>
        </div>
      ),
      image: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      aspect: "16/9",
    },
    {
      id: 6,
      title: "Educational Content Thumbnail",
      category: "Authority Positioning",
      description: (
         <div className="flex flex-col gap-4">
          <div>
            <span className="text-[#A1A1AA]">Balancing professional credibility with engaging aesthetics to make complex topics visually digestible and inviting.</span>
          </div>
        </div>
      ),
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      aspect: "16/9",
    },
    {
      id: 7,
      title: "Entertainment & Vlogs",
      category: "Audience Engagement",
      description: (
         <div className="flex flex-col gap-4">
          <div>
            <span className="text-[#A1A1AA]">Vibrant, emotion-driven designs that promise entertainment value and build immediate parasocial connection with the viewer.</span>
          </div>
        </div>
      ),
      image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      aspect: "16/9",
    },
  ],
  "event-flyer": [
    // Placeholder - no projects initially mentioned for this category but setup ready for future additions
  ]
};
