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
  redux,
  tailwind, 
  nodejs,
  php,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  threejs,
  colorpodge,
  imaginet,
  linux,
  kubernetes,
  nginx,
  apache,
  githubactions,
  jenkins,
  bootstrap,
  mysql,
  postgresql,
  sqlite,
  firebase,
  flask,
  fastapi,
  django,
  postman,
  python,
  c,
  cpp,
  bash,
  udemy,
  guvi,
  heroku,
  votify,
  adsfluence,
  buzzplosion,
  hackerrank,
  reactCert,
  jSc,
  awsball,
  arcade,
  microsoft,
  adsfl,
  buzz

} from "../assets";


export const about = "I'm a passionate developer experienced in building scalable web apps using React, PHP & MySQL. With a background in both frontend & backend technologies, I’ve worked on diverse projects ranging from influencer marketing platforms to color management tools for global industries.I enjoy solving real-world problems with clean code, intuitive design, & teamwork. Currently exploring modern JavaScript frameworks & Power BI, with a focus on writing efficient, maintainable code."

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend",
    icon: mobile,
  },
  {
    title: "Backend",
    icon: backend,
  }
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "bootstrap",
    icon: bootstrap,
  },
  {
    name: "mysql",
    icon: mysql,
  },

  {
    name: "php",
    icon: php,
  },
  {
      name: "postman",
      icon: postman,
  },
  // {
  //   name: "bash",
  //   icon: bash,
  // },
  // {
  //   name: "aws",
  //   icon: awsball,
  // },
  // {
  //   name: "gcp",
  //   icon: gcp,
  // }
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "ColorPodge",
    icon: colorpodge,
    iconBg: "black",
    date: "Jan 2024 - Present",
    points: [
      "Built color management tools for 6 global apparel and homeware brands, reducing production errors with real-time trend analysis and accurate color physics",
      "Improved design workflows by 40% by integrating 3D color space visualizations for precise and efficient color mapping",
      "Partnered with cross-functional teams to deliver client-specific solutions aligned with industry standards",
      "Used Bitbucket for version control, ensuring smooth collaboration and streamlined development",
      "Automated Power BI model refreshes, keeping reports current and reducing data processing time",
      "Designed interactive Power BI dashboards to track key metrics, cutting down manual reporting and enabling faster decisions",
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "ImagiNET Ventures",
    icon: imaginet,
    iconBg: "#E0E0E0",
    date: "Jul 2023 - Sep 2023",
    points: [
     "Built an admin module for an e-commerce platform, streamlining operations and improving product management",
    "Implemented key features like dashboards, bulk product uploads, and automated invoice generation to support a smooth shift to online sales",
    "Debugged and optimized backend functionalities, ensuring a reliable and seamless user experience"
    ],
  }
];

const certifications = [
  {
    name:
      "React - The Complete Guide 2025 (incl. Next.js, Redux)",
    image: reactCert,
    icon: udemy,
    url: 'https://www.udemy.com/certificate/UC-4a4780f0-c841-4219-a588-98e1e4e116dd/'
  },
  {
    name:
      "JavaScript",
    image: jSc,
    icon: guvi,
    url: 'https://www.guvi.in/share-certificate/71005086adw16pWh0v'
  },
  {
    name:
    "Code Your First Game: Arcade Classic in JavaScript on Canvas",
    image: arcade,
    icon: udemy,
    url: 'https://www.udemy.com/certificate/UC-GNG3ZCX5/'
  },
];

const projects = [
  {
    name: "Adsfluence",
    description:
      "A global influencer marketing platform connecting brands with creators across all social platforms. It helps influencers monetize their presence through link-in-bio pages and campaign collaborations. The platform supports flexible pricing, multi-account management, and direct payments.",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "jquery",
        color: "orange-text-gradient",
      }
    ],
    image: adsfluence,
    source_code_link: "https://adsfluence.com/",
     linkimg: adsfl,
  },
  {
    name: "Buzzplosion",
    description:
      "India’s 1st South Indian celebrity influencer platform, connecting brands with over 280 actors. The platform streamlines campaign planning by providing real-time access to endorsement costs and availability within 45 minutes. Recognized by the Ministry of MSME for innovation in digital brand engagement.",
    tags: [
      {
        name: "codeigniter",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "orange-text-gradient",
      },
    ],
    image: buzzplosion,
    source_code_link: "https://buzzplosion.com/",
     linkimg: buzz,
  }
];

export { services, technologies, experiences, certifications, projects };