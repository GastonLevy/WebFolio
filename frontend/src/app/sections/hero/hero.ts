import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  coreStack = [
    'ASP.NET Core',
    'C#',
    'Angular',
    'TypeScript',
    'Entity Framework Core',
    'MySQL'
  ];

  infrastructureStack = [
    'Docker',
    'Linux',
    'Nginx',
    'GitHub Actions',
    'CI/CD',
  ];

  additionalStack = [
    'Symfony',
    'PHP',
    'Django',
    'Python',
    'Networking'
  ];
}