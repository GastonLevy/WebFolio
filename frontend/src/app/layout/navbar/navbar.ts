import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  navItems = [
    { label: 'Home', route: '/' },
    { label: 'Projects', route: '/projects' },
    { label: 'About', route: '/about-me' },
    { label: 'Contact', route: '/contact' },
  ];
}