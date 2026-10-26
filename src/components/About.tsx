import "./styles/About.css";

const About = () => (
  <section className="about-section section-container" id="about">
    <h2 className="section-title" data-reveal>
      About <em>Me</em>
    </h2>
    <div className="about-grid">
      <div className="about-me">
        <p className="para lead" data-reveal>
          I'm a Founder's Office &amp; Growth Operator pursuing a BBA in Digital
          Business and Entrepreneurship at IIM Bangalore.
        </p>
        <p className="para" data-reveal style={{ "--d": "60ms" } as React.CSSProperties}>
          I specialize in 0-to-1 execution across growth marketing, targeted
          stakeholder outreach, and brand storytelling. From spearheading senior
          doctor outreach and building automated lead scrapers at The Healthtech
          Collective, to producing 30+ institutional films and podcasts at IIMB,
          I turn strategic ambiguity into measurable traction.
        </p>
        <p className="para" data-reveal style={{ "--d": "120ms" } as React.CSSProperties}>
          A builder at heart, I pair sharp business acumen with practical AI
          systems—automating pipelines, shipping digital platforms, and eliminating
          operational bottlenecks to drive real commercial and community growth.
        </p>
      </div>
      <div className="about-stats">
        <p className="stat-line" data-reveal>
          <strong className="stat-number">12,000+</strong>
          <span className="stat-text">users scaled in 45 days (Last Life)</span>
        </p>
        <p className="stat-line" data-reveal style={{ "--d": "60ms" } as React.CSSProperties}>
          <strong className="stat-number">₹12Cr+</strong>
          <span className="stat-text">event portfolio managed</span>
        </p>
        <p className="stat-line" data-reveal style={{ "--d": "120ms" } as React.CSSProperties}>
          <strong className="stat-number">1,000+</strong>
          <span className="stat-text">candidate profiles evaluated &amp; 30+ films</span>
        </p>
        <p className="stat-line" data-reveal style={{ "--d": "180ms" } as React.CSSProperties}>
          <strong className="stat-number">10,000+</strong>
          <span className="stat-text">lives touched via social impact</span>
        </p>
      </div>
    </div>
  </section>
);

export default About;
