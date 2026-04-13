export interface Blog {
  id: string;
  title: string;
  content: string;
  date: string;
  tags: string[];
  image: string;
}

export const blogs: Blog[] = [
  {
    id: "1",
    title: "The Future of FinTech in India",
    content: "India's financial landscape is evolving rapidly with UPI 2.0 and blockchain integration. This blog explores how digital banking is reaching the last mile. The integration of AI in credit scoring is also a major game changer for rural accessibility.",
    date: "Oct 24, 2026",
    tags: ["Finance", "Tech", "India"],
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "2",
    title: "Leadership in Modern Management",
    content: "Leadership isn't about authority; it's about influence. Drawing from my time at IIM Kashipur, I discuss the shift towards empathetic leadership and why horizontal structures often outperform traditional hierarchies in the tech era.",
    date: "Oct 20, 2026",
    tags: ["Leadership", "Management", "Growth"],
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "3",
    title: "Portfolio Diversification Strategies",
    content: "In a volatile market, asset allocation is your best friend. We break down the 60/40 rule and why alternative investments like private equity and commodities are gaining traction in 2026.",
    date: "Oct 15, 2026",
    tags: ["Finance", "Investing", "Strategy"],
    image: "https://images.unsplash.com/photo-1611974717535-7c809af05bd7?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "4",
    title: "Venture Capital Fundamentals",
    content: "What do VCs actually look for in a pitch? A deep dive into unit economics, burn rates, and market scalability for early-stage startups.",
    date: "Oct 05, 2026",
    tags: ["Finance", "Startups", "VC"],
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "5",
    title: "The Art of Negotiation",
    content: "Whether it's corporate sponsorships or policy changes, negotiation is a critical skill. Here are three frameworks used by top executives to find win-win solutions.",
    date: "Sept 25, 2026",
    tags: ["Management", "Soft Skills", "Business"],
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "6",
    title: "Sustainable Business Practices",
    content: "ESG is no longer a buzzword; it's a necessity. We look at how modern corporations are integrating circular economy principles into their core operations.",
    date: "Sept 18, 2026",
    tags: ["Business", "Sustainability", "ESG"],
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "7",
    title: "Market Analysis for 2027",
    content: "Forecasting the economic shifts for the upcoming year. Why inflation rates and labor markets are our primary indicators for equity markets.",
    date: "Sept 10, 2026",
    tags: ["Economics", "Market", "Finance"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "8",
    title: "Mental Health in High-Pressure Roles",
    content: "Reflecting on my role as Student General Secretary, I discuss the importance of mental resilience and structured breaks in student governance.",
    date: "Sept 02, 2026",
    tags: ["Well-being", "Governance", "Mindset"],
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "9",
    title: "The Power of Networking",
    content: "Building a network is like building an insurance policy for your career. Strategies for authentic connection in the digital age.",
    date: "Aug 25, 2026",
    tags: ["Career", "Networking", "Success"],
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "10",
    title: "Digital Transformation in Education",
    content: "How AI and VR are changing the way business schools teach case studies. A look into the hybrid learning models of the future.",
    date: "Aug 15, 2026",
    tags: ["Education", "Tech", "Future"],
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800"
  }
];