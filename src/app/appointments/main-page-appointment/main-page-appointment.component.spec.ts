import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageAppointmentComponent } from './main-page-appointment.component';

describe('MainPageAppointmentComponent', () => {
  let component: MainPageAppointmentComponent;
  let fixture: ComponentFixture<MainPageAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainPageAppointmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPageAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
