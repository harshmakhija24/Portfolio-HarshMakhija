import "./styles/WhatIDo.css";

type Pillar = {
  num: string;
  title: string;
  subtitle: string;
  desc: string;
  theme: string;
  link: string;
  linkText: string;
  projectIndex?: number;
  targetId?: string;
  altBtn: boolean;
  delay: string;
};

const pillars: Pillar[] = [
  {
    num: "01",
    title: "GROWTH & OUTREACH",
    subtitle: "Founder’s Office & Lead Generation",
    desc: "Building automated outbound engines from scratch. Architected custom LinkedIn scraping pipelines, structured targeted CXO and senior doctor databases, and executed high-conversion outreach for India's largest health-tech collective.",
    theme: "what-growth",
    link: "#work",
    projectIndex: 0,
    linkText: "Explore Growth Deck",
    altBtn: false,
    delay: "0ms",
  },
  {
    num: "02",
    title: "STORYTELLING & MEDIA",
    subtitle: "Narrative Direction & Multimedia",
    desc: "Translating complex visions into compelling narratives that move stakeholders. Directed end-to-end production of 25+ short-form videos, 5+ long-form YouTube productions, institutional podcasts, and investor decks across IIM Bangalore and early ventures.",
    theme: "what-story",
    link: "#career",
    targetId: "career",
    linkText: "View 30+ Productions",
    altBtn: true,
    delay: "80ms",
  },
  {
    num: "03",
    title: "AI SYSTEMS & PLATFORMS",
    subtitle: "Applied AI & Digital Infrastructure",
    desc: "Moving beyond experimentation to deliver production-grade software: autonomous web agents with Google Lighthouse CLI scoring, Groq/Whisper multilingual video pipelines, and full-stack enterprise platform overhauls (Krishitek, IIMBx).",
    theme: "what-tech",
    link: "#work",
    projectIndex: 1,
    linkText: "Explore Systems & Dashboards",
    altBtn: false,
    delay: "140ms",
  },
  {
    num: "04",
    title: "HIGH-STAKES OPERATIONS",
    subtitle: "Event Logistics & Institutional Leadership",
    desc: "Proven execution under high stakes. Managed ₹12Cr+ cumulative event portfolios, spearheaded the HDFC Festive Treat card launch at Clarks Amer, screened 1,000+ candidate applications for IIMB, and led social initiatives touching 10,000+ lives.",
    theme: "what-ops",
    link: "#work",
    projectIndex: 6,
    linkText: "Explore Events Portfolio",
    altBtn: true,
    delay: "200ms",
  },
];

const WhatIDo = () => {
  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    projectIndex?: number,
    targetId?: string
  ) => {
    if (typeof projectIndex === "number") {
      e.preventDefault();
      window.dispatchEvent(
        new CustomEvent("select-project", { detail: projectIndex })
      );
      const el = document.getElementById("work");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else if (targetId) {
      e.preventDefault();
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section className="whatIDO section-container" id="what-i-do">
      <h2 className="section-title" data-reveal>
        What <em>I Do</em>
      </h2>
      <div className="what-grid">
        {pillars.map((p) => (
          <article
            key={p.num}
            className={`what-card ${p.theme}`}
            data-reveal
            style={{ "--d": p.delay } as React.CSSProperties}
          >
            <span className="sticker what-num">{p.num}</span>
            <h3>{p.title}</h3>
            <h4>{p.subtitle}</h4>
            <p>{p.desc}</p>
            <a
              href={p.link}
              onClick={(e) => handleLinkClick(e, p.projectIndex, p.targetId)}
              className={`btn ${p.altBtn ? "btn-alt" : ""}`}
            >
              {p.linkText} <span>&#8594;</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default WhatIDo;
