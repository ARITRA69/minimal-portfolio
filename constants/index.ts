import {
  FaBuilding,
  FaCommentDots,
  FaCss3Alt,
  FaHandHoldingHeart,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiAuth0,
  SiExpress,
  SiFirebase,
  SiJsonwebtokens,
  SiNestjs,
  SiNextdotjs,
} from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiTypescript } from "react-icons/si";

export const LINKS = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Blogs",
    href: "/blogs",
  },
];

export const MINIMAP_LINKS = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Achievements",
    href: "#achievements",
  },
  {
    label: "Skills",
    href: "#skills",
  },

  {
    label: "Experiences",
    href: "#experiences",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Contact",
    href: "#contact",
  },
  {
    label: "Socials",
    href: "#socials",
  },
];

export const ACHIEVEMENTS = [
  {
    count: 1,
    label: "Years of Experience",
  },
  {
    count: 3,
    label: "Companies",
  },
  {
    count: 7,
    label: "Projects",
  },
];

export const TECHNICAL_SKILLS = [
  {
    name: "HTML",
    icon: FaHtml5,
  },
  {
    name: "CSS",
    icon: FaCss3Alt,
  },
  {
    name: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    name: "React",
    icon: FaReact,
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
  },
  {
    name: "Express.js",
    icon: SiExpress,
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
  },
  {
    name: "Firebase",
    icon: SiFirebase,
  },
  {
    name: "Nest.js",
    icon: SiNestjs,
  },
  {
    name: "Next-Auth",
    icon: SiAuth0,
  },
  {
    name: "JWT",
    icon: SiJsonwebtokens,
  },
];

export const SOFT_SKILLS = [
  {
    name: "Has it all",
    icon: FaCommentDots,
  },
];

export const LANGUAGE_SKILLS = ["English", "Hindi", "Bengali"];

export const EXPERIENCES = [
  {
    title: "Next.js Developer Intern",
    company: {
      label: "Respawn Technologies",
      href: "https://respawn.co.in",
    },
    period: "Apr 2024 - Present",
    responsibilities: [
      "Payment gateway integration with Razorpay",
      "Learning in-depth TypeScript",
      "Building chrome extension to monitor network activity",
      "Creating a new project with Next.js and MongoDB",
    ],
    techStack: ["NextJS", "React", "TailwindCSS", "ShadcnUI", "MongoDB"],
  },
  {
    title: "React Developer",
    company: { label: "Tukidoo", href: "https://tukidoo.ai" },
    period: "Dec 2023 - Present",
    responsibilities: [
      "I’m leading the frontend development as a founding team member of Tukidoo.",
      "Setting up development pipeline.",
      "Handling Authentication with Clerk",
      "Defining public and private routes",
      "All pages and dynamic routes with props passing.",
      "Implemented Speech to Text to recognize user’s voice.",
      "Using next/server to handle responses.",
    ],
    techStack: ["NextJS", "React", "TailwindCSS", "ShadcnUI", "AWS"],
  },
  {
    title: "React Developer Intern",
    company: { label: "BTST Solutions", href: "https://btst.co.in" },
    period: "Oct 2023 - Feb 2024",
    responsibilities: [
      "Developing product Home Page.",
      "Custom Tab atom",
      "Advisor Login and Dashboard with Create Group.",
      "Creating Group Page with multi step form.",
      "Each Group with option to create multiple trade idea.",
      "Form to add trade plans.",
      "Creating Atom and Molecular Structure.",
    ],
    techStack: ["NextJS", "React", "TailwindCSS"],
  },
];

export const PROJECTS = [
  {
    coverImage: "/pertinant.png",
    title: "Pertinant.net",
    slug: "pertinant",
    description: "Monetize your knowledge and daily interactions",
    techStack: ["NextJS", "React", "TailwindCSS", "ShadcnUI", "MongoDB"],
    href: "https://pertinant.net",
  },
  {
    coverImage: "/bulletvisa.png",
    title: "BulletVisa.com",
    slug: "bulletvisa",
    description: "Get Singapore Visa for Indians in 3 working days",
    techStack: [
      "NextJS",
      "React",
      "TailwindCSS",
      "ShadcnUI",
      "MongoDB",
      "Vercel",
      "CCAvenue",
      "BlueDart",
    ],
    href: "https://www.bulletvisa.com/",
  },
  {
    coverImage: "/chatweb.png",
    title: "ChatWeb",
    slug: "chatweb",
    description: "Chat with any website",
    techStack: [
      "NextJS",
      "React",
      "TailwindCSS",
      "ShadcnUI",
      "Upstash",
      "Redis",
      "Vector",
      "Vercel",
    ],
    href: "https://chatweb.aritra69.com/",
    sourceCode: "https://github.com/ARITRA69/chatweb",
  },
];
