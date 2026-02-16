"use client";

import React, { useState, useRef } from "react";
import { pressSectionData } from "@/data/pressSectionData";

const ChevronLeft = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

const ChevronRight = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18l6-6-6-6" />
  </svg>
);

export default function PressSectionPage() {
  const [sliderIndex, setSliderIndex] = useState(0);
  const [visiblePopular, setVisiblePopular] = useState(5);
  const sliderRef = useRef(null);

  const { featured, sideItems, latestNews, popularNews } = pressSectionData;
  const itemsPerSlide = 3;
  const maxSliderIndex = Math.max(0, Math.ceil(latestNews.length / itemsPerSlide) - 1);

  const handlePrevSlide = () => {
    setSliderIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNextSlide = () => {
    setSliderIndex((prev) => Math.min(maxSliderIndex, prev + 1));
  };

  const handleLoadMore = () => {
    setVisiblePopular((prev) => prev + 5);
  };

  const visiblePopularItems = popularNews.slice(0, visiblePopular);
  const hasMoreToLoad = visiblePopular < popularNews.length;

  return (
    <div className="min-h-screen w-full bg-[#0a0e1a] text-white py-12">
      {/* Top Section: Left 1 + Right 5 */}
      <section className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left - Featured Card */}
          <div className="lg:col-span-2">
            <div
              className="relative h-full min-h-[320px] rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm p-6 flex flex-col justify-between"
              style={{
                background: "linear-gradient(135deg, rgba(86, 159, 255, 0.08) 0%, rgba(10, 14, 26, 0.95) 100%)",
                boxShadow: "0 0 40px rgba(86, 159, 255, 0.1)",
              }}
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#569FFF] to-[#00C2FF] flex items-center justify-center text-2xl font-bold text-white">
                    F
                  </div>
                  <span className="text-xl font-bold text-white">Fuutura</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
                  {featured.title}
                </h2>
                <p className="text-white/70 text-sm md:text-base leading-relaxed">
                  {featured.description}
                </p>
              </div>
              <div className="flex justify-end mt-4">
                <span className="text-sm text-[#569FFF] font-medium">{featured.date}</span>
              </div>
            </div>
          </div>

          {/* Right - 5 Side Items */}
          <div className="flex flex-col gap-4">
            {sideItems.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 p-3 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
              >
                <div className="shrink-0 w-16 h-16 rounded-lg overflow-hidden bg-white/10">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64'%3E%3Crect fill='%23333' width='64' height='64'/%3E%3Ctext fill='%23999' font-size='10' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3EImg%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-white line-clamp-2 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#569FFF]">
                    {item.date} | {item.source}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Crypto News - Slider */}
      <section className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Latest Crypto News</h2>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrevSlide}
              disabled={sliderIndex === 0}
              className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white hover:bg-[#569FFF]/20 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={handleNextSlide}
              disabled={sliderIndex >= maxSliderIndex}
              className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white hover:bg-[#569FFF]/20 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-300 ease-out"
            style={{
              width: `${(latestNews.length / itemsPerSlide) * 100}%`,
              transform: `translateX(-${sliderIndex * (100 / Math.ceil(latestNews.length / itemsPerSlide))}%)`,
            }}
            ref={sliderRef}
          >
            {latestNews.map((item) => (
              <div
                key={item.id}
                className="shrink-0"
                style={{ width: `${(100 / itemsPerSlide) / (latestNews.length / itemsPerSlide)}%` }}
              >
                <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5 hover:border-[#569FFF]/30 transition-colors">
                  <div className="aspect-[16/10] bg-white/10 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250'%3E%3Crect fill='%23333' width='400' height='250'/%3E%3Ctext fill='%23999' font-size='16' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3ENews Image%3C/text%3E%3C/svg%3E";
                      }}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-base font-bold text-white mb-2 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/70 line-clamp-2 mb-3">
                      {item.description}
                    </p>
                    <p className="text-xs text-[#569FFF]">
                      {item.date} | {item.source}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Crypto News - Vertical List */}
      <section className="max-w-[1200px] mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Popular Crypto News</h2>

        <div className="space-y-6">
          {visiblePopularItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row gap-4 p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
            >
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-white/70 mb-3">{item.description}</p>
                <p className="text-xs text-[#569FFF]">{item.date} | {item.source}</p>
              </div>
              <div className="shrink-0 w-full md:w-32 h-24 md:h-24 rounded-lg overflow-hidden bg-white/10">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='128' height='96'%3E%3Crect fill='%23333' width='128' height='96'/%3E%3Ctext fill='%23999' font-size='10' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3EImg%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        {hasMoreToLoad && (
          <div className="flex justify-center mt-12">
            <button
              onClick={handleLoadMore}
              className="px-8 py-3 rounded-lg border border-white/30 text-white font-medium hover:bg-[#569FFF]/20 hover:border-[#569FFF]/50 transition-colors"
            >
              Load More
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
