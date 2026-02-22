import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    {
        path: 'todo',
        loadComponent: () =>
            loadRemoteModule('todo', './Component').then((m) => m.AppComponent),
    },
    {
        path: '**',
        component: NotFoundComponent,
    },
];