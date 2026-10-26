import "./styles/Certifications.css";

const base = import.meta.env.BASE_URL;

type Cert = {
  title: string;
  issuer: string;
  meta: string;
  href?: string;
  cta?: string;
  badge?: string;
};

const certs: Cert[] = [
  {
    title: "AGILE Program · COIL Collaborative Education",
    issuer: "Hiroshima University · Open Badge",
    meta: "30-hour Foundation Course · MEXT-backed programme · 2026",
    href: "https://openbadges.certcvs.ntt-west.co.jp/badge/7F1B50AA-597E-40B9-8EA7-1E2CB010C707/",
    cta: "Verify badge",
    badge: base + "images/certs/badge.png",
  },
  {
    title: "Digital Marketing with AI",
    issuer: "Internshala Trainings",
    meta: "Certificate of completion",
    href: "https://trainings.internshala.com/view_certificate/g50264qfdu3/8yvqoqjvl9e/",
    cta: "View certificate",
  },
  {
    title: "Business Analytics",
    issuer: "Internshala Trainings · NSDC / Skill India",
    meta: "Completed April 2024",
    href: "https://trainings.internshala.com/certificate/view/nsdc/eekurnkn0sw/acf76xjjc4i/",
    cta: "View certificate",
  },
  {
    title: "Microsoft Excel — Beginner to Advanced",
    issuer: "Udemy · Kyle Pew, Office Newb",
    meta: "22 total hours · Nov 27, 2025",
  },
];

const Certifications = () => (
  <section className="cert-section section-container" id="certifications">
    <h2 className="section-title" data-reveal>
      <em>Certifications</em>
    </h2>
    <ul className="cert-grid">
      {certs.map((c, i) => (
        <li
          key={c.title}
          className={`cert-card cert-${i}`}
          data-reveal
          style={{ "--d": `${i * 60}ms` } as React.CSSProperties}
        >
          {c.badge && <img className="cert-badge" src={c.badge} alt="Hiroshima University AGILE COIL badge" loading="lazy" />}
          <div className="cert-body">
            <span className="cert-issuer">{c.issuer}</span>
            <h3 className="cert-title">{c.title}</h3>
            <p className="cert-meta">{c.meta}</p>
            {c.href && (
              <a className="btn btn-sm" href={c.href} target="_blank" rel="noreferrer">
                {c.cta} ↗
              </a>
            )}
          </div>
        </li>
      ))}
    </ul>
  </section>
);

export default Certifications;
