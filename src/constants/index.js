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
    slider,
    bookshelf,
    chatGPT,
    FESignup,
    QuizApp,
    TicTacToe,
    VidTube,
    Weather,
    TodoList,
    iPhone15Pro
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
      title: "Junior Full Stack Developer",
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
      title: "Full Stack Developer",
      company_name: "RapidCourt",
      icon: rapidcourt,
      iconBg: "#383E56",
      date: "February 2019 - December 2020",
      points: [
        "Maintained several ColdFusion based websites and systems on a small team of developers",
        "Re-designed and built the new RapidCourt Front End with HTML, CSS, and JavaScript",
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
        "Led several projects at Apple during Agile project splits, all built in HTML, CSS / SASS, JavaScript, and Handlebars",
        "Worked with a large Design, Developer, and QA team to update all Apple watch pages, create new Javascript animations, and code out pixel perfect sites.",
        "Wrote team wide documentation to help myself, more seasoned developers, and newer devs solve errors quickly and on-board others.",
        "Participated in code reviews and provided constructive feedback to other developers.",
        "Worked with a set of design standards that apply to all projects to create uniform sites."
      ],
    },
  ];

  const projects = [
    {
      name: "VidTube",
      description:
        "A Front End React App that uses the Youtube API to serve Youtube videos and Youtube data the same way the original website does.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "vite",
          color: "green-text-gradient",
        },
        {
          name: "sass",
          color: "pink-text-gradient",
        },
      ],
      image: VidTube,
      source_code_link: "https://github.com/MG10327/YoutubeClone",
      live_demo_link: "https://youtube-clone-sooty-alpha.vercel.app/"
    },
    {
      name: "iPhone 15 Pro Release",
      description:
        "This site showcases Scroll trigger animations, fitting videos into containers, GSAP animations, and a highlights section that has a timed video carousel with that users can navigate with their mouses to view the features of the iPhone 15 Pro.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "vite",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: iPhone15Pro,
      source_code_link: "https://github.com/MG10327/iPhoneSite",
      live_demo_link: "https://i-phone-15-three.vercel.app/"
    },
    {
      name: "ChatGPT Remake",
      description:
        "A React Web application that enables users to request and receive detailed responses from the OpenAI API. The same way the original Chat GPT functions.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "vite",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: chatGPT,
      source_code_link: "https://github.com/MG10327/ChatGPTClone",
      live_demo_link: "https://chat-gpt-clone-vert-one.vercel.app/"
    },
    {
      name: "Quiz App",
      description:
        "A small 5 question Quiz App that checks correct and incorrect answers, then scores the user after they finish.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "vite",
          color: "green-text-gradient",
        },
        {
          name: "sass",
          color: "pink-text-gradient",
        },
      ],
      image: QuizApp,
      source_code_link: "https://github.com/MG10327/QuizApp-FrontEnd/tree/main",
      live_demo_link: "https://quiz-app-front-6oldyx7zz-mg10327s-projects.vercel.app/"
    },
    {
      name: "Basic Slider Web Page",
      description:
        "A single page web app with a slider that has play / pause options for video.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "vite",
          color: "green-text-gradient",
        },
        {
          name: "sass",
          color: "pink-text-gradient",
        },
      ],
      image: slider,
      source_code_link: "https://github.com/MG10327/BasicWebPage-FrontEnd",
      live_demo_link: "https://basic-web-page-front-end.vercel.app/"
    },
    {
      name: "Bookshelf App",
      description:
        "A React Web App that lets users lookup books using an API that allows saving, rating, and leaving comments. This app also supports user registration and login functionality with authentication and data protection.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "sass",
          color: "pink-text-gradient",
        },
      ],
      image: bookshelf,
      source_code_link: "https://github.com/MG10327/Bookshelf-App/",
      live_demo_link: "https://bookshelf-app-jet.vercel.app/"
    },
    {
      name: "Tic Tac Toe",
      description:
        "A simple React Tic Tac Toe application that records user inputs and decides a winner based on a set of Javascript combinations.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "vite",
          color: "green-text-gradient",
        },
        {
          name: "sass",
          color: "pink-text-gradient",
        },
      ],
      image: TicTacToe,
      source_code_link: "https://github.com/MG10327/TicTacToe-FrontEnd/tree/main",
      live_demo_link: "https://tic-tac-toe-front-end-sigma.vercel.app/"
    },
    {
      name: "Front End Sign Up Form",
      description:
        "A basic React Front End only sign up form.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "vite",
          color: "green-text-gradient",
        },
        {
          name: "sass",
          color: "pink-text-gradient",
        },
      ],
      image: FESignup,
      source_code_link: "https://github.com/MG10327/SignUpForm-FrontEnd/tree/main",
      live_demo_link: "https://sign-up-form-front-end.vercel.app/"
    },
    {
      name: "Weather App",
      description:
        "A weather app that uses the Open Weather API to show the weather of different places on earth.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "vite",
          color: "green-text-gradient",
        },
        {
          name: "sass",
          color: "pink-text-gradient",
        },
      ],
      image: Weather,
      source_code_link: "https://github.com/MG10327/WeatherApp/tree/main",
      live_demo_link: "https://weather-app-murex-alpha-98.vercel.app/"
    },
    {
      name: "Todo List",
      description:
        "This Todo list manages the state of items, adds and deletes, and uses local storage to keep the user's data after they leave.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "vite",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: TodoList,
      source_code_link: "https://github.com/MG10327/TodoList",
      live_demo_link: "https://todo-list-three-vert.vercel.app/"
    },
  ];
  
  export { services, technologies, experiences, projects };