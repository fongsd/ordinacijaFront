import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {

  url = 'https://localhost:5001/appointments';
  private http: HttpClient;
  constructor(private httpClient: HttpClient) {
    this.http = httpClient;
   }
  getAppointments() {
    return this.http.get(this.url);
  }
  addAppointment(appointment: any) {
    return this.http.post(this.url, appointment);
  }
}
