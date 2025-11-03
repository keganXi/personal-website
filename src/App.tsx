// React imports.
import React, { useState } from "react";

const App: React.FC = () => {
  const about: string[] = [
    "I am a dedicated software engineer with a passion for building efficient, user-focused applications. My work spans full-stack development, cloud platforms, and modern web technologies.",
    "With over 5 years of industry experience, I have contributed to diverse software projects, collaborating across multidisciplinary teams. My technical skills include Python, JavaScript, TypeScript, SQL, CI/CD, and agile development.",
    "I enjoy tackling complex challenges, mentoring peers, and staying at the forefront of technology advancements. My portfolio showcases my commitment to code quality, scalability, and impactful results.",
  ];
  return (
    <div className="p-4 lg:px-[20%] lg:py-12">
      <section>
        <header className="pb-12">
          <h1 className="text-[23px] font-semibold">Kegan Overberg</h1>
          <h3 className="font-semibold text-[23px] text-gray-500">
            Software Engineer
          </h3>
        </header>

        <div className="text-sm space-y-6 lg:w-[350px] text-gray-700 font-normal">
          {about.map((parag) => (
            <p>{parag}</p>
          ))}
        </div>

        <div className="pt-6">
          <button className="rounded-full px-4 py-1.5 text-sm bg-black text-white">
            Get in Touch
          </button>
        </div>

        <div className="pt-8 text-gray-400 text-sm space-y-2">
          <a
            href="https://x.com/KeganDev"
            className="cursor-pointer block"
            target="_blank"
          >
            Twitter
          </a>
          <a
            href="https://substack.com/@kegandev?"
            className="cursor-pointer block"
            target="_blank"
          >
            Substack
          </a>
          <a
            href="https://www.linkedin.com/in/kegan-o-aa9575173/"
            target="_blank"
            className="cursor-pointer block"
          >
            Linkedin
          </a>
        </div>
      </section>
    </div>
  );
};

export default App;
