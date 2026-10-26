import "./styles/Career.css";

const careerTimeline = [
  {
    title: "Growth & Founder’s Office Associate",
    company: "The Healthtech Collective (India's Largest HealthTech Community)",
    duration: "OCT 2026 – PRESENT",
    description:
      "Spearheading product, website development, and event strategy for 5,000+ health-tech leaders. Built an automated LinkedIn pipeline scraper, curated high-value lead databases, and executing direct outreach to senior doctors and healthcare executives.",
    themeClass: "accent-tech",
  },
  {
    title: "Strategic Policy Intern",
    company: "Policy, Politics and Governance Foundation (PPGF)",
    duration: "OCT 2026 – PRESENT",
    description:
      "Engaging in institutional research, data synthesis, and governance frameworks to support strategic policy and public administration initiatives.",
    themeClass: "accent-business",
  },
  {
    title: "Tech & AI Systems Intern",
    company: "IIMBx — Digital Learning Foundation",
    duration: "APR 2026 – PRESENT",
    description:
      "Architected autonomous Website Agent (scored via Google Lighthouse CLI), real-time executive dashboard across SWAYAM & BBA DBE, Freedcamp PM dashboard with Gemini assistant, and Groq/Whisper multilingual video translation pipelines.",
    themeClass: "accent-tech",
  },
  {
    title: "Full-Stack Overhaul · Live Project",
    company: "Krishitek Industries Pvt. Ltd.",
    duration: "JUL 2026 – AUG 2026",
    description:
      "Engineered full-stack digital platform replacing legacy vulnerable infrastructure. Integrated serverless Groq Llama 3 sales agent, multilingual translation engine, and Supabase RBAC.",
    themeClass: "accent-tech",
  },
  {
    title: "Project Intern (Recruitment & Content)",
    company: "Indian Institute of Management Bangalore",
    duration: "JUL 2025 – JAN 2026",
    description:
      "Screened and evaluated 1,000+ candidate applications across two recruitment cycles, contributing to hiring 4 consultants and 4 interns. Directed end-to-end production of 25+ short-form videos, 5+ long-form YouTube productions, and institutional podcasts. Drafted the Zonal Representative Charter and contributed to student-centric DBE retake examination reforms.",
    themeClass: "accent-business",
  },
  {
    title: "Selected Consultant (Modiano Project)",
    company: "X-Culture Global Business Collaboration · IIM Bangalore",
    duration: "2026",
    description:
      "Selected from IIM Bangalore for an elite international consulting team solving live cross-border expansion and market strategy for Modiano (historic Italian brand founded 1868).",
    themeClass: "accent-business",
  },
  {
    title: "BBA in Digital Business & Entrepreneurship (82.83% WAM)",
    company: "Indian Institute of Management Bangalore",
    duration: "2024 – 2027",
    description:
      "82.83% WAM across 6 terms. Top performer in New Age Business Models (97.5%) and Exploring Society & Social Structure (97%). Leading initiatives in student ventures and academic community building.",
    themeClass: "accent-business",
  },
  {
    title: "Agile COIL e-START Fellow",
    company: "Hiroshima University, Japan",
    duration: "2024 – 2025",
    description:
      "Selected by IIM Bangalore for an international cohort across 10 Asia-Pacific & European universities, collaborating on disaster resilience frameworks and community public health models.",
    themeClass: "accent-business",
  },
  {
    title: "Non-Executive Director / Founder Director",
    company: "Aham Aatm Deepah Association",
    duration: "JUL 2024 – MAR 2026",
    description:
      "Led strategic planning, community empowerment programs, and partnerships touching 10,000+ beneficiaries. Championed mental well-being, life-skills, and educational sponsorship through the GMCKS Shiksha initiative.",
    themeClass: "accent-business",
  },
  {
    title: "Co-Founder",
    company: "Last Life · E-Sports Platform",
    duration: "2024",
    description:
      "Scaled competitive gaming platform from 0 to 12,000+ users in 45 days. Drove community growth, organic viral marketing, and tournament monetization.",
    themeClass: "accent-business",
  },
  {
    title: "Event Management Intern",
    company: "Zingolu Organizers",
    duration: "DEC 2023 – JAN 2024",
    description:
      "Spearheaded the flagship launch for HDFC's Festive Treat Credit Card at Clarks Amer for senior HDFC leadership. Managed 3D modeling, spatial mapping, and meticulous on-ground logistics within a cumulative ₹12Cr+ event management portfolio.",
    themeClass: "accent-business",
  },
  {
    title: "Brand Associate",
    company: "Younity.in",
    duration: "NOV 2020",
    description:
      "Drove digital sales and managed social media channels through innovative marketing campaigns, earning an official Letter of Recommendation (LOR) for top performance.",
    themeClass: "accent-business",
  },
  {
    title: "Diploma in Advertising, Media & Events (Rank 4/41)",
    company: "NAEMD · IGNOU",
    duration: "2023 – 2024",
    description:
      "Graduated with Distinction (Rank 4 among 41 students). Managed operational logistics and execution for event portfolios valued at ₹12 Crore+.",
    themeClass: "accent-business",
  },
];

const Career = () => (
  <section className="career-section" id="career">
    <div className="career-container section-container">
      <h2 className="section-title" data-reveal>
        My <em>Career</em>
      </h2>

      <ol className="career-list">
        {careerTimeline.map((item, index) => (
          <li
            key={index}
            className={`career-node ${item.themeClass} ${
              index % 2 ? "flip" : ""
            }`}
            data-reveal
          >
            <span className="career-node-duration">{item.duration}</span>
            <h4 className="career-node-title">{item.title}</h4>
            <h5 className="career-node-company">{item.company}</h5>
            <p className="career-node-desc">{item.description}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default Career;
