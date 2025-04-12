"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [font, setFont] = useState("Coming soon...");

  useEffect(() => {
    const interval = setInterval(() => {
      setFont((prev) => prev + ".");
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="flex flex-col items-center justify-center h-dvh">
      {font}
    </main>
  );
}
