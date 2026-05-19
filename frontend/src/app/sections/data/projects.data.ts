export const PROJECTS = [
  {
    slug: 'course-engine',

    title: 'Course Engine',

    url: 'https://course-engine.gastonlevy.com/',

    github: 'https://github.com/GastonLevy/angular-course-engine',

    logo: 'images/projects/LogoCourseEngine.png',

    shortDescription:
      'Frontend-only Angular platform that renders multiple course landing pages dynamically from JSON configuration.',

    overview:
      'Course Engine is a multi-course landing page platform built with Angular. It renders complete course pages from structured JSON data, allowing different courses to be displayed without changing the application structure.',

    role: [
      'Organized a team of 3 developers',
      'Taught Git, Docker and deployment workflows to the team',
      'Developed multiple frontend sections',
      'Helped structure the project workflow and task distribution',
      'Configured the GitHub Actions deployment pipeline',
    ],

    features: [
      'Dynamic course rendering from JSON data',
      'Reusable Angular components',
      'Multi-course page structure',
      'Config-driven content display',
      'Frontend-only architecture',
      'Automated GitHub Actions deployment',
      'Production deployment on a VPS',
    ],

    stack: ['Angular', 'TypeScript', 'Docker', 'GitHub Actions', 'VPS'],

    infrastructure: [
      'Frontend-only Angular application',
      'JSON-driven content architecture',
      'Dockerized production build',
      'GitHub Actions CI/CD pipeline',
      'VPS deployment with Traefik reverse proxy',
    ],

    challenges: [
      'Designing reusable components for multiple course layouts',
      'Keeping the project frontend-only while maintaining flexibility',
      'Coordinating development inside a small team',
      'Making course content scalable through JSON configuration',
      'Deploying the application through an automated CI/CD workflow',
    ],

    outcome:
      'Delivered as a university frontend project with a reusable architecture, automated deployment and production hosting on a VPS.',

    images: [],
  },

  {
    slug: 'petcenter',

    title: 'PetCenter',

    url: 'https://petcenter.gastonlevy.com/',

    github: 'https://github.com/GastonLevy/pet_adoption_final',

    logo: 'images/projects/LogoPetCenter.png',

    shortDescription:
      'University adoption platform built with Symfony and deployed with Docker, GitHub Actions and VPS infrastructure.',

    overview:
      'PetCenter is a university project designed to connect animals available for adoption with people interested in adopting them. The platform manages users, pets, adoption requests and administrative approval workflows.',

    role: [
      'Designed the overall system architecture',
      'Led and supported a team of junior developers',
      'Taught the team how to work with Git and Docker',
      'Organized development sprints and task planning',
      'Configured the GitHub Actions deployment pipeline',
      'Published the application on a VPS using Docker and Traefik',
    ],

    features: [
      'User account creation and authentication',
      'Pet management with breeds, species and tags',
      'Adoption request workflow',
      'Admin review process for accepting or rejecting adoption requests',
      'Structured data model for pets and adoption candidates',
      'Automated GitHub Actions deployment',
      'Dockerized production environment',
    ],

    stack: ['Symfony', 'MySQL', 'Docker', 'GitHub Actions', 'VPS', 'Traefik'],

    infrastructure: [
      'Dockerized Symfony application',
      'MySQL database',
      'VPS deployment with Traefik reverse proxy',
      'GitHub Actions CI/CD pipeline',
      'Production domain with HTTPS',
    ],

    challenges: [
      'Coordinating a team with different experience levels',
      'Teaching Git and Docker basics while maintaining project progress',
      'Designing a maintainable adoption workflow',
      'Deploying the application online through automated pipelines',
      'Running the project in a production VPS environment',
    ],

    outcome:
      'Delivered as a university project, deployed online with GitHub Actions and approved with the highest project grade of the year.',

    images: [],
  },

  {
    slug: 'tienda-yaca',

    title: 'TiendaYaca',

    url: 'https://tiendayaca.gastonlevy.com/',

    github: 'https://github.com/GastonLevy/StoreOS',

    logo: 'images/projects/LogoTiendaYaca_white.png',

    shortDescription:
      'Multi-tenant SaaS management platform for inventory, checkout, debt management and operational control.',

    overview:
      'TiendaYaca is an online business management platform built as a multi-tenant SaaS solution. The system allows multiple businesses and users to manage inventory, sales, debt tracking, checkout operations and technical service workflows from a centralized web platform.',

    role: [
      'Designed and developed the complete SaaS architecture',
      'Implemented multi-tenant and multi-user logic',
      'Built business management modules and operational workflows',
      'Managed production deployments and client environments',
      'Designed role-based access systems for administrators and cashiers',
      'Configured Docker, GitHub Actions and VPS deployment workflows',
    ],

    features: [
      'Inventory management system',
      'Checkout and shopping cart workflows',
      'Cash register management with statistics and closing reports',
      'Current account and debt tracking system',
      'Excel import system for bulk data migration',
      'Reception module for technical service workflows',
      'PDF generation with hidden unique validation identifiers',
      'Multi-tenant and multi-user architecture',
      'Role-based access management',
      'Real-time monitoring of carts and cash registers',
      'Automated GitHub Actions deployment',
      'Dockerized production environment',
    ],

    stack: ['Django', 'MySQL', 'Docker', 'Python', 'GitHub Actions', 'VPS', 'Traefik'],

    infrastructure: [
      'Online SaaS architecture',
      'Multi-tenant backend structure',
      'Role-based multi-user environments',
      'Dockerized Django application',
      'MySQL production database',
      'GitHub Actions CI/CD pipeline',
      'VPS deployment with Traefik reverse proxy',
    ],

    challenges: [
      'Designing a scalable multi-tenant architecture',
      'Managing isolated business environments',
      'Implementing role-based operational workflows',
      'Building flexible business management modules for different client needs',
      'Maintaining production deployments for real clients',
    ],

    outcome:
      'Currently used by 4 business clients with 13 active operational accounts, deployed online through Docker, GitHub Actions and VPS infrastructure.',

    images: [],
  },

  {
    slug: 'streaming-infrastructure',

    title: 'Streaming Infrastructure & Bandwidth Optimization',

    url: '',

    github: '',

    logo: 'images/projects/Jellyfin_-_icon-transparent.svg.png',

    shortDescription:
      'Dockerized media and television infrastructure designed for ISP networks with bandwidth optimization and local streaming redistribution.',

    overview:
      'A streaming infrastructure solution deployed for multiple ISPs using Dockerized services, Nginx reverse proxying and Jellyfin media delivery. The system redistributes television streams locally to drastically reduce real internet bandwidth consumption during peak hours.',

    role: [
      'Designed the complete infrastructure architecture',
      'Configured Dockerized services and Ubuntu environments',
      'Implemented Nginx reverse proxy and streaming workflows',
      'Managed Jellyfin media deployments',
      'Integrated networking and MikroTik configurations when required',
    ],

    features: [
      'Local redistribution of television streams',
      'Bandwidth optimization using proxied M3U8 streams',
      'Dockerized service deployment',
      'Media serving through Jellyfin',
      'Reverse proxy architecture with Nginx',
      'ISP-oriented local delivery model',
    ],

    stack: ['Docker', 'Nginx', 'Jellyfin', 'Ubuntu', 'MikroTik', 'Linux'],

    infrastructure: [
      'Ubuntu-based VPS/server environments',
      'Dockerized services',
      'Nginx web server and reverse proxy',
      'M3U8 stream redistribution',
      'Local network streaming delivery',
      'Production deployments for ISP environments',
    ],

    challenges: [
      'Reducing internet consumption during peak traffic hours',
      'Redistributing live television streams efficiently',
      'Maintaining stable local streaming performance',
      'Managing infrastructure for multiple ISP environments',
    ],

    outcome:
      'Successfully deployed across 5 ISP environments serving between 100 and 300 weekly users each. Reduced peak-hour internet consumption by approximately 150–200 Mbps through local stream redistribution.',

    images: [],
  },

  {
    slug: 'personal-portfolio',

    title: 'WebFolio - Angular Portfolio',

    url: 'https://gastonlevy.com/',

    github: 'https://github.com/GastonLevy/WebFolio',

    logo: 'assets/logos/gl-logo.png',

    shortDescription:
      'Angular portfolio focused on real projects, clean UI, technical case studies and automated deployment.',

    overview:
      'Personal portfolio built with Angular to showcase real-world projects, infrastructure experience and frontend architecture through a clean and responsive interface.',

    role: [
      'Designed the complete visual identity and design system',
      'Built reusable Angular components and project pages',
      'Implemented responsive layouts and custom SCSS styling',
      'Structured the application around reusable JSON-driven project data',
      'Configured Docker, Nginx, GitHub Actions and VPS deployment',
    ],

    features: [
      'Dynamic project rendering from structured data',
      'Reusable project detail pages',
      'Responsive UI for desktop and mobile',
      'Custom plum and cream visual design system',
      'Interactive project cards and hover states',
      'Automated GitHub Actions deployment',
      'Dockerized Angular production build served with Nginx',
    ],

    stack: ['Angular', 'TypeScript', 'SCSS', 'Bootstrap', 'Docker', 'GitHub Actions', 'Nginx', 'VPS', 'Traefik'],

    infrastructure: [
      'Angular standalone architecture',
      'SCSS global design system',
      'Responsive Bootstrap grid',
      'Dockerized production build',
      'Nginx static file server',
      'GitHub Actions CI/CD pipeline',
      'VPS deployment with Traefik reverse proxy',
      'Production domain with HTTPS',
    ],

    challenges: [
      'Building a custom identity without relying on default Bootstrap visuals',
      'Creating reusable project structures',
      'Maintaining visual consistency across all sections',
      'Preparing an Angular SPA for production deployment',
      'Configuring CI/CD deployment to a VPS with Traefik',
    ],

    outcome:
      'A polished portfolio platform deployed online with Docker, Nginx, GitHub Actions and VPS infrastructure, designed to present technical projects with a professional and scalable structure.',

    images: [],
  },
];