import { Component } from '@angular/core';
import { DoctorsService } from '../service/doctors.service';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '../navBar/navigation/navigation.component';

@Component({
  selector: 'app-main-page',
  imports: [CommonModule, NavigationComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
  
})
export class MainPageComponent {

  doctors: any[] = []
  constructor(private doctorsService: DoctorsService) {
      this.doctorsService.getDoctors().subscribe((data: any) => {
          this.doctors = data;
      });
   }

  ngOnInit(): void {
  }
}
