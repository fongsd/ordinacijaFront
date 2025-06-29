import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { DoctorsComponent } from './doctors/doctors.component';

export const routes: Routes = [
    {path: '', component: MainPageComponent, pathMatch: 'full'},
    { path: 'doktori', component: DoctorsComponent, pathMatch: 'full' }
];
