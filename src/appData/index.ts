// Data for portfolio
import {
  ExpressjsIcon,
  JavaScriptIcon,
  NestjsIcon,
  NextjsIcon,
  NodejsIcon,
  ReactIcon,
  SocketIcon,
  TailwindCSS,
  TypescriptIcon,
  HTMLIcon,
  CSSIcon,
  JScon,
  PythonIcon,
  TailwindIcon,
  React1Icon,
  ReduxIcon,
  TSIcon,
  NextIcon,
  FlaskIcon,
  StripeIcon,
  NodeIcon,
  MongodbIcon,
  MuiIcon,
  AngularIcon,
  ExpressIcon,
  FirebaseIcon,
  PostgerIcon,
  MYSQLIcon,
  PrismaIcon,
  GraphqlIcon,
  ReactNativeIcon,
  JenkinsIcon,
  DockerIcon,
  FigmaIcon,
  ChatgptIcon,
  APIIcon,
  AppDevelopmentIcon,
  FullStackDevelopmentIcon,
  DevopsIcon,
  SEOIcon,
  WebDevelopmentIcon,
} from '../utils/icons'
import { Codepen, Facebook, GithubIcon, Instagram, LinkedIn, X, MailIcon } from '@/utils/icons'
import Image from 'next/image';

// Project Data
export const projects = [
  {
    priority: 1,
    title: 'Project Alpha',
    shortDescription:
      'A groundbreaking project that revolutionizes the way we approach technology. Built with cutting-edge tools for maximum efficiency, it sets new industry standards.',
    cover:
      'https://images.unsplash.com/photo-1585282263861-f55e341878f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    livePreview: 'https://example.com/alpha',
    type: 'Client Work 🙍‍♂️',
    siteAge: '1 month old',
  },
  {
    priority: 2,
    title: 'Project Beta',
    shortDescription:
      'Project Beta is a static technical blog site built with GatsbyJS. I share tips on topics like building reusable components in React, explaining JavaScript methods and concepts, Node.js scripts, and more.',
    cover:
      'https://plus.unsplash.com/premium_photo-1663040328859-48bddaa9dfeb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    livePreview: 'https://example.com/beta',
    visitors: '8K Visitors',
    earned: '$400 Earned',
  },
  {
    priority: 3,
    title: 'Project Epsilon',
    shortDescription:
      'A collection of engaging coding challenges designed to help developers improve their ReactJS skills by writing functional business logic. Your task is to make it functional by writing business logic, to improve your frontend skills',
    cover:
      'https://plus.unsplash.com/premium_photo-1661700152890-931fb04588e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

    type: 'Free 🔥',
    livePreview: 'https://example.com/epsilon',
    githubLink: 'https://github.com/example/ReactJS-Coding-Challenges',
    githubStars: '40 Stars',
    numberOfSales: '138 Sales',
  },
  {
    priority: 4,
    title: 'Ejucationzz',
    shortDescription:
      'Ejucationzz is a directory site I created for myself using Next.js. On Ejucationzz, you can find free and paid online and offline courses available in Pakistan. 14 academies and 12 main categories, each with subcategories, have been listed. Ejucationzz is a directory site I created for myself using Next.js. On Ejucationzz, you can find free and paid online and offline courses available in Pakistan. 14 academies and 12 main categories, each with subcategories, have been listed.',
    cover:
      'https://images.unsplash.com/photo-1527334919515-b8dee906a34b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    type: 'New 🔥',
    livePreview: 'https://example.com/Ejucationzz',
    siteAge: '4 months old',
    visitors: '100 Visitors',
    githubLink: '',
    earned: '',
  },
]

// Service Data
export const serviceData = [
  {
    icon: WebDevelopmentIcon,
    title: 'Web Development',
    shortDescription: 'Building modern and responsive user interfaces with any language.',
  },
  {
    icon: FullStackDevelopmentIcon,
    title: 'Full Stack Development',
    shortDescription: 'Creating dynamic and interactive web applications using various languages.',
  },
  {
    icon: AppDevelopmentIcon,
    title: 'App Development',
    shortDescription: 'Creating mobile apps with native performance using modern frameworks and tools.',
  },
  {
    icon: APIIcon,
    title: 'API Integration',
    shortDescription: 'Integrating reliable APIs to enhance application functionality and data communication.',
  },
  {
    icon: DevopsIcon,
    title: 'DevOps & Infrastructure',
    shortDescription: 'Managing deployments, servers, and CI/CD pipelines for efficient development workflows.',
  },
  {
    icon: SEOIcon,
    title: 'SEO Services',
    shortDescription: 'Improving search visibility with optimized content and technical SEO strategies.',
  },
]

// Skill List
export const skillList = [
  {
    name: 'JavaScript',
    icon: JavaScriptIcon,
  },
  {
    name: 'TypeScript',
    icon: TypescriptIcon,
  },
  {
    name: 'React.js',
    icon: ReactIcon,
  },
  {
    name: 'Next.js',
    icon: NextjsIcon,
  },
  {
    name: 'Node.js',
    icon: NodejsIcon,
  },
  {
    name: 'Express.js',
    icon: ExpressjsIcon,
  },
  {
    name: 'Nest.js',
    icon: NestjsIcon,
  },
  {
    name: 'Socket.io',
    icon: SocketIcon,
  },
]

export const footerLinks = [
  { title: 'About', href: '#' },
  { title: 'Projects', href: '#projects' },
  { title: 'Testimonials', href: '#testimonials' },
  {
    title: 'Blogs',
    href: '#blogs',
  },
  {
    title: 'Services',
    href: '#services',
  },
  {
    title: 'Contact',
    href: '#contact',
  },
]

