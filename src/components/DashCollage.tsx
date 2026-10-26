import "./styles/DashCollage.css";

const base = import.meta.env.BASE_URL;

const shots = [
  { label: "PM Dashboard", img: "shot-pm.png", href: "demos/pm-dashboard/" },
  { label: "CEO Dashboard", img: "shot-ceo.png", href: "demos/ceo-dashboard/" },
  { label: "Course Intelligence", img: "shot-course.png", href: "demos/suggestion-engine/" },
  { label: "Website Auditor", img: "shot-auditor.png", href: "demos/website-auditor/dashboard/index.html" },
];

/** Collage of the four real demo dashboards. Each tile opens its demo. */
const DashCollage = () => (
  <div className="dc">
    {shots.map((s, i) => (
      <a
        key={s.label}
        className={`dc-card dc-${i}`}
        href={base + s.href}
        target="_blank"
        rel="noreferrer"
        aria-label={`Open ${s.label} demo`}
      >
        <span className="dc-bar">
          <i /> <i /> <i />
          <b>{s.label}</b>
        </span>
        <img src={`${base}images/work/${s.img}`} alt="" loading="lazy" />
      </a>
    ))}
  </div>
);

export default DashCollage;
