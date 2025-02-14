import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";


export const DATA = {

  name: "Aarav",
  initials: "AR",
  url: "https://linktr.ee/AaravRawat",
  location: "Dill, India",
  locationLink: "https://www.google.com/maps/place/NewDelhi",
  description:
    "On a journey to becoming a Product Builder. Open to Job/Freelance",
  summary:
    "I'm a [Developer](/#projects), Who is passionate about [Tech](/#skills).I have hands-on experience building full-stack applications using [Next.js, React, Express](/#skills), and databases like [PostgreSQL & MongoDB](/#skills). Additionally, I have worked with [APIs, UI libraries, and AI tools](/#skills).Throughout this journey i build [Client-Projects](/#projects) gaining hands-on [Experience](/#skills) with diverse [Technologies](/#skills) Also have a strong foundation in DSA, OOPs, and problem-solving.I am continiously adapting to new [Environment](/#skills).",

  avatarUrl: "/me.jpg",

  skills: [
    "JavaScript",
    "TypeScript",
    "ReactJS",
    "NextJS",
    "ExpressJS",
    "NodeJS",
    "HonoJS",
    "TailwindCSS",
    "MongoDB",
    "PostgreSQL",
    "Cloudflare Workers",
    "Docker",
    "Git/GitHub",
    "Postman",
    "Prisma",
    "Zod",
    "TurboRepo",
    "NextAuth",
    "DSA",
    "OOPs",
    "STL",
    "DBMS",
    "System Design",
    "C",
    "C++"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "aaravrawat22505@gmail.com",
    tel: "+91 8076408543",
    social: {
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/aaravrawat/",
        icon: Icons.linkedin,

        navbar: true,
      },
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Aarav-Rawat",
        icon: Icons.github,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/TheAaravRawat",
        icon: Icons.x,

        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "#mailto:aaravrawat22505@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
      socialHandle: {
        name: "linktree",
        url: "https://bento.me/AaravRawat",
        icon: Icons.email,
        navbar: false
      }
    },
  },

  work: [
    {
      company: "OpticalWala",
      href: "/#projects",
      badges: [],
      location: "Remote",
      title: "Developer",
      logoUrl: "/optical.png",
      start: "2025",
      end: "Present",
      description:
        "",
    },
    {
      company: "Freelancer",
      href: "/#projects",
      badges: [],
      location: "Remote",
      title: "Full Stack Engineer",
      logoUrl: "/free.png",
      start: "2024",
      end: "Present",
      description:
        "",
    },
  ],
  education: [
    {
      school: "100xDevs",
      href: "",
      degree: "WebDev & DevOps",
      logoUrl: "/course.png",
      start: "2024",
      end: "Present",
    },
    {
      school: "Indira Gandhi University",
      href: "",
      degree: "Computer Science",
      logoUrl: "/college.jpeg",
      start: "",
      end: "",
    },
    {
      school: "MySirG",
      href: "",
      degree: "C, C++ & DSA",
      logoUrl: "/sirg.png",
      start: "2023",
      end: "2024",
    },
    
    {
      school: "School",
      href: "",
      degree: "Finance & Business Studies",
      logoUrl: "/school.jpg",
      start: "",
      end: "",
    }
  ],
  projects: [
    {
      title: "Wallet",
      href: "https://github.com/Aarav-Rawat/Paytm",
      dates: "Dec 2024 - Present",
      active: true,
      description:
        "Developed a digital wallet application enabling users to send and receive money using phone numbers, with an Add to Wallet feature for seamless transactions. Integrated TurboRepo to manage the secondary backend handling bank webhooks efficiently. Implemented secure user authentication with NextAuth and utilized AivenDB for scalable and efficient database management.",
      technologies: [
        "Next.js",
        "Docker",
        "CI/CD - Github Actions",
        "PostgreSQL",
        "TurboRepo",
        'Express.js',
        "Prisma",
        "Typescript",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Aarav-Rawat/Paytm",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/asspay.png",
      video:
        "",
    },

    {
      title: "Verzatile",
      href: "https://verzatile.onrender.com/",
      dates: "Oct - Sep 2024",
      active: true,
      description:
        "A full-stack shopping platform with comprehensive user and seller features. Users can register, log in, and log out securely, Implemented authentication and authorization mechanisms. Key functionalities include adding products to the cart, placing orders, viewing order history, and editing personal information. Additionally, users can opt to become sellers, enabling them to list and sell their products on the platform. The application ensures a seamless shopping experience with a focus on security and user convenience.",
      technologies: [
        "React.js",
        'Express.js',
        "Node.js",
        "MongoDb Atlas",
        "Postman",

        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://verzatile.onrender.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Aarav-Rawat/E-com_MERN",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/verzatile.png",
      video: "",
    },
  
    

    {
      title: "Sundown Studio",
      href: "https://studiossundown.vercel.app/",
      dates: "Dec 2024",
      active: true,
      description:
        "I have created a premium UI website using only HTML, CSS, and JavaScript. The design focuses on a modern, sleek aesthetic with responsive layouts and intuitive user experience elements",
      technologies: [
       "HTML",
       "CSS",
       "JavaScript",
      ],
      links: [
        {
          type: "Website",
          href: "https://studiossundown.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Aarav-Rawat/SundownStudio",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/ss.png",
      video: "",
    },
  
    {
      title: "Crypto",
      href: "https://medium-aarav.vercel.app/",
      dates: "Oct 2024",
      active: true,
      description:
        "Developed a UI website for a client focused on the trending Tap to Earn Crypto concept. Leveraged Next.js for SEO optimization to attract users and enhance discoverability. The platform allowed users to explore content, understand the mission, and discover solutions to earn more crypto. Development was paused but will be resumed in the future with plans to further enhance its SEO and features.Developed a UI website for a client, on trending tap to earn crypto. Used Nextjs for seo optimization as user asked for",
      technologies: [
        "Next.js",
        "Typescript",
        "Aceternity UI",
        "Shadcn UI",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://dailycombos.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Aarav-Rawat/HamsterCard",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/dailyCombos.png",
      video: "",
    },

    {
      title: "Medium",
      href: "https://medium-aarav.vercel.app/",
      dates: "Nov 2024",
      active: true,
      description:
        "Developed a full-stack blogging platform deployed on a serverless backend powered by Cloudflare Workers, enhancing performance by 50–60%. Utilized AivenDB for efficient database management and seamless scaling. Features include user account creation, blog posting, and optimized SEO with Next.js for improved discoverability.",
      technologies: [
        "React.js",
        "Hono.js",
        "CloudFlare Workers",
        "AivenDB",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://medium-aarav.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Aarav-Rawat/Medium",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/medium.png",
      video: "",
    },

    
    {
      title: "Video Player",
      href: "https://verzatile.onrender.com/",
      dates: "April 2024",
      active: true,
      description:
        "Developed a video player that streams real-time videos, displaying likes, subscribers, and comments dynamically. Integrated YouTube API for fetching video data and designed a user-friendly frontend UI. The platform features a recommended section for personalized video suggestions, along with categorized sections such as Home, Gaming, and Sports for seamless navigation and an enhanced user experience.",
      technologies: [
        "React.js",
        "YouTube API",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://fakevideoplayer.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Aarav-Rawat/youtube_UI_react",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/videoplayer.png",
      video: "",
    },




  

  ],

  hackathons: [

  ],

} as const;
