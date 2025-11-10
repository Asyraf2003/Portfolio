import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";
import { asset } from "../lib/asset";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src={asset("assets/coding-pov.png")}
            alt="coding pov"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10 max-w-xl">
            <p className="headtext">Hi, I'm Asyraf Mubarak</p>
            <p className="subtext">
              Full‑Stack Cloud Engineer focused on Laravel, Node.js, and modern
              frontend stacks. I design, build, and ship scalable apps on AWS
              with CI/CD, containers, and clean architecture. Recently completed
              AWS AI Practitioner, Cloud Practitioner, Solutions Architect –
              Associate, and Developer Associate specializations (Nov 2025).
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>

        {/* Grid 2 */}
        <div className="grid-default-colorr grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full relative"
          >
            <p className="flex items-end text-4xl text-gray-900">ENGINEER WITH PRECISION</p>

            {/* Tech logos (swap to your assets if needed) */}
            <Card
              style={{ rotate: "18deg", top: "6%", left: "65%" }}
              image="assets/logos/aws.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-22deg", top: "74%", left: "22%" }}
              image="assets/logos/laravel.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "10deg", top: "72%", left: "72%" }}
              image="assets/logos/docker.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "8%", left: "28%" }}
              image="assets/logos/react.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "24deg", top: "36%", left: "12%" }}
              image="assets/logos/tailwindcss.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-10deg", top: "38%", left: "56%" }}
              image="assets/logos/node.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "14deg", top: "18%", left: "80%" }}
              image="assets/logos/arch.svg"
              containerRef={grid2Container}
            />
          </div>
        </div>

        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[60%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              Based in Asia/Makassar (UTC+8). Open to fully remote collaboration
              worldwide.
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>

        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Want to launch something reliable and fast?
            </p>
            <CopyEmailButton />
          </div>
        </div>

        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[60%]">
            <p className="headtext">Tech Stack</p>
            <p className="subtext">
              I specialize in Laravel, React, Tailwind, Docker, and AWS.
              Databases I use include MariaDB & MySQL. I deploy
              with containerized pipelines, IaC, and monitored, cost‑aware cloud
              architectures.
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
