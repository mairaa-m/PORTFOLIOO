import { Routes } from '@angular/router';
import { Main } from './main/main';
import { Projects } from './projects/projects';

export const routes: Routes = [
	{ path: '', component: Main },
	{ path: 'projects', component: Projects }
];
