import React from "react";
import { asset } from "../lib/asset"; // sesuaikan path jika filemu beda lokasi

const BG = {
  sky: asset("assets/sky.jpg"),
  planets: asset("assets/planets.png"),
  mountain3: asset("assets/mountain-3.png"),
  mountain2: asset("assets/mountain-2.png"),
  mountain1: asset("assets/mountain-1.png"),
};

export default function ParallaxBackground() {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none">
      {/* SKY */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${BG.sky})` }}
      />
      {/* MOUNTAIN 3 (paling belakang) */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{ backgroundImage: `url(${BG.mountain3})` }}
      />
      {/* PLANETS */}
      <div
        className="absolute inset-0 bg-contain bg-no-repeat bg-center opacity-80"
        style={{ backgroundImage: `url(${BG.planets})` }}
      />
      {/* MOUNTAIN 2 */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-85"
        style={{ backgroundImage: `url(${BG.mountain2})` }}
      />
      {/* MOUNTAIN 1 (paling depan) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${BG.mountain1})` }}
      />
      {/* Fallback tipis */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/20" />
    </div>
  );
}
