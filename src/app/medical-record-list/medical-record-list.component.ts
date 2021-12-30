import { Component, OnInit } from '@angular/core';
import {MedicalRecordService} from "../medical-record.service";
import {MedicalRecord} from "../medical-record";
import { Router } from '@angular/router';

@Component({
  selector: 'app-medical-record-list',
  templateUrl: './medical-record-list.component.html',
  styleUrls: ['./medical-record-list.component.css']
})
export class MedicalRecordListComponent implements OnInit {
  medicalRecords: MedicalRecord[]=[]

  constructor(private medicalRecordService: MedicalRecordService,
              private router: Router) { }

  ngOnInit(): void {
    this.getAll()
  }
  getAll(){
    this.medicalRecords=this.medicalRecordService.getAll()

  }
  deleteMediRec(id: string) {
    this.medicalRecordService.deleteMediRec(id);
    this.router.navigate(['/']);
  }

}
