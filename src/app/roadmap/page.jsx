"use client";

import { useEffect } from "react";

export default function RoadmapRedirect() {
  useEffect(() => {
    window.location.href = "/roadmap.html";
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0B0D] flex items-center justify-center">
      <p className="text-white">Redirecting to Roadmap...</p>
    </div>
  );
}
