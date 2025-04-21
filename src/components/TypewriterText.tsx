
import React, { useEffect, useRef, useState } from "react";

export default function TypewriterText({ text, speed = 13, onDone }: { text: string, speed?: number, onDone?: () => void }) {
  const [displayed, setDisplayed] = useState("");
  const i = useRef(0);

  useEffect(() => {
    if (!text) return;
    setDisplayed("");
    i.current = 0;
    const words = text.split("");
    if (words.length === 0) return;

    const interval = setInterval(() => {
      setDisplayed((d) => d + words[i.current]);
      i.current += 1;
      if (i.current >= words.length) {
        clearInterval(interval);
        onDone && onDone();
      }
    }, speed);
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, [text]);

  return <div className="whitespace-pre-wrap typewriter text-base md:text-lg" style={{ animation: "none" }}>{displayed}</div>;
}
