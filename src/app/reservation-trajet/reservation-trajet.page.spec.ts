import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReservationTrajetPage } from './reservation-trajet.page';

describe('ReservationTrajetPage', () => {
  let component: ReservationTrajetPage;
  let fixture: ComponentFixture<ReservationTrajetPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReservationTrajetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
