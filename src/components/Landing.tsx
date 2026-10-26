import "./styles/Landing.css";

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

      <div className="landing-stats">
        <div className="stat-item stat-a">
          <span className="stat-value">12,000+</span>
          <span className="stat-label">Users Scaled</span>
        </div>
        <div className="stat-item stat-b">
          <span className="stat-value">₹12Cr+</span>
          <span className="stat-label">Events Managed</span>
        </div>
        <div className="stat-item stat-c">
          <span className="stat-value">1,000+</span>
          <span className="stat-label">Talent Evaluated</span>
        </div>
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
