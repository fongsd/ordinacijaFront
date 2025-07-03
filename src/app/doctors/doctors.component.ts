import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { DoctorsService } from '../service/doctors.service';

@Component({
  selector: 'app-doctors',
  imports: [NgFor],
  templateUrl: './doctors.component.html',
  styleUrl: './doctors.component.css'
})
export class DoctorsComponent {

  protected doctors: any[] = [];
  constructor(private doctorService: DoctorsService) { 
    this.doctorService.getDoctors().subscribe((data: any) => {
      this.doctors = data;
    });
  }

  ngOnInit(): void {
  }
}
