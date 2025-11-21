"use client";
import { useEffect, useState } from "react";
type Props = {
    phrases: string[];
};


const LoopingText = ({ phrases }: Props) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 4300); // ganti setiap 4 detik
    return () => clearInterval(timer);
  }, []);

  return (
    <h2
      className="text-4xl animate-fade-in transition-opacity duration-700 ease-in-out"
      style={{
        fontFamily: "var(--font-testsohne)",
        fontWeight: 800,
      }}
    >
      {phrases[index]}
    </h2>
  );
};

export default LoopingText;