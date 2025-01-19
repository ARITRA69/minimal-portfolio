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

export const SOCIALS = [
  {
    name: "Twitter",
    href: "https://x.com/ARITRA81999",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/aritra69/",
  },
  {
    name: "Github",
    href: "https://github.com/aritra69",
  },
];

export const EXPERIENCES = [
  {
    title: "Software Engineer",
    company: {
      label: "Prodgain",
      href: "https://prodgain.com",
    },
    period: "Dec 2024 - Present",
    responsibilities: [
      "Integrating Large Language Models (Claude, OpenAI) into web applications",
      "Implementing agentic workflows for enhanced automation",
      "Developing AI-powered features and functionalities",
    ],
    techStack: ["NextJS", "React", "TailwindCSS", "Claude API", "OpenAI API"],
  },
  {
    title: "Frontend Developer",
    company: { label: "Tukidoo", href: "https://tukidoo.ai" },
    period: "Dec 2023 - Nov 2024",
    responsibilities: [
      "Led frontend development as a founding team member",
      "Established development pipeline and authentication system using Clerk",
      "Implemented secure routing architecture with public and private routes",
      "Developed dynamic page routing system with efficient props management",
      "Integrated Speech-to-Text functionality for voice recognition features",
      "Managed server-side responses using Next.js server components",
    ],
    techStack: ["NextJS", "React", "TailwindCSS", "ShadcnUI", "AWS"],
  },
  {
    title: "Next.js Developer Intern",
    company: {
      label: "Respawn Technologies",
      href: "https://respawn.co.in",
    },
    period: "Apr 2024 - Nov 2024",
    responsibilities: [
      "Payment gateway integration with Razorpay",
      "Learning in-depth TypeScript",
      "Building chrome extension to monitor network activity",
      "Creating a new project with Next.js and MongoDB",
    ],
    techStack: ["NextJS", "React", "TailwindCSS", "ShadcnUI", "MongoDB", "AWS"],
  },
  {
    title: "React Developer Intern",
    company: { label: "BTST Solutions", href: "https://btst.co.in" },
    period: "Oct 2023 - Feb 2024",
    responsibilities: [
      "Developed and implemented responsive homepage design",
      "Created reusable custom tab components following atomic design principles",
      "Implemented comprehensive advisor dashboard with group management functionality",
      "Designed and developed multi-step form system for group creation",
      "Built dynamic trade idea management system with multiple plan options",
      "Established component architecture following atomic design methodology",
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
