import { getImgPath } from "@/utils/image";

export const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Blog", href: "/#blog" },
];

export const count = [
    {
        icon: getImgPath("/images/counter/star.svg"),
        value: "4.86",
        description: "Out of 5 stars from 3896 reviews on Google platform",
    },
    {
        icon: getImgPath("/images/counter/admin.svg"),
        value: "364",
        description: "Client testimonials received in the year 2021",
    },
    {
        icon: getImgPath("/images/counter/bag.svg"),
        value: "45M+",
        description: "Revenue generated through new projects & marketing",
    },
];

export const Progress = [
    { title: 'UX Research and Testing', Progress: 95 },
    { title: 'Product Management', Progress: 84 },
    { title: 'UI & Visual Design', Progress: 90 }
];

export const Servicebox = [
  {
    icon: '/images/icons/project.svg',
    title: 'Project Management & PMO',
    description:
      'Planning, coordination, and governance of projects with a strong focus on Time-To-Market optimization, stakeholder alignment, and delivery performance.',
  },
  {
    icon: '/images/icons/data.svg',
    title: 'Data Analysis & BI',
    description:
      'Transforming raw data into actionable insights using SQL, Power BI, and analytics tools to support strategic decision-making.',
  },
  {
    icon: '/images/icons/dev.svg',
    title: 'Full-Stack Development',
    description:
      'Designing and building scalable web applications using modern technologies such as Next.js, Django, and APIs.',
  },
  {
    icon: '/images/icons/process.svg',
    title: 'Process Optimization',
    description:
      'Improving workflows and automating processes to increase efficiency, reduce delays, and enhance operational performance.',
  },
  {
    icon: '/images/icons/consulting.svg',
    title: 'Digital Transformation',
    description:
      'Supporting organizations in adopting digital solutions that align business goals with technology innovation.',
  },
  {
    icon: '/images/icons/team.svg',
    title: 'Collaboration & Leadership',
    description:
      'Working effectively with cross-functional teams, bridging technical and business stakeholders to deliver impactful results.',
  },
]

export const portfolioinfo = [
  {
    image: '/images/portfolio/project1.png',
    alt: 'Fintech Wallet App',
    title: 'Fintech Wallet Platform',
    info: 'Designed a scalable wallet solution for payments, transfers, and airtime services',
    Class: '',
  },
  {
    image: '/images/portfolio/project2.png',
    alt: 'USSD Application',
    title: 'Dynamic USSD System',
    info: 'Built a configurable USSD platform with dynamic menus and API integration',
    Class: '',
  },
  {
    image: '/images/portfolio/project3.png',
    alt: 'TTM Optimization',
    title: 'TTM Process Optimization',
    info: 'Improved project delivery timelines and enhanced process efficiency',
    Class: '',
  },
  {
    image: '/images/portfolio/project4.png',
    alt: 'Dashboard',
    title: 'Data Analytics Dashboard',
    info: 'Developed dashboards to support data-driven decision-making',
    Class: '',
  },
  {
    image: '/images/portfolio/project5.png',
    alt: 'SMS Platform',
    title: 'SMS Management System',
    info: 'Implemented a scalable messaging system with bulk and automated sending',
    Class: '',
  },
  {
    image: '/images/portfolio/project6.png',
    alt: 'Eco Data',
    title: 'Environmental Data Analysis',
    info: 'Analyzed datasets to generate insights on environmental patterns',
    Class: '',
  },
]