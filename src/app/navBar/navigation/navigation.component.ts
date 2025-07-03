import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DoctorsComponent } from '../../doctors/doctors.component';

@Component({
  selector: 'app-navigation',
  imports: [RouterLink, DoctorsComponent],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {

}
