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
  id: string;
  title: string;
  subtitle: string;
  image: string;
}

export interface SocialBrand {
  brandName: string;
  subtitle: string;
  images: string[];
}

export const SOCIAL_BRANDS: SocialBrand[] = [
  {
    brandName: "Cafe Innovate Hub",
    subtitle: "Tech & Community Engagement Graphics",
    images: [
      "https://res.cloudinary.com/dykvipays/image/upload/v1773728189/Coffee_Chat_w_Peter_IG_gclrcr.png",
      "https://res.cloudinary.com/dykvipays/image/upload/v1773728131/Sell_Like_A_Pro_Challenge_hnuj2o.png",
      "https://res.cloudinary.com/dykvipays/image/upload/v1773728098/Myth_vs_truth_7_ejyrel.png",
      "https://res.cloudinary.com/dykvipays/image/upload/v1773728097/Myth_vs_truth_1_uk1dcy.png",
      "https://res.cloudinary.com/dykvipays/image/upload/v1773728032/03_days_to_SLAP_nyav0s.png",
      "https://res.cloudinary.com/dykvipays/image/upload/v1773727732/Coffee_Chat_x_Princess_Edokpay_ny7wtg.png",
      "https://res.cloudinary.com/dykvipays/image/upload/v1773727737/Sell_Like_A_Pro_edited_pg6y3j.png",
      "https://res.cloudinary.com/dykvipays/image/upload/v1773727740/Myth_vs_truth_5_hqj6n3.png",
      "https://res.cloudinary.com/dykvipays/image/upload/v1773728027/Coffee_Chat_digitial_dividend_tzd8qp.png",
      "https://res.cloudinary.com/dykvipays/image/upload/v1773728031/March_Edit_2_iqg12k.png",
    ],
  },
  {
    brandName: "Teesther",
    subtitle: "Food & Pastries Promotional Content",
    images: [
      "https://res.cloudinary.com/dykvipays/image/upload/v1773727611/Teesther_Ad_design_zdolc2.png",
      "https://res.cloudinary.com/dykvipays/image/upload/v1773727606/Peanut_Design_crtmfd.png",
      "https://res.cloudinary.com/dykvipays/image/upload/v1773727607/Delivery_Design_iljdfr.png",
      "https://res.cloudinary.com/dykvipays/image/upload/v1773727613/Pastries_Design_wtnh3u.png",
      "https://res.cloudinary.com/dykvipays/image/upload/v1773727617/Cakes_Design_jwtys6.png",
    ],
  },
  {
    brandName: "Stuboard",
    subtitle: "EdTech App Launch & Student Campaigns",
    images: [
      "https://res.cloudinary.com/dykvipays/image/upload/v1773727258/Our_App_Is_Live_1_meqcjq.png",
      "https://res.cloudinary.com/dykvipays/image/upload/v1773727259/App_Giveaway_1_hg7u0e.png",
      "https://res.cloudinary.com/dykvipays/image/upload/v1773727263/Chaos_et_Clarity_1_zniol2.png",
      "https://res.cloudinary.com/dykvipays/image/upload/v1773727265/Own_Your_Semester_Design_jqmsg9.png",
      "https://res.cloudinary.com/dykvipays/image/upload/v1773727266/Schooling_Design_1_xyfx4f.png",
      "https://res.cloudinary.com/dykvipays/image/upload/v1773727270/Work_Done_Design_p8hhva.png",
    ],
  },
  {
    brandName: "Solacx",
    subtitle: "Corporate Branding & Seasonal Social Campaigns",
    images: [
      "https://res.cloudinary.com/dykvipays/image/upload/v1773726930/Feb_1st_dczoug.png",
      "https://res.cloudinary.com/dykvipays/image/upload/v1773726926/February_11_yeddmz.png",
      "https://res.cloudinary.com/dykvipays/image/upload/v1773726931/Merry_Christmas_rilt4a.png",
      "https://res.cloudinary.com/dykvipays/image/upload/v1773726933/November_3_cslkcv.png",
      "https://res.cloudinary.com/dykvipays/image/upload/v1773727299/BRanding_tt_LCustomer_vpvfod.png",
      "https://res.cloudinary.com/dykvipays/image/upload/v1773728986/January_19_ccndc5.png",
    ],
  },
  {
    brandName: "Local Drink Brands (Slurp & Chilled By T)",
    subtitle: "Beverage Marketing & Refreshment Campaigns",
    images: [
      "https://res.cloudinary.com/dykvipays/image/upload/v1773727549/Smooth_Zobo_ezwmui.png",
      "https://res.cloudinary.com/dykvipays/image/upload/v1773727565/Slurpy_Wednesday_Oct_22_cekngt.png",
      "https://res.cloudinary.com/dykvipays/image/upload/v1773727567/Extra_Freshness_edit_skoeqy.png",
      "https://res.cloudinary.com/dykvipays/image/upload/v1773727580/Oct_20_Slurpy_Monday_aorztx.png",
      "https://res.cloudinary.com/dykvipays/image/upload/v1773727795/Slurpy_Wednesday_Oct_29_iw5wf5.png",
    ],
  },
  {
    brandName: "Kenspice",
    subtitle: "Product Launches & Food Brand Marketing",
    images: [
      "https://res.cloudinary.com/dykvipays/image/upload/v1773728958/November_New_MOnth_copy_l9ssed.png",
      "https://res.cloudinary.com/dykvipays/image/upload/v1773728965/Launch_Kenspice_1_q2icmi.png",
      "https://res.cloudinary.com/dykvipays/image/upload/v1773728971/New_Year_2026_m8ajtk.png",
    ],
  },
  {
    brandName: "Seak Ride",
    subtitle: "Transport Service & Lifestyle Promos",
    images: [
      "https://res.cloudinary.com/dykvipays/image/upload/v1773727961/Eid_Seak_Ride_as71hs.png",
      "https://res.cloudinary.com/dykvipays/image/upload/v1773727949/November_New_MOnth_uuhuny.png",
      "https://res.cloudinary.com/dykvipays/image/upload/v1773727993/Boyfriends_Day_Design_et4uag.png",
    ],
  },
  {
    brandName: "Rosebud",
    subtitle: "Brand Evolution & Monthly Engagement Content",
    images: [
      "https://res.cloudinary.com/dykvipays/image/upload/v1773729071/Rosebud_New_Month_1_lk8vxj.png",
      "https://res.cloudinary.com/dykvipays/image/upload/v1773727877/WE_ve_Rebranded_amlk4c.png",
      "https://res.cloudinary.com/dykvipays/image/upload/v1773727881/AUg-Dec_ym5vub.png",
    ],
  },
];


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
    title: "Thumbnails & Banner Designs",
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
