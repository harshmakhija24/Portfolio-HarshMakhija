import { useState, useEffect } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import EventsArt from "./EventsArt";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const base = import.meta.env.BASE_URL;

type Project = {
  title: string;
  category: string;
  tools: string;
  image: string;
  /** where the poster click goes; falls back to actions, doc, then live */
  doc?: { label: string; href: string };
  live?: { label: string; href: string };
  actions?: { label: string; href: string; isAlt?: boolean }[];
  focus?: string;
  art?: "events";
};

const projects: Project[] = [
  {
    title: "Orbyt — Growth Strategy",
    category: "The Health Tech Collective",
    tools:
      "Seeding a curated health-tech network: one bucket, one trust level, one channel at a time. Strategy for the first 100 members, built on THC's 5,000+ member ecosystem.",
    image: base + "images/work/orbyt.jpg",
    doc: { label: "Read Strategy Deck (PDF)", href: base + "docs/Orbyt_Growth_Strategy.pdf" },
  },
  {
    title: "IIMBx AI Systems & Dashboards",
    category: "Dashboards, Agents & Pipelines",
    tools:
      "Interactive executive dashboards & AI agents: Freedcamp PM Dashboard with Gemini assistant, CEO real-time monitoring across SWAYAM & BBA DBE, Course Suggestion Engine, and Website Auditor.",
    image: base + "images/work/iimbx.jpg",
    actions: [
      { label: "PM Dashboard (Demo)", href: base + "demos/pm-dashboard/" },
      { label: "CEO Dashboard (Demo)", href: base + "demos/ceo-dashboard/", isAlt: true },
      { label: "Course Intelligence (Demo)", href: base + "demos/suggestion-engine/", isAlt: true },
      { label: "Website Auditor (Demo)", href: base + "demos/website-auditor/dashboard/index.html", isAlt: true },
      { label: "PM Report (PDF)", href: base + "docs/IIMBx_PM_Dashboard_Report.pdf", isAlt: true },
    ],
    focus: "50% 55%",
  },
  {
    title: "Wandr (DDT Capstone)",
    category: "Group Travel Discovery · DDT Capstone",
    tools:
      "Group-quiz preference-matching algorithm, destination safety scoring. Hidden places, found together.",
    image: base + "images/work/wandr.jpg",
    actions: [
      { label: "Open Live App (DDT)", href: "https://harshmakhija24.github.io/DDT-PROJECT-/" },
      { label: "Strategy Report (PDF)", href: base + "presentations/wandr-strategy-report.pdf", isAlt: true },
      { label: "Pitch Deck (PDF)", href: base + "docs/Wandr_Pitch_Deck.pdf", isAlt: true },
    ],
  },
  {
    title: "Krishitek Digital Platform",
    category: "Full-Stack Overhaul · Live Client Project",
    tools:
      "Serverless AI sales agent (Groq Llama 3), multilingual translation engine, zero-code CMS, Supabase RBAC. Replaced a vulnerable legacy WordPress site.",
    image: base + "images/work/krishitek.jpg",
    live: { label: "Open Live Site", href: "https://krishitek-website.vercel.app" },
    focus: "50% 0%",
  },
  {
    title: "VibeForge Academy",
    category: "Venture Pitch · EdTech & Founder Enablement",
    tools:
      "Adaptive founder acceleration platform: personalized curriculum pathways, interactive venture sprints, and automated competency benchmarking.",
    image: base + "images/work/vibeforge.jpg",
    doc: { label: "View Pitch Deck (PDF)", href: base + "docs/VibeForge_Academy_Pitch.pdf" },
  },
  {
    title: "Last Life",
    category: "E-Sports Tournament Platform",
    tools:
      "0-to-1 platform launch, organic viral growth, tournament monetization. Scaled to 12,000+ active users in 45 days.",
    image: base + "images/work/lastlife.jpg",
    focus: "50% 40%",
  },
  {
    title: "₹12 Crore Events Portfolio",
    category: "High-Stakes Operations & Event Management",
    tools:
      "Spearheaded HDFC Festive Treat card launch at Clarks Amer. 3D spatial mapping, calendar, budget, and logistics for a cumulative ₹12Cr+ portfolio.",
    image: base + "images/work/events.jpg",
    art: "events",
  },
  {
    title: "e-START · Hiroshima University",
    category: "Disaster Resilience & Community Health",
    tools:
      "Agile COIL e-START cohort across 10 Asia-Pacific and European universities. Cross-border comparative analysis and community resilience frameworks.",
    image: base + "images/work/estart.jpg",
    actions: [
      { label: "Disaster Resilience (PDF)", href: base + "presentations/disaster-response-resilience.pdf" },
      { label: "Personal Intro Deck (PDF)", href: base + "presentations/harsh-makhija-intro.pdf", isAlt: true },
    ],
  },
  {
    title: "Aham Aatm Deepah Association",
    category: "Social Impact Initiative",
    tools:
      "Community Outreach, Mental Health, Pranic Healing, Food & Clothing. 10,000+ beneficiaries.",
    image: base + "images/work/ngo.jpg",
    focus: "50% 40%",
  },
];

