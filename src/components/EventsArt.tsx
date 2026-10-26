import "./styles/EventsArt.css";

const chips = ["Calendar", "Budget", "Logistics"];
const ribbon = "CALENDAR · BUDGET · LOGISTICS · ";

const EventsArt = () => (
  <div className="ev" role="img" aria-label="₹12 Crore events portfolio: calendar, budget and logistics">
    <div className="ev-ribbon" aria-hidden="true">
      <div className="ev-ribbon-track">
        <span>{ribbon.repeat(6)}</span>
        <span>{ribbon.repeat(6)}</span>
      </div>
    </div>
    <div className="ev-body">
      <span className="ev-kicker">Cumulative valuation</span>
      <div className="ev-stamp">
        <span className="ev-rupee">₹</span>
        <span className="ev-num" />
        <span className="ev-unit">Cr</span>
      </div>
      <div className="ev-chips">
        {chips.map((c, i) => (
          <span key={c} className={`ev-chip ev-chip-${i}`}>
            {c}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default EventsArt;