export const themes = [
  {
    name: 'Light',
    colors: ['#fff', '#0d1a3b', '#dbe3f7', '#0d1a3b', '#5565e8'],
  },
  {
    name: 'Dark',
    colors: ['#301934', '#a394a8', '#3d2942', '#d0b0e6', '#b18cd9'],
  },
  {
    name: 'Aqua',
    colors: ['#b2e4e8', '#004a55', '#00c1d4', '#004a55', '#ff6f61'],
  },
  {
    name: 'Retro',
    colors: ['#fff3e0', '#6d4c41', '#ffcc80', '#5d4037', '#ffab40'],
  },
]

export const languages = ['English', 'Sinhala']

export const Skill_data = [
    {
        skill_name: "Html 5",
        Image: HTMLIcon,
        width: 80,
        height: 80,
    },
    {
        skill_name: "Css",
        Image: CSSIcon,
        width: 80,
        height: 80,
    },
    {
        skill_name: "Java Script",
        Image: JScon,
        width: 65,
        height: 65,
    },
    {
        skill_name: "Python",
        Image: PythonIcon,
        width: 80,
        height: 80,
    },
    {
        skill_name: "Tailwind Css",
        Image: TailwindIcon,
        width: 80,
        height: 80,
    },
    {
        skill_name: "React",
        Image: React1Icon,
        width: 80,
        height: 80,
    },
    {
        skill_name: "Redux",
        Image: ReduxIcon,
        width: 80,
        height: 80,
    },
    {
        skill_name: "Type Script",
        Image: TSIcon,
        width: 80,
        height: 80,
    },
    {
        skill_name: "Next js 13",
        Image: NextIcon,
        width: 80,
        height: 80,
    },
    {
        skill_name: "Flask",
        Image: FlaskIcon,
        width: 80,
        height: 80,
    },
    {
        skill_name: "Stripe Payment",
        Image: StripeIcon,
        width: 80,
        height: 80,
    },
    {
        skill_name: "Node js",
        Image: NodeIcon,
        width: 80,
        height: 80,
    },
    {
        skill_name: "Mongo db",
        Image: MongodbIcon,
        width: 40,
        height: 40,
    },

];

export const Socials = [
    {
        name: "Mail",
        icon: MailIcon,
        link: "mailto:n.t.priyawansha@gmail.com",
    },
    {
        name: "Github",
        icon: GithubIcon,
        link: "https://github.com/nawodi-priyawansha",
    },
    {
        name: "Linkedin",
        icon: LinkedIn,
        link: "https://www.linkedin.com/in/nawodi-priyawansha/",
    },
];



export const Frontend_skill = [
    {
        skill_name: "HTML 5",
        Image: HTMLIcon,
        width: 80,
        height: 80,
    },
    {
        skill_name: "CSS",
        Image: CSSIcon,
        width: 80,
        height: 80,
    },
    {
        skill_name: "Java Script",
        Image: JScon,
        width: 65,
        height: 65,
    },
    {
        skill_name: "Tailwind Css",
        Image: TailwindIcon,
        width: 80,
        height: 80,
    },
    {
        skill_name: "Material UI",
        Image: MuiIcon,
        width: 80,
        height: 80,
    },
    {
        skill_name: "React",
        Image: React1Icon,
        width: 80,
        height: 80,
    },
    {
        skill_name: "Redux",
        Image: ReduxIcon,
        width: 80,
        height: 80,
    },
    {
        skill_name: "Angular",
        Image: AngularIcon,
        width: 80,
        height: 80,
    },
    {
        skill_name: "Type Script",
        Image: TSIcon,
        width: 80,
        height: 80,
    },
    {
        skill_name: "Next js 13",
        Image: NextIcon,
        width: 80,
        height: 80,
    },
];

export const Backend_skill = [
    {
        skill_name: "Node js",
        Image: NodeIcon,
        width: 80,
        height: 80,
    },
    {
        skill_name: "Express js",
        Image: ExpressIcon,
        width: 80,
        height: 80,
    },
    {
        skill_name: "Mongo db",
        Image: MongodbIcon,
        width: 40,
        height: 40,
    },
    {
        skill_name: "Fire base",
        Image: FirebaseIcon,
        width: 55,
        height: 55,
    },
    {
        skill_name: "Postgres SQL",
        Image: PostgerIcon,
        width: 70,
        height: 70,
    },
    {
        skill_name: "My SQL",
        Image: MYSQLIcon,
        width: 70,
        height: 70,
    },
    {
        skill_name: "Prisma",
        Image: PrismaIcon,
        width: 70,
        height: 70,
    },
    {
        skill_name: "Graphql",
        Image: GraphqlIcon,
        width: 80,
        height: 80,
    },
];

export const Full_stack = [
    {
        skill_name: "React Native",
        Image: ReactNativeIcon,
        width: 70,
        height: 70,
    },
    {
        skill_name: "Jenkins",
        Image: JenkinsIcon,
        width: 70,
        height: 70,
    },
    {
        skill_name: "Docker",
        Image: DockerIcon,
        width: 70,
        height: 70,
    },

    {
        skill_name: "Figma",
        Image: FigmaIcon,
        width: 50,
        height: 50,
    },

];



export const Other_skill = [
    {
        skill_name: "ChatGPT",
        Image: ChatgptIcon,
        width: 60,
        height: 60,
    },
];
