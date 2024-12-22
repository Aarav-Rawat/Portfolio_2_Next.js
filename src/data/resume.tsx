import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";


export const DATA = {

  name: "Aarav",
  initials: "AR",
  url: "https://linktr.ee/AaravRawat",
  location: "Dill, India",
  locationLink: "https://www.google.com/maps/place/NewDelhi",
  description:
    "On a journey to becoming a Product Builder.Open to Internship/Freelance",
  summary:
    "I'm a pre final-year [Computer science](/#education) college student &  [Bussines student](/#education) from school, Who is passionate about [Web3](/#) & [Starup-Domain](/#). In this journey i build [Freelance projects](/#projects). Currently i'm Mastering [Web Dev](/#skills) • Learning [DevOps](/#skills) • Passionate for [Web3](/#skills)",

  avatarUrl: "/me.jpg",

  skills: [
    "DSA",
    "OOPs",
    "STL",
    "DBMS",
    "System Design",
    "C",
    "C++",
    "JavaScript",
    "TypeScript",
    "ReactJS",
    "NextJS",
    "ExpressJS",
    "NodeJS",
    "HonoJS",
    "TailwindCSS",
    "Aceternity UI",
    "Shadcn UI",
    "MongoDB",
    "PostgreSQL",
    "NeonDB",
    "AivenDB",
    "AWS EC2 S3",
    "Cloudflare Workers",
    "Docker",
    "Git/GitHub",
    "Postman",
    "Prisma",
    "Zod",
    "TurboRepo",
    "NextAuth"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "aaravrawat22505@gmail.com",
    tel: "+91 8076408543",
    social: {
      X: {
        name: "X",
        url: "https://x.com/TheAaravRawat",
        icon: Icons.x,

        navbar: true,
      },
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

      Email: {
        name: "Send Email",
        url: "#mailto:aaravrawat22505@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
      socialHandle: {
        name: "linktree",
        url: "https://linktr.ee/AaravRawat",
        icon: Icons.email,
        navbar: false
      }
    },
  },

  work: [
    {
      company: "Freelancer",
      href: "/#projects",
      badges: [],
      location: "Remote",
      title: "Frontend Engineer",
      logoUrl: "/free.webp",
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
      degree: "WebDev, DevOps & Web3.0",
      logoUrl: "/course.png",
      start: "2024",
      end: "Present",
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
      school: "Indra Gandhi University",
      href: "",
      degree: "Computer Science",
      logoUrl: "/college.jpeg",
      start: "2023",
      end: "2026",
    },
    {
      school: "School",
      href: "",
      degree: "Finance & Business Studies",
      logoUrl: "/school.jpg",
      start: "2021",
      end: "2023",
    }
  ],
  projects: [

    {
      title: "Wallet",
      href: "https://github.com/Aarav-Rawat/Paytm",
      dates: "Dec 2024 - Present",
      active: true,
      description:
        "Created a wallet to send and receive money with number. Add to wallet option. Used turporepo to manage the 2nd backenf of ban webhook",
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
      title: "DailyCombos - Freelance",
      href: "https://medium-aarav.vercel.app/",
      dates: "Oct 2024",
      active: true,
      description:
        "Developed a UI website for a client, on trending tap to earn crypto. Used Nextjs for seo optimization as user asked for",
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
      title: "Client Portfolio - Freelance",
      href: "https://kirmada.vercel.app/",
      dates: "Dec 2024",
      active: true,
      description:
        "",
      technologies: [
        "Next.js",
        "Aceternity UI",
        "Shadcn UI",
        "Typescript",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://kirmada.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Aarav-Rawat/Naveen_Portfolio",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/kirmada.png",
      video: "",
    },

    {
      title: "Medium",
      href: "https://medium-aarav.vercel.app/",
      dates: "Nov 2024",
      active: true,
      description:
        "",
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
      title: "Verzatile",
      href: "https://verzatile.onrender.com/",
      dates: "Aug - Sep 2024",
      active: true,
      description:
        "",
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

  ],

  hackathons: [

  ],

} as const;
