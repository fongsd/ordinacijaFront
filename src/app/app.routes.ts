import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { MainPageAppointmentComponent } from './appointments/main-page-appointment/main-page-appointment.component';

export const routes: Routes = [
    {path: '', component: MainPageComponent, pathMatch: 'full'},
    { path: 'doktori', component: DoctorsComponent, pathMatch: 'full' },
    { path: 'doctors', component: DoctorsComponent, pathMatch: 'full' },
    { path: 'newAppointment', component: MainPageAppointmentComponent, pathMatch: 'full' },
];
