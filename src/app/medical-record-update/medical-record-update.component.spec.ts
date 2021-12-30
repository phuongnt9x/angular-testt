import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalRecordUpdateComponent } from './medical-record-update.component';

describe('MedicalRecordUpdateComponent', () => {
  let component: MedicalRecordUpdateComponent;
  let fixture: ComponentFixture<MedicalRecordUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalRecordUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalRecordUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
