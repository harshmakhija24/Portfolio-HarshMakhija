import { useState } from "react";
import "./styles/Media.css";

type Video = {
  id: string;
  title: string;
  short?: boolean;
  /** what Harsh did on this piece */
  role: string;
};

const CHANNEL = "IIM Bangalore BBA DBE";

const longForm: Video[] = [
  {
    id: "AblxXETfoNs",
    title:
      "What I Learned Selling Hand-Painted Kulhads | Aditya Kakkad IIM Bangalore BBA(DBE) ₹250 Venture",
    role: "Script · Cast · Direction",
  },
  {
    id: "YCHB-2-2_eE",
    title:
      "How Failing a Project Led Me to Harvard & Japan | Vaishnavi Patil, IIM Bangalore BBA(DBE) Student",
    role: "Script · Cast · Direction",
  },
  {
    id: "T9xhlw_eSF8",
    title:
      "NIFT to IIM Bangalore: Bridging Fashion Design & Business Strategy | Yuvraaj's Story | IIMB BBA(DBE)",
    role: "Script · Cast · Direction",
  },
];

const shorts: Video[] = [
  {
    id: "kN7UZxqJPPI",
    short: true,
    title: "How I Manage My Day as a BBA DBE Student at IIM Bangalore #bbadbe",
    role: "Shot same day · Direction",
  },
  {
    id: "jYgF8Bop1tc",
    short: true,
    title:
      "Why Real-Time Collaboration is Changing the Way We Learn Business #BBABDE",
    role: "Shot same day · Direction",
  },
];

const podcasts: Video[] = [
  {
    id: "6mKBuUlLWXk",
    title:
      "Blue Ocean Bet: How Flekt Transforms the $30B Salon Industry | DBE show Ep 1",
    role: "Edit supervision",
  },
  {
    id: "55BS0-Bb-u4",
    title:
      "The 800-Doctor Rule: Building Health-Tech in India ft. CEO of MedPiper | IIMB BBA DBE Show Episode 2",
    role: "Edit supervision",
  },
  {
    id: "uDQwoRHcp98",
    title:
      "Why I Quit Corporate Law After 4 Months to Fight Climate Change | Abhinav- Climate Khoj Founder",
    role: "Edit supervision",
  },
];

const PlayIcon = () => (
  <svg viewBox="0 0 68 48" aria-hidden="true" className="yt-play-svg">
    <path
      d="M66.5 7.7a8.5 8.5 0 0 0-6-6C55.2.2 34 .2 34 .2S12.8.2 7.5 1.7a8.5 8.5 0 0 0-6 6C0 13 0 24 0 24s0 11 1.5 16.3a8.5 8.5 0 0 0 6 6C12.8 47.8 34 47.8 34 47.8s21.2 0 26.5-1.5a8.5 8.5 0 0 0 6-6C68 35 68 24 68 24s0-11-1.5-16.3Z"
      fill="#f00"
    />
    <path d="M45 24 27 14v20" fill="#fff" />
  </svg>
);

const YtCard = ({ v }: { v: Video }) => {
  const [playing, setPlaying] = useState(false);
  const url = v.short
    ? `https://www.youtube.com/shorts/${v.id}`
    : `https://www.youtube.com/watch?v=${v.id}`;

  return (
    <article className={`yt-card ${v.short ? "yt-short" : ""}`} data-reveal>
      <div className="yt-thumb">
        {playing ? (
          <iframe
            title={v.title}
            src={`https://www.youtube-nocookie.com/embed/${v.id}?autoplay=1&rel=0&modestbranding=1`}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            className="yt-thumb-btn"
            onClick={() => setPlaying(true)}
            aria-label={`Play: ${v.title}`}
          >
            <img
              src={`https://i.ytimg.com/vi/${v.id}/maxresdefault.jpg`}
              alt=""
              loading="lazy"
              onError={(e) => {
                const t = e.currentTarget;
                if (!t.dataset.fb) {
                  t.dataset.fb = "1";
                  t.src = `https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`;
                }
              }}
            />
            <span className="yt-play">
              <PlayIcon />
            </span>
          </button>
        )}
      </div>
      <div className="yt-meta">
        <span className="yt-avatar" aria-hidden="true">
          IIMB
        </span>
        <div className="yt-text">
          <h4 className="yt-title">{v.title}</h4>
          <p className="yt-channel">{CHANNEL}</p>
          <div className="yt-foot">
            <span className="yt-role">{v.role}</span>
            <a href={url} target="_blank" rel="noreferrer" className="yt-link">
              Watch on YouTube ↗
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

const Group = ({
  kicker,
  title,
  note,
  items,
  tone,
}: {
  kicker: string;
  title: string;
  note: string;
  items: Video[];
  tone: string;
}) => (
  <div className={`media-group ${tone}`}>
    <div className="media-group-head" data-reveal>
      <span className="sticker media-kicker">{kicker}</span>
      <h3>{title}</h3>
      <p>{note}</p>
    </div>
    <div className={`yt-grid ${items[0].short ? "yt-grid-short" : ""}`}>
      {items.map((v) => (
        <YtCard key={v.id} v={v} />
      ))}
    </div>
  </div>
);

const Media = () => (
  <section className="media-section" id="media">
    <div className="media-container section-container">
      <h2 className="section-title" data-reveal>
        Camera, Cast &amp; <em>Cut</em>
      </h2>
      <p className="media-lead" data-reveal>
        Stories I wrote, cast, directed and edited at IIM Bangalore, end to end.
        I pick the guests, shape the script, set up the shot and help first-time
        speakers get past camera shyness.
      </p>

      <Group
        tone="media-a"
        kicker="Long-form · Venix '25"
        title="Student stories, scripted & directed"
        note="Scripted each episode, selected the cast on the same day in the middle of the fest, directed camera angles and eased students out of camera shyness."
        items={longForm}
      />

      <Group
        tone="media-b"
        kicker="Short-form · Same day"
        title="When time ran out, we made shorts"
        note="One long-form shoot could not be done properly under the time pressure, so we shot these two short-form pieces the same day."
        items={shorts}
      />

      <Group
        tone="media-c"
        kicker="Podcast · DBE Show"
        title="Edit supervision on the DBE Show"
        note="Looked over the editing of these podcast episodes while working at IIMB. Hosting and producing podcasts is where I want to go next."
        items={podcasts}
      />

      <article className="media-note" data-reveal>
        <span className="sticker media-kicker">IIMBx · SANGAM DLC</span>
        <p>
          During my 2025 internship at IIMB we worked in the same space for
          IIMBx: I helped select students from the DBE course, understand how
          they use AI, and shot a few videos with them. Those videos were used
          for the SANGAM DLC project.
        </p>
      </article>
    </div>
  </section>
);

export default Media;
