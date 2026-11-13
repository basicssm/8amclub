"use client";
import { useEffect, useState } from "react";

function left() {
  const now = new Date();
  const t = new Date(now);
  t.setHours(8, 0, 0, 0);
  if (now >= t) t.setDate(t.getDate() + 1);
  const d = +t - +now;
  const h = Math.floor(d / 3.6e6), m = Math.floor((d % 3.6e6) / 6e4), s = Math.floor((d % 6e4) / 1e3);
  return [h, m, s].map((n) => String(n).padStart(2, "0")).join(":");
}

export default function Clock() {
  const [v, setV] = useState("--:--:--");
  useEffect(() => {
    setV(left());
    const id = setInterval(() => setV(left()), 1000);
    return () => clearInterval(id);
  }, []);
  return <span>{v}</span>;
}
