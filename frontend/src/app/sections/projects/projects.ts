import { Component } from '@angular/core';

import { ProjectCard } from './components/project-card/project-card';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCard],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projects = [
    {
      title: 'Angular Course Landing Platform',
      description:
        'Dynamic Angular landing platform built with reusable layouts and JSON-driven content.',
      stack: ['Angular', 'TypeScript', 'Bootstrap'],
    },
    {
      title: 'Pet Adoption Platform',
      description:
        'Full stack Symfony project developed with a team of 4 using Scrum and sprint planning.',
      stack: ['Symfony', 'Angular', 'Docker', 'CI/CD'],
    },
    {
      title: 'Retail SaaS Platform',
      description:
        'Multi-tenant business system for stock, sales, debts, suppliers and real clients.',
      stack: ['Django', 'MySQL', 'Docker'],
    },
    {
      title: 'Streaming Infrastructure',
      description:
        'Dockerized Jellyfin and Nginx infrastructure serving media and digital TV for ISP networks.',
      stack: ['Docker', 'Nginx', 'Linux', 'Jellyfin'],
    },
  ];
}