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
  coreStack = ['Angular', 'Symfony', 'TypeScript', 'Docker', 'MySQL'];

  infrastructureStack = ['Nginx', 'Linux', 'VPS', 'CI/CD', 'Reverse Proxy'];

  additionalStack = ['Django', 'Streaming Systems', 'Multi-tenant SaaS'];
}