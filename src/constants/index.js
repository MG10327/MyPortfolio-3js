import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    edreamz,
    criticalmass,
    codesit,
    rapidcourt,
    Fizzy,
    slider,
    bookshelf,
    chatGPT,
    FESignup,
    QuizApp,
    AirpodsPro,
    TicTacToe,
    VidTube,
    Weather,
    TodoList,
    iPhone15Pro,
    BankApp,
    RealEstate,
    CarShow,
    Nike,
    Netflix,
    AnimationShowcase,
    Skateboardia
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

  const services = [
    {
      title: "Front-End Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Avid Learner",
      icon: backend,
    },
    {
      title: "Leader",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    }
  ];
  
  const experiences = [
    {
      title: "Junior Front End Developer",
      company_name: "E-Dreamz",
      icon: edreamz,
      iconBg: "#383E56",
      date: "January 2016 - February 2018",
      points: [
        "Contributed to and maintained over 16 websites on a regular basis, built in HTML, CSS, JavaScript and PHP",
        "Completed updates and built sites according to PhotoShop designs",
        "Performed regular maintenance on 16 sites and wrote team wide documentation for each",
        "Participated in team wide build discussions to keep project completion on track",
      ],
    },
    {
      title: "Front End Development Instructor",
      company_name: "Charlotte Codes It",
      icon: codesit,
      iconBg: "#E6DEDD",
      date: "March 2018 - February 2019",
      points: [
        "Taught a class of 20 new developers the fundamentals of HTML, CSS, and JavaScript",
        "Created Several example pages and helped people new to development understand and troubleshoot",
        "Fixed several errors for new developers and taught them to solve similar issues in the future",
        "Helped mentor 20 people from being unfamiliar with HTML, CSS, and JS to being able to use it alone.",
      ],
    },
    {
      title: "Front End Developer",
      company_name: "RapidCourt",
      icon: rapidcourt,
      iconBg: "#383E56",
      date: "February 2019 - December 2020",
      points: [
        "Maintained several websites on a small team of developers",
        "Re-designed and built the new RapidCourt Front End with React, HTML, CSS, and JavaScript",
        "Participated in Project meetings to keep project completion on track",
        "Spearheaded developing a new system to meet all departments internal needs.",
        "Participated in code reviews and providing constructive feedback to other developers."
      ],
    },
    {
      title: "Front End Developer",
      company_name: "Critical Mass at Apple",
      icon: criticalmass,
      iconBg: "#E6DEDD",
      date: "December 2020 - Present",
      points: [
        "Led several projects at Apple during Agile project splits, all built in React, HTML, CSS / SASS, and JavaScript and Handlebars",
        "Worked with a large Design, Developer, and QA team to update all Apple watch pages, create new Javascript animations, and code out pixel perfect sites.",
        "Wrote team wide documentation to help myself, more seasoned developers, and newer devs solve errors quickly and on-board others.",
        "Participated in code reviews and provided constructive feedback to other developers.",
        "Worked with a set of design standards that apply to all projects to create uniform sites."
      ],
    },
  ];

  const projects = [
    {
      name: "Skateboardia",
      description:
        "This site uses a combination of matter JS for physics and collision, GSAP for intricate skateboard trick animations, Parallax animations, and 3d objects for an immersive and interactive user experience.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "NextJS",
          color: "teal-purple-text-gradient",
        },
        {
          name: "GSAP",
          color: "purple-pink-text-gradient",
        },
        {
          name: "3D",
          color: ".red-violet-text-gradient",
        },
      ],
      image: Skateboardia,
      source_code_link: "https://github.com/MG10327/Skateboardia",
      live_demo_link: "https://skateboardia-aghx0efkk-mg10327s-projects.vercel.app/"
    },
    {
      name: "Animation Showcase",
      description:
        "This is an animation showcase that highlights transitions between videos, scroll animations, bento tilt animations, SVG animations, video heros, hover animations, text animations and more.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Vite",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "red-orange-text-gradient",
        },
        {
          name: "GSAP",
          color: "red-violet-text-gradient",
        },
      ],
      image: AnimationShowcase,
      source_code_link: "https://github.com/MG10327/AnimationShowcase",
      live_demo_link: "https://animation-showcase-drab.vercel.app/"
    },


    {
      name: "iPhone 15 Pro Release",
      description:
        "This site showcases Scroll trigger animations, fitting videos into containers, GSAP animations, and a highlights section that has a timed video carousel that users can navigate with their mouses to view the features of the iPhone 15 Pro.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Vite",
          color: "green-text-gradient",
        },
        {
          name: "Sass",
          color: "pink-text-gradient",
        },
        {
          name: "GSAP",
          color: "red-violet-text-gradient",
        },
      ],
      image: iPhone15Pro,
      source_code_link: "https://github.com/MG10327/iPhoneSite",
      live_demo_link: "https://i-phone-15-three.vercel.app/"
    },

    {
      name: "VidTube",
      description:
        "A Front End React App that uses the Youtube API to serve Youtube videos and Youtube data the same way the original website does. This project showcases use of REST API's, flex styles, reusable components, form handling, user search, and more.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Vite",
          color: "green-text-gradient",
        },
        {
          name: "Sass",
          color: "pink-text-gradient",
        },
        {
          name: "REST API Data",
          color: "orange-red-text-gradient",
        },
      ],
      image: VidTube,
      source_code_link: "https://github.com/MG10327/YoutubeClone",
      live_demo_link: "https://youtube-clone-sooty-alpha.vercel.app/"
    },

    {
      name: "Fizzy",
      description:
        "This Next.js project uses several different GSAP animations along with React Three Drei to animate 3d objects to create a vivid user experience.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "NextJS",
          color: "teal-purple-text-gradient",
        },
        {
          name: "Tailwind",
          color: "red-orange-text-gradient",
        },
        {
          name: "GSAP",
          color: "orange-red-text-gradient",
        },
      ],
      image: Fizzy,
      source_code_link: "https://github.com/MG10327/Fizzi-Landing",
      live_demo_link: "https://fizzi-landing-gray.vercel.app/"
    },

    {
      name: "Netflix",
      description:
        "A React Web App that lets users Sign up, Sign In, and Sign Out using Firebase Authentication. It renders TMDB REST API data to show movies and maps over that data to bring clickable titles that will show each movie's trailer. It's handled using a flex layout, built with Vite, and styled with SASS.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Vite",
          color: "green-text-gradient",
        },
        {
          name: "Sass",
          color: "pink-text-gradient",
        },
        {
          name: "Firebase",
          color: "orange-text-gradient",
        },
        {
          name: "REST API Data",
          color: "orange-red-text-gradient",
        },
      ],
      image: Netflix,
      source_code_link: "https://github.com/MG10327/Netflix",
      live_demo_link: "https://netflix-ebon-nine.vercel.app/"
    },
    {
      name: "Nike",
      description:
        "A single page web app that focuses on showing different Nike items on image click, reusable components flex layouts, and Tailwind styles. A recreation of one of Nike's pages.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Vite",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "red-orange-text-gradient",
        },
      ],
      image: Nike,
      source_code_link: "https://github.com/MG10327/Nike",
      live_demo_link: "https://nike-sigma-gules.vercel.app/"
    },
    {
      name: "Bank App",
      description:
        "A simple React App that advertises HooBank. Complete with reusable components, eye catching gradients, Tailwind styles, along with pixel perfect responsive flex layouts.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Vite",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "red-orange-text-gradient",
        },
      ],
      image: BankApp,
      source_code_link: "https://github.com/MG10327/BankApp",
      live_demo_link: "https://bank-app-blue-delta.vercel.app/"
    },
    {
      name: "Airpods Pro",
      description:
        "A single Page web app that uses Image sequencing, background video, text highlighting, reusable components flex layouts, and Tailwind styles. A recreation of the Apple Airpods Pro launch site.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "NextJS",
          color: "teal-purple-text-gradient",
        },
        {
          name: "Tailwind",
          color: "red-orange-text-gradient",
        },
      ],
      image: AirpodsPro,
      source_code_link: "https://github.com/MG10327/Airpods",
      live_demo_link: "https://airpodspro-teal.vercel.app/"
    },

  ];
  
  export { services, technologies, experiences, projects };