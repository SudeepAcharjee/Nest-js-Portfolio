import musicnextjs from "../../../../public/Images/musicnextjs.png";
import nextauth from "../../../../public/Images/nextauth.png";
import router from "../../../../public/Images/router.png";
import todo from "../../../../public/Images/todo.png";
import todo01 from "../../../../public/Images/todo01.png";
import todo02 from "../../../../public/Images/todo02.png";
import truefeedback from "../../../../public/Images/truefeedback.png";
import yourvlog from "../../../../public/Images/yourvlog.png";
import backend from "../../../../public/Images/backend.png";
import todo03 from "../../../../public/Images/todo03.png";


const data = {
  // Best Projectsimport musicnextjs from "../../../../public/Images/musicnextjs.png";import musicnextjs from "../../../../public/Images/musicnextjs.png";
  bestProjects: [
    {
      id: 1,
      title: "Truefeedbacks",
      description:
        "A truly anonymus platform where you can share your thoughts with other users.and ai suggest message also",
      url: "https://truefeedbacks.netlify.app/",
      imgSrc: truefeedback,
      skills: [
        {
          id: 1,
          name: "Next-Js",
          image: "",
        },

        {
          id: 2,
          name: "Next-Auth",
          image: "",
        },

        {
          id: 3,
          name: "chatgpt",
          image: "",
        },

        {
          id: 4,
          name: "MongoDB",
          image: "",
        },
      ],
    },

    {
      id: 2,
      title: "PlayTube (YOUTUBE + TWITTER)",
      description:
        "Developed a video hosting and micro-blogging platform using Node.js, Express.js, React.js, and MongoDB. ",
      url: "https://frontend-playtube.vercel.app/",
      imgSrc: backend,

      skills: [
        {
          id: 1,
          name: "NodeJS",
          image: "",
        },

        
        {
          id: 2,
          name: "ExpressJS",
          image: "",
        },

        {
          id: 3,
          name: "React Js",
          image: "",
        },
      ],
    },

    {
      id: 3,
      title: "Your Vlogs ",
      description:
        "An Vlog sharing application where you can share your vlogs with everyone .",
      url: "https://yourvlogs.netlify.app/",
      imgSrc: yourvlog,

      skills: [
        {
          id: 1,
          name: "ReactJS",
          image: "",
        },

        {
          id: 2,
          name: "Appwrite",
          image: "",
        },

      ],
    },

    
    {
      id: 4,
      title: "Your-todo app",
      description:
        "A todo list application with dynamic and user-friendly UI,using ReactJS and Redux.",
      url: "https://react-to-doo.netlify.app/",
      imgSrc: todo,

      skills: [
        {
          id: 1,
          name: "ReactJS",
          image: "",
        },

        {
          id: 2,
          name: "Redux",
          image: "",
        }
      ],
    },
  ],

  // All Projects
  otherProjects: [
    {
      id: 5,
      title: "todo01",
      description:
        "Password generator with dynamic and user-friendly UI,using ReactJS.",
      url: "https://unique-password-generator4.netlify.app/",
      imgSrc: todo01,
    },

    {
      id: 6,
      title: "Music Class",
      description: "Use of Aceternity UI, A Frontend Library.",
      url: "https://github.com/RupakGhosh4865/musicnextjs",
      imgSrc: musicnextjs,
    },

    {
      id: 8,
      title: "A githubFinder",
      description: "To follwers and repositories in one place.",
      url: "https://your-logogit.netlify.app/",
      imgSrc: router,
    },

    {
      id: 9,
      title: "NextAuth",
      description: "A NextJS Authentication with ResendEmail.",
      url: "https://github.com/RupakGhosh4865/nextauth",
      imgSrc:nextauth,
    },

    
    {
      id: 11,
      title: "Todo",
      description: "A TODO list application with dynamic UI,using ReactJS.",
      url: "https://rupak-to-do-app.netlify.app/",
      imgSrc: todo03,
    },


  
  ],
};

export default data;
