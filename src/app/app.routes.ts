import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home';
import { AboutComponent } from './components/about';
import { SearchComponent } from './components/search/search.component';
import { NoContentComponent } from './components/no-content';

import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'detail', loadChildren: './+detail/index#DetailModule'},
  { path: 'search', component: SearchComponent },
  { path: '**',    component: NoContentComponent },
];
