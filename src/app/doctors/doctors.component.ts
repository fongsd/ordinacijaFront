import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-doctors',
  imports: [NgFor],
  templateUrl: './doctors.component.html',
  styleUrl: './doctors.component.css'
})
export class DoctorsComponent {

  protected doctors: any[] = [
    { id: 1, name: 'Dr. Smith', specialty: 'Cardiology', experience: 10 },
    { id: 2, name: 'Dr. Johnson', specialty: 'Neurology', experience: 8 },
  ]
  constructor() { }

  ngOnInit(): void {
  }
}
