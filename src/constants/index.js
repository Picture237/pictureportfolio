import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  python,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  terraform,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  ansible,
  stellar,

} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Innovative Cloud DevOps Solutions',
    icon: ux,
  },
  {
    title: 'Streamlined Automated CI/CD Pipeline Setup',
    icon: prototyping,
  },
  {
    title: 'Infrastructure as Code (IaC) Deployment Solutions',
    icon: backend,
  },
  {
    title: 'Full Stack Development Services',
    icon: frontend,
  },
];


const technologies = [
  {
    name: 'Terraform',
    icon: terraform,
  },
  {
    name: 'Ansible',
    icon: ansible,
  },
  {
    name: 'docker',
    icon: docker,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  }, 

];

const experiences = [
  {
    title: 'DevOps Engineer Specialist',
    company_name: 'Emera Inc',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'June 2021 - Present',
  },
  {
    title: 'Azure Cloud Engineer Specialist',
    company_name: 'Shopify',
    icon: dcc,
    iconBg: '#333333',
    date: 'Apr 2019 - May 20221',
  },
  {
    title: 'Project Engineer',
    company_name: 'FoxBox Digital',
    icon: microverse,
    iconBg: '#333333',
    date: 'May 2022 - Mar 2019',
  },
  {
    title: 'Consultant Software Engineer freelance',
    company_name: 'Stellar Core',
    icon: stellar,
    iconBg: '#333333',
    date: 'Aug 2022 - Apr 2024',
  },
  {
    title: 'Consultant Frontend Engineer freelance',
    company_name: 'CIDT',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Sep 2021 - Apr 2022',
  },
  {
    title: 'Consultant FrontEnd Engineer freelance',
    company_name: 'QuickDo',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Dec 2018 - Apr 2019',
  },
  {
    title: 'Consultant Software Engineer freelance',
    company_name: 'SOFTRONIC',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'May 2017 - Sep 2018',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'TheGlobalPass',
    description: 'The GlobalPass is an innovative application designed to make your relocation process as simple as possibile',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: '#',
    demo: 'https://www.theglobalpass.ca/',
  },
  {
    id: 'project-2',
    name: 'Stellar Pay',
    description:
      'StellarPay streamlines business finance with an all-in-one app, empowering entrepreneurs with efficient management tools',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: '#',
    demo: 'https://www.stellarpay.app/',
  },
  {
    id: 'project-3',
    name: 'LamTrac',
    description: 'Lamtrac, a pioneer in mechanical land clearing, has been offering robust vehicles with over 20 models for various applications for over 20 years.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: '#',
    demo: 'https://www.lamtrac.com/',
  },
  {
    id: 'project-4',
    name: 'Tchooka',
    description: `E-Commerce.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: '#',
    demo: 'https://www.tchooka.com/',
  },
  {
    id: 'project-5',
    name: 'Jumellage CCNB',
    description:
      'Jumelage CCNB is a platform that connects CCNB students with local employers through profiles and personalized job matching.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: nyeusi,
    repo: '#',
    demo: 'https://jumelageccnb.com/',
  },
];

export { services, technologies, experiences, projects };
