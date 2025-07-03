import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {

  private http: HttpClient;
  constructor(http: HttpClient) {
    this.http = http;
  }

  getDoctors() {
    return this.http.get('https://localhost:5001/doctors');
  }
  
}
