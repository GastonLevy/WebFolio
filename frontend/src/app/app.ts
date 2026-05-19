import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Navbar } from './layout/navbar/navbar';
import { Hero } from './sections/hero/hero';
import { Projects } from './sections/projects/projects';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Hero, Projects],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('frontend');
}
