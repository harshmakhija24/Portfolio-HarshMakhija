import "./styles/Decks.css";
import { MdArrowOutward, MdFileDownload } from "react-icons/md";

const base = import.meta.env.BASE_URL;

interface DeckItem {
  kicker: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  pdfSrc: string;
  downloadName: string;
  pageLabel: string;
  coverImage: string;
  pptxSrc?: string;
  pptxName?: string;
  liveLink?: { label: string; href: string };
  tone: "tone-sun" | "tone-lime" | "tone-paper";
}

const decks: DeckItem[] = [
  {
    kicker: "PRODUCT STRATEGY DECK · WANDR (DDT CAPSTONE)",
    title: "Make the idea legible.",
    subtitle: "Product Strategy · Research Synthesis · Visual Storytelling",
    description:
      "An end-to-end product strategy report for Wandr, a community-powered group travel discovery and consensus platform. Demonstrates moving from a product problem to a crisp narrative across user research, audience segments, consensus algorithms, business model, and strategic pivots.",
    tags: [
      "DDT Project",
      "Product Strategy",
      "Consensus Algorithm",
      "Deck Design",
      "Research Synthesis",
    ],
    pdfSrc: base + "presentations/wandr-strategy-report.pdf",
    downloadName: "Harsh-Makhija-Wandr-Strategy-Report.pdf",
    pageLabel: "PDF · 15 PAGES",
    coverImage: base + "presentations/covers/wandr-strategy-report-cover.png",
    liveLink: {
      label: "Open Live App (DDT Project)",
      href: "https://harshmakhija24.github.io/DDT-PROJECT-/",
    },
    tone: "tone-sun",
  },
  {
    kicker: "FEATURED CASE STUDY · HIROSHIMA UNIVERSITY",
    title: "Disaster Response & Resilience",
    subtitle: "Comparative Research · Visual Synthesis · Policy Framing",
    description:
      "A cross-country comparative analysis of how government systems and local communities respond to disasters across Japan, India, and Malaysia. The central insight: systemic resilience is strongest when institutional state capacity and community mutual-aid reinforce each other.",
    tags: [
      "Japan",
      "India",
      "Malaysia",
      "Disaster Resilience",
      "Agile COIL",
    ],
    pdfSrc: base + "presentations/disaster-response-resilience.pdf",
    downloadName: "Harsh-Makhija-Disaster-Response-Resilience.pdf",
    pageLabel: "PDF · 16 PAGES",
    coverImage:
      base + "presentations/covers/disaster-response-resilience-cover.png",
    tone: "tone-lime",
  },
  {
    kicker: "HIROSHIMA UNIVERSITY · PERSONAL INTRO",
    title: "Harsh Makhija — Intro",
    subtitle: "Exploring Impact Through Curiosity",
    description:
      "A visual introduction built around curiosity, community impact, social service, and the dual operator context of Jaipur and Bengaluru.",
    tags: [
      "Hiroshima e-START",
      "IIM Bangalore",
      "Social Impact",
      "Jaipur & Bengaluru",
    ],
    pdfSrc: base + "presentations/harsh-makhija-intro.pdf",
    downloadName: "Harsh-Makhija-Intro.pdf",
    pageLabel: "PDF · 5 SLIDES",
    coverImage: base + "presentations/covers/harsh-makhija-intro-cover.png",
    pptxSrc: base + "presentations/harsh-makhija-intro.pptx",
    pptxName: "Harsh-Makhija-Intro.pptx",
    tone: "tone-paper",
  },
];

const Decks = () => (
  <section className="decks-section" id="decks">
    <div className="decks-container section-container">
      <div className="decks-header" data-reveal>
        <span className="sticker decks-kicker">THINKING IN PUBLIC</span>
        <h2 className="section-title">
          Strategic <em>Decks</em>
        </h2>
        <p className="decks-subtitle">
          Selected presentations that show how I frame high-stakes problems,
          synthesize research, and build narratives that move rooms.
        </p>
      </div>

      <div className="decks-list">
        {decks.map((d, index) => (
          <article
            key={d.title}
            className={`deck-card ${d.tone} ${index % 2 ? "flip" : ""}`}
            data-reveal
          >
            <div className="deck-copy">
              <span className="sticker deck-tag">{d.kicker}</span>
              <h3 className="deck-title">{d.title}</h3>
              <h4 className="deck-role">{d.subtitle}</h4>
              <p className="deck-desc">{d.description}</p>

              <div className="deck-pills" aria-label="Deck themes">
                {d.tags.map((t) => (
                  <span key={t} className="deck-pill">
                    {t}
                  </span>
                ))}
              </div>

              <div className="deck-actions">
                <a
                  className="btn btn-sm"
                  href={d.pdfSrc}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open Full PDF <MdArrowOutward />
                </a>
                <a
                  className="btn btn-sm btn-alt"
                  href={d.pdfSrc}
                  download={d.downloadName}
                >
                  Download <MdFileDownload />
                </a>
                {d.liveLink && (
                  <a
                    className="btn btn-sm btn-accent"
                    href={d.liveLink.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {d.liveLink.label} <MdArrowOutward />
                  </a>
                )}
                {d.pptxSrc && (
                  <a
                    className="btn btn-sm btn-alt"
                    href={d.pptxSrc}
                    download={d.pptxName}
                  >
                    Original PPTX <MdFileDownload />
                  </a>
                )}
              </div>
            </div>

            <div className="deck-preview">
              <div className="preview-top-bar">
                <span className="mono">Live document preview</span>
                <span className="mono preview-badge">{d.pageLabel}</span>
              </div>
              <div className="preview-frame">
                <iframe
                  title={`${d.title} — scrollable preview`}
                  src={`${d.pdfSrc}#view=FitH&toolbar=0&navpanes=0`}
                  loading="lazy"
                />
              </div>
              <a
                className="preview-fallback mono"
                href={d.pdfSrc}
                target="_blank"
                rel="noreferrer"
              >
                Preview not loading? Open the full PDF ↗
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Decks;
