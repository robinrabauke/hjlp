import React from "react";

export const HeroIntro = ({ heroSection }) => (
  <div class="hero min-h-screen ">
    <div
      class="hero-overlay bg-opacity-60 bg-cover"
      style={{
        backgroundImage: `url(${heroSection.heroImage.url})`,
      }}
    ></div>

    <div class="text-center hero-content text-neutral-content">
      <div class="max-w-md">
        <h1 class="mb-5 text-5xl font-bold">{heroSection.headline}</h1>
        <p class="mb-5">{heroSection.subline}</p>
        <button class="btn btn-primary">{heroSection.button}</button>
      </div>
    </div>
  </div>
);
