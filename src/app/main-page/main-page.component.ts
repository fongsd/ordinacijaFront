import { Component } from '@angular/core';
import { DoctorsService } from '../service/doctors.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-page',
  imports: [CommonModule],
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
