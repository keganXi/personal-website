// React imports.
import React, { useState } from 'react';

// Images imports.
import PersonalWebsite from "./images/personal_website.png";
import Twitter from "./images/twitter.svg";
import Linkedin from "./images/linkedin.svg";
import Github from "./images/github.svg";

// Component imports.
import ListOfSocials from "./components/ListOfSocials";

interface AppState {
  intro: {
    greeting: string,
    name: string,
    summary: string,
    technologies: string,
  }
  socials: {
    icon: string,
    url?: string
  }[]
}

const App: React.FC = () => {
  const [ intro, setIntro ] = useState<AppState["intro"]>(
    {
      greeting: "Hi, my name is",
      name: "Kegan Overberg",
      summary: "Software Engineer with 3 years of professional experience dedicated to improving skills through hands-on learning.",
      technologies: "Django | Python | PostgreSQL | JavaScript | TypeScript | ReactJS | HTML & CSS"
    }
  );
  const [ social, setSocial ] = useState<AppState["socials"]>([
    {
      icon: Twitter,
      url: "https://twitter.com/Kegan90216382"
    },
    {
      icon: Linkedin,
      url: "https://www.linkedin.com/in/kegan-overberg-aa9575173"
    },
    {
      icon: Github,
      url: "https://github.com/keganXi"
    }
  ]);

  return (
    <div className="bg-secondary-black sm:px-16 h-screen">
      
      {/* social media links */}
      <ListOfSocials socials={social}/>

      <div className="font-semibold text-white sm:py-16 px-4 sm:px-0 sm:pl-10 sm:flex">
        <div className="w-full pt-16">
          <span className="text-xl">{ intro.greeting }</span><br></br>
          <h1 className="text-xxl">{ intro.name }</h1>
          <p className="text-xl text-primary-purple break-words">{ intro.summary }</p><br></br>
          <p>{ intro.technologies }</p>
        </div>

        <div className="w-full justify-center hidden sm:flex">
          <div className="p-7 rounded-lg bg-transparent opacity-30">
            <img src={ PersonalWebsite } alt="developer image" className="w-[400px] h-[400px]"/>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default App;
