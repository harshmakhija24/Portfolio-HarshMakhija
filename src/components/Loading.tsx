import { useEffect, useState } from "react";
import "./styles/Loading.css";
import { useLoading } from "../context/LoadingProvider";

const words = [
  "Founder's Office",
  "Growth & Outreach",
  "IIM Bangalore",
  "Storytelling & Systems",
];

const Loading = ({ percent }: { percent: number }) => {
  const { setIsLoading } = useLoading();
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    if (percent < 100) return;
    const t1 = setTimeout(() => setLeaving(true), 250);
    const t2 = setTimeout(() => setIsLoading(false), 250 + 600);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [percent, setIsLoading]);

  return (
    <div className={`loader ${leaving ? "loader-out" : ""}`} role="status">
      <div className="loader-ribbon" aria-hidden="true">
        <div className="loader-ribbon-track">
          {[...words, ...words, ...words, ...words].map((w, i) => (
            <span key={i}>{w} ✱</span>
          ))}
        </div>
      </div>
      <div className="loader-core">
        <span className="sticker loader-tag">HM · Portfolio</span>
        <div className="loader-percent">
          {Math.min(percent, 100)}
          <small>%</small>
        </div>
        <div className="loader-bar" aria-hidden="true">
          <div
            className="loader-bar-fill"
            style={{ transform: `scaleX(${Math.min(percent, 100) / 100})` }}
          />
        </div>
      </div>
    </div>
  );
};

export default Loading;

export const setProgress = (setLoading: (value: number) => void) => {
  let percent = 0;

  let interval = setInterval(() => {
    if (percent <= 80) {
      percent += Math.round(Math.random() * 5);
      setLoading(percent);
    } else {
      clearInterval(interval);
      interval = setInterval(() => {
        percent += 1;
        setLoading(percent);
        if (percent > 98) clearInterval(interval);
      }, 50);
    }
  }, 40);

  function clear() {
    clearInterval(interval);
  }

  function loaded() {
    return new Promise<number>((resolve) => {
      clearInterval(interval);
      interval = setInterval(() => {
        if (percent < 100) {
          percent++;
          setLoading(percent);
        } else {
          resolve(percent);
          clearInterval(interval);
        }
      }, 6);
    });
  }
  return { loaded, percent, clear };
};
