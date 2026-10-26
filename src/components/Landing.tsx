import { useState } from "react";
import "./styles/Landing.css";

const base = import.meta.env.BASE_URL;

/** Drop the real logo into public/images/logos/<file>; until then a text badge shows. */
const orgs = [
  { name: "IIM Bangalore", short: "IIMB", role: "BBA, Digital Business & Entrepreneurship", file: "iimb.png" },
  { name: "IIMBx", short: "IIMBx", role: "Tech & AI Systems Intern", file: "iimbx.png" },
  { name: "The Health Tech Collective", short: "THC", role: "Growth & Founder’s Office", file: "thc.png" },
  { name: "PPGF", short: "PPGF", role: "Strategic Policy Intern", file: "ppgf.png" },
  { name: "Aham Aatm Deepah", short: "AAD", role: "Non-Executive Director", file: "aham-aatm-deepah.svg" },
];

const OrgChip = ({ o, i }: { o: (typeof orgs)[number]; i: number }) => {
  const [failed, setFailed] = useState(false);
  return (
    <div className={`org-chip org-${i}`} tabIndex={0} aria-label={`${o.name}, ${o.role}`}>
      {failed ? (
        <span className="org-fallback">{o.short}</span>
      ) : (
        <img
          src={`${base}images/logos/${o.file}`}
          alt={o.name}
          loading="lazy"
          onError={() => setFailed(true)}
        />
      )}
      <span className="org-tip">
        <strong>{o.name}</strong>
        {o.role}
      </span>
    </div>
  );
};

const marquee = [
  "Founder's Office",
  "Growth & Outreach",
  "Storytelling & Media",
  "IIM Bangalore",
  "AI Systems & Automation",
  "₹12Cr+ Event Operations",
  "Community Building",
];

const Landing = () => (
  <section className="landing-section" id="landingDiv">
    <div className="landing-container section-container">
      <div className="landing-intro">
        <div className="sticker landing-status">
          <span className="status-dot"></span> Growth &amp; Founder's Office @ The Healthtech Collective · IIM Bangalore
        </div>
        <h2 className="landing-hello">Hello! I'm</h2>
        <h1>
          <span className="name-a">HARSH</span>
          <span className="name-b">MAKHIJA</span>
        </h1>
      </div>

      <div className="landing-info">
        <h3>Founder’s Office &amp; Growth Generalist</h3>
        <p className="landing-tagline">
          Driving zero-to-one execution across high-impact stakeholder outreach,
          compelling brand storytelling, and practical AI systems.
        </p>

        <div className="landing-ctas">
          <a
            href="#work"
            className="btn"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById("work");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            View My Work
          </a>
          <a
            href={import.meta.env.BASE_URL + "Harsh_Makhija_CV.pdf"}
            target="_blank"
            rel="noopener noreferrer"
            download="Harsh_Makhija_CV.pdf"
            className="btn btn-alt"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div className="hero-cluster">
        <figure className="hero-polaroid">
          <img
            src={base + "images/harsh.jpg"}
            alt="Harsh Makhija"
            width={240}
            height={240}
          />
          <figcaption>Harsh Makhija</figcaption>
        </figure>
        {orgs.map((o, i) => (
          <OrgChip key={o.name} o={o} i={i} />
        ))}
      </div>
    </div>

    <div className="ribbon" aria-hidden="true">
      <div className="ribbon-track">
        {[...marquee, ...marquee].map((m, i) => (
          <span key={i}>{m} ✱</span>
        ))}
      </div>
    </div>
  </section>
);

export default Landing;
