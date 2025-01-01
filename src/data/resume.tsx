import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {

  name: "Aarav",
  initials: "AR",
  url: "https://linktr.ee/AaravRawat",
  location: "Dill, India",
  locationLink: "https://www.google.com/maps/place/NewDelhi",
  description:
    "On a journey to becoming a Product Builder.Open to Internship/Freelance",
  summary:
    "I'm a [Computer science & Bussines student](/#education), Who is passionate about [Web3 & Starup-Domain](/#). In this journey i build [Freelance projects & Products](/#projects). Currently i'm [Mastering Web Dev • Learning DevOps • Passionate for Web3](/#skills)",

  avatarUrl: "/me.jpg",

  skills: [
    "DSA",
    "OOPs",
    "STL",
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
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "aaravrawat22505@gmail.com",
    tel: "+91 8076408543",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Aarav-Rawat",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/aaravrawat/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/TheAaravRawat",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#mailto:aaravrawat22505@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
      socialHandle: {
        url: "https://linktr.ee/AaravRawat"
      }
    },
  },

  work: [
    {
      company: "Freelance",
      href: "/#projects",
      badges: [],
      location: "Remote",
      title: "Frontend Engineer",
      logoUrl: "",
      start: "2024",
      end: "Present",
      description:
        "",
    },
  ],
  education: [
    {
      school: "Indra Gandhi University",
      href: "",
      degree: "Computer Science",
      logoUrl: "",
      start: "",
      end: "",
    },
    {
      school: "CRSPS",
      href: "",
      degree: "Finance & Business Studies",
      logoUrl: "",
      start: "",
      end: "",
    }
  ],
  projects: [

    {
      title: "Paytm",
      href: "https://github.com/Aarav-Rawat/Paytm",
      dates: "Dec 2024 - Present",
      active: true,
      description:
        "",
      technologies: [
        "Next.js",
        "Typescript",
        "Docker",
        'Express.js',
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Aarav-Rawat/Paytm",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "",
    },

    {
      title: "DailyCombos - Freelance",
      href: "https://medium-aarav.vercel.app/",
      dates: "",
      active: true,
      description:
        "",
      technologies: [
        "React.js",
        "Hono.js",
        "CloudFlare Workers",
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
      image: "",
      video: "",
    },

    {
      title: "Medium",
      href: "https://medium-aarav.vercel.app/",
      dates: "Nov 2024 - Dec 2024",
      active: true,
      description:
        "",
      technologies: [
        "React.js",
        "Hono.js",
        "CloudFlare Workers",
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
      image: "",
      video: "",
    },

    {
      title: "Client Portfolio - Freelance",
      href: "https://medium-aarav.vercel.app/",
      dates: "",
      active: true,
      description:
        "",
      technologies: [
        "React.js",
        "Hono.js",
        "CloudFlare Workers",
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
      image: "",
      video: "",
    },
    
  ],

  hackathons: [

  ],

} as const;
