import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { PROJECTS } from '../../../data/projects.data';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.scss',
})
export class ProjectDetail {
  private readonly route = inject(ActivatedRoute);

  slug = this.route.snapshot.paramMap.get('slug');

  project = PROJECTS.find((project) => project.slug === this.slug);
}