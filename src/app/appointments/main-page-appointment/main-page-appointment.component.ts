import { Component } from '@angular/core';
import { Form, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DoctorsService } from '../../service/doctors.service';
import { NgFor } from '@angular/common';
import { Doctor } from '../../../models/Doctor';
import { AppointmentsService } from '../../service/appointments.service';

@Component({
  selector: 'app-main-page-appointment',
  imports: [ReactiveFormsModule, NgFor],
  templateUrl: './main-page-appointment.component.html',
  styleUrl: './main-page-appointment.component.css'
})
export class MainPageAppointmentComponent {

  appointmentForm: FormGroup;
  doctors: Doctor[] = [];

  constructor(private fb: FormBuilder, private doctorsService: DoctorsService, private appointmentsService: AppointmentsService) {
    this.appointmentForm = this.fb.group({
      doctor: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      patientName: ['', Validators.required],
      patientEmail: ['', [Validators.email]],
      patientPhone: ['', [Validators.pattern('^[0-9]+$')]],
    });
    doctorsService.getDoctors().subscribe((data: any) => {
      this.doctors = data;
      console.log('Doctors loaded:', this.doctors);
    });
  }

  onSubmit() {
    if (this.appointmentForm.valid) {
      console.log('Form Submitted!', this.appointmentForm.value);
    }
    else {
      Object.keys(this.appointmentForm.controls).forEach(key => {
        const controlErrors = this.appointmentForm.get(key)?.errors;
          if (controlErrors) {
            console.log('Greška u polju', key, controlErrors);
          }
      });
  }
      this.appointmentsService.addAppointment({ doctorId: 2, roomId: 1, pacientId: 1}).subscribe(response => {
        console.log('Appointment added successfully:', response);
        // Optionally reset the form or navigate to another page
        this.appointmentForm.reset();
      }, error => {
        console.error('Error adding appointment:', error);
      });
      // Here you can handle the form submission, e.g., send data to a server
  }
}