const pad = (n: number) => String(n).padStart(2, "0");

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const last = projects.length - 1;

  useEffect(() => {
    const handleSelect = (e: Event) => {
      const ce = e as CustomEvent<number>;
      if (
        typeof ce.detail === "number" &&
        ce.detail >= 0 &&
        ce.detail < projects.length
      ) {
        setCurrentIndex(ce.detail);
      }
    };
    window.addEventListener("select-project", handleSelect as EventListener);
    return () =>
      window.removeEventListener("select-project", handleSelect as EventListener);
  }, []);

  const goPrev = () => setCurrentIndex((i) => (i === 0 ? last : i - 1));
  const goNext = () => setCurrentIndex((i) => (i === last ? 0 : i + 1));

  return (
    <section className="work-section" id="work">
      <div className="work-container section-container">
        <h2 className="section-title" data-reveal>
          My <em>Work</em>
        </h2>

        <div className="carousel-wrapper">
          <div className="carousel-controls">
            <span className="mono carousel-count">
              {pad(currentIndex + 1)} / {pad(projects.length)}
            </span>
            <button
              className="carousel-arrow"
              onClick={goPrev}
              aria-label="Previous project"
            >
              <MdArrowBack />
            </button>
            <button
              className="carousel-arrow"
              onClick={goNext}
              aria-label="Next project"
            >
              <MdArrowForward />
            </button>
          </div>

          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div
                  className="carousel-slide"
                  key={project.title}
                  aria-hidden={index !== currentIndex}
                >
                  <div
                    className={`carousel-content ${
                      index % 2 ? "tone-b" : "tone-a"
                    }`}
                  >
                    <div className="carousel-info">
                      <span className="sticker carousel-number-tag">
                        PROJECT {pad(index + 1)}
                      </span>
                      <h3 className="carousel-title">{project.title}</h3>
                      <h4 className="carousel-category">{project.category}</h4>
                      <div className="carousel-tools">
                        <span className="tools-label">Tools &amp; Features</span>
                        <p>{project.tools}</p>
                      </div>
                      {(project.actions || project.doc || project.live) && (
                        <div className="carousel-actions">
                          {project.actions ? (
                            project.actions.map((act) => (
                              <a
                                key={act.label}
                                className={`btn btn-sm ${
                                  act.isAlt ? "btn-alt" : ""
                                }`}
                                href={act.href}
                                target="_blank"
                                rel="noreferrer"
                                tabIndex={index === currentIndex ? 0 : -1}
                              >
                                {act.label} ↗
                              </a>
                            ))
                          ) : (
                            <>
                              {project.doc && (
                                <a
                                  className="btn btn-sm"
                                  href={project.doc.href}
                                  target="_blank"
                                  rel="noreferrer"
                                  tabIndex={index === currentIndex ? 0 : -1}
                                >
                                  {project.doc.label} ↗
                                </a>
                              )}
                              {project.live && (
                                <a
                                  className="btn btn-sm btn-alt"
                                  href={project.live.href}
                                  target="_blank"
                                  rel="noreferrer"
                                  tabIndex={index === currentIndex ? 0 : -1}
                                >
                                  {project.live.label} ↗
                                </a>
                              )}
                            </>
                          )}
                        </div>
                      )}
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={project.image}
                        alt={project.title}
                        link={
                          project.actions?.[0]?.href ??
                          project.doc?.href ??
                          project.live?.href
                        }
                        focus={project.focus}
                        art={
                          project.art === "events" ? <EventsArt /> : undefined
                        }
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="carousel-dots">
            {projects.map((p, index) => (
              <button
                key={p.title}
                className={`carousel-dot ${
                  index === currentIndex ? "carousel-dot-active" : ""
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to ${p.title}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
