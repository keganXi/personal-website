// React imports.
import React from "react";

interface Socials {
  title: string;
  url: string;
  icon: string;
}

const App: React.FC = () => {
  const about: string[] = [
    "I am a dedicated software engineer passionate about building efficient, user-focused applications, specializing in backend development. I leverage modern web technologies across the full stack to deliver scalable and maintainable solutions.",
    "With over 5 years of industry experience, I have contributed to diverse software projects, collaborating across multidisciplinary teams. My technical skills include Python, JavaScript, TypeScript, SQL, CI/CD, and agile development",
    "This enable me to tackle complex problems that have a tangible impact on the products I work on, strengthening my ability to deliver meaningful results independently and efficiently.",
  ];
  const navArr = [
    {
      title: "Home",
      url: "",
    },

    {
      title: "Insights",
      url: "",
    },
  ];
  const socialsArr: Socials[] = [
    {
      title: "GitHub",
      url: "https://github.com/keganXi/",
      icon: "",
    },
    {
      title: "Twitter",
      url: "https://x.com/KeganDev",
      icon: "",
    },
    {
      title: "Substack",
      url: "https://substack.com/@kegandev?",
      icon: "",
    },
    {
      title: "Linkedin",
      url: "https://www.linkedin.com/in/kegan-o-aa9575173/",
      icon: "",
    },
  ];

  return (
    <div className="p-4">
      <nav className="w-full flex space-x-10 lg:px-[20%] fixed">
        {navArr.map((value) => (
          <div className="hover:border-b-4  hover:border-slate-200 cursor-pointer duration-100">
            <a href={value.url} className="text-slate-400 text-sm">
              {value.title}
            </a>
          </div>
        ))}
      </nav>
      <section className="lg:px-[20%] lg:pt-20">
        <header className="pb-12">
          <h1 className="text-[23px] font-semibold">Kegan Overberg</h1>
          <h3 className="font-semibold text-[23px] text-slate-400">
            Software Engineer
          </h3>
        </header>

        <div className="text-sm space-y-6 lg:w-[350px] font-normal">
          {about.map((parag) => (
            <p>{parag}</p>
          ))}
        </div>

        <div className="pt-6 space-x-3">
          <a
            href="https://calendly.com/arcbuild/arc-build-discovery-call"
            target="_blank"
          >
            <button className="rounded-full px-4 py-1.5 text-sm bg-black text-white">
              Book a Call
            </button>
          </a>
          <a href="mailto:overbergsoftware@gmail.com">
            <button className="rounded-full px-4 py-1.5 text-sm bg-slate-200 text-black">
              Get in Touch
            </button>
          </a>
        </div>

        <div className="pt-8 text-slate-400 text-sm space-y-2">
          {socialsArr.map((value) => (
            <div>
              <a
                href={value.url}
                className="cursor-pointer block"
                target="_blank"
              >
                {value.title}
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default App;
