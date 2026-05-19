import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Projects } from './sections/projects/projects';
import { About } from './sections/about/about';
import { Contact } from './sections/contact/contact';

export const routes: Routes = [
    {
        path: '',
        component: Home 
    },
    {
        path: 'projects',
        component: Projects
    },
    {
        path: 'about-me',
        component: About
    },
    {
        path: 'contact',
        component: Contact
    }
];
