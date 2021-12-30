import {Component, OnInit} from '@angular/core';
import {MedicalRecord} from "../medical-record";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {MedicalRecordService} from "../medical-record.service";
import {MatDatepickerModule} from '@angular/material/datepicker';

@Component({
  selector: 'app-medical-record-update',
  templateUrl: './medical-record-update.component.html',
  styleUrls: ['./medical-record-update.component.css']
})
export class MedicalRecordUpdateComponent implements OnInit {

  meRecForm: any
  idRecord!: string

  constructor(private activatedRoute: ActivatedRoute,
              private medicalRecordService: MedicalRecordService,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {

      this.idRecord = String(paramMap.get('id'));
      const mediRec=this.getMediRec(this.idRecord)
      this.meRecForm=new FormGroup({
        idRecord: new FormControl(mediRec?.idRecord),
        patientId: new FormControl(mediRec?.patientId),
        patientName: new FormControl(mediRec?.patientName,[Validators.required,Validators.pattern('[a-zA-Z ]*')]),
        startIn: new FormControl(mediRec?.startIn,[Validators.required]),
        startOut: new FormControl(mediRec?.startOut,[Validators.required]),
        reason: new FormControl(mediRec?.reason,[Validators.required]),
        treatmentMethods: new FormControl(mediRec?.treatmentMethods,[Validators.required]),
        doctorName: new FormControl(mediRec?.doctorName,[Validators.required]),
      })

    });
  }

  ngOnInit(): void {
  }
  getMediRec(id: string){
    return this.medicalRecordService.findById(id)
  }
  updateMediRec(id: string) {
    const mediRec = this.meRecForm.value;
    this.medicalRecordService.updateMediRec(id, mediRec);
    alert('Cập nhật thành công');
    this.router.navigate(['/']);
  }

}
