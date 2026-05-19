import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ProjectCard } from './components/project-card/project-card';
import { PROJECTS } from '../data/projects.data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCard, RouterLink],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projects = PROJECTS;
}