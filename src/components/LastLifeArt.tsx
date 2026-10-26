import "./styles/LastLifeArt.css";

const chips = ["Community", "Viral growth", "Monetization"];
const ribbon = "TOURNAMENTS · COMMUNITY · VIRAL GROWTH · MONETIZATION · ";

/** Code-drawn Last Life visual: live tournament scoreboard with a user counter. */
const LastLifeArt = () => (
  <div className="ll" role="img" aria-label="Last Life: scaled to 12,000+ users in 45 days">
    <div className="ll-top">
      <span className="ll-live"><i /> LIVE</span>
      <span className="ll-title">LAST LIFE · TOURNAMENT HUB</span>
    </div>
    <div className="ll-body">
      <div className="ll-ribbon" aria-hidden="true">
        <div className="ll-ribbon-track">
          <span>{ribbon.repeat(4)}</span>
          <span>{ribbon.repeat(4)}</span>
        </div>
      </div>
      <span className="ll-kicker">Active users</span>
      <div className="ll-score">
        <span className="ll-k" />
        <span>,000+</span>
      </div>
      <div className="ll-bar">
        <span className="ll-bar-fill" />
        <span className="ll-bar-label ll-l0">DAY 0</span>
        <span className="ll-bar-label ll-l1">DAY 45</span>
      </div>
      <div className="ll-chips">
        {chips.map((c, i) => (
          <span key={c} className={`ll-chip ll-chip-${i}`}>{c}</span>
        ))}
      </div>
    </div>
  </div>
);

export default LastLifeArt;
