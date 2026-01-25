export interface ProjectSummary {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  year: string;
  color: string;
  image: string;
}

export const PROJECTS: ProjectSummary[] = [
  {
    slug: "sabangkarsa",
    title: "SabangKarsa / Jaksabang",
    category: "Startup Initiative",
    year: "2024",
    excerpt: "Digital startup transforming tourism in Sabang. Unified platform for bookings and local business promotion. 4th Place National UTU Award.",
    color: "#f1c40f", // Yellow
    image: "/work/sabangkarsa.png"
  },
  {
    slug: "carbon-prediction",
    title: "Carbon Prediction Model",
    category: "Data Science",
    year: "2024",
    excerpt: "Forecasting Indonesia’s carbon emissions using ARIMA methodology up to 2030 to suggest optimal carbon tax adjustments.",
    color: "#78ccaf", // Green
    image: "/work/carbon.png"
  },
  {
    slug: "leuser-tableau",
    title: "Leuser Forest Cover Loss",
    category: "Data Visualization",
    year: "2024",
    excerpt: "Interactive Tableau dashboard visualizing spatial forest cover loss in the Leuser Ecosystem (KEL) from 2017 to 2024.",
    color: "#e67e22", // Orange
    image: "/work/leuser.png"
  },
  {
    slug: "pkm-re-riset",
    title: "Maritime Accident Mitigation",
    category: "Research / Deep Learning",
    year: "2024",
    excerpt: "Applying Vector Autoregressive and Neural Networks to mitigate fishing vessel accidents due to maritime weather in Sabang.",
    color: "#0492c2", // Blue
    image: "/work/pkm-riset.png"
  },
  {
    slug: "pantau-publik",
    title: "PantauPublik System",
    category: "Web Application",
    year: "2023",
    excerpt: "A Laravel-based reporting platform for public facilities in Banda Aceh to enhance citizen participation and transparency.",
    color: "#9b59b6", // Purple
    image: "/work/pantaupublik.png"
  },
  {
    slug: "feynflip-app",
    title: "FEYNFLIP APP",
    category: "EdTech / Prototype",
    year: "2023",
    excerpt: "Interactive tool designed to guide users through the Feynman learning technique for better knowledge retention.",
    color: "#e74c3c", // Red
    image: "/work/feynflip.png"
  },
  {
    slug: "iisma-comparison",
    title: "IISMA Uni-Comparison",
    category: "Web Tool",
    year: "2023",
    excerpt: "Comprehensive comparison tool for IISMA partner universities. Note: Currently inactive due to server migration.",
    color: "#34495e", // Dark Navy
    image: "/work/iisma.png"
  },
  {
    slug: "farmmath",
    title: "FarmMath",
    category: "EdTech / Game",
    year: "2023",
    excerpt: "Vanilla JS interactive math game for elementary students. Learning arithmetic through a vibrant farm-themed environment.",
    color: "#2ecc71", // Bright Green
    image: "/work/farmmath.png"
  },
  {
    slug: "covid-dna-analysis",
    title: "COVID-19 & DNA Analysis",
    category: "Bioinformatics",
    year: "2023",
    excerpt: "Computational analysis of COVID-19 data and DNA sequencing to identify patterns and gap analysis.",
    color: "#ecf0f1", // White/Grey
    image: "/work/dna.png"
  }
];