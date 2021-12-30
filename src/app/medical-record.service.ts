import { Injectable } from '@angular/core';
import {MedicalRecord} from "./medical-record";

@Injectable({
  providedIn: 'root'
})
export class MedicalRecordService {
  medicalRecords: MedicalRecord[]=[{
    idRecord: "BA-001",
    patientId: "BN-435",
    patientName: "Nguyễn Văn A",
    startIn: "07-08-2016",
    startOut: "08-08-2019",
    reason: "Ung thư gan giai đoạn cuối",
    treatmentMethods: "Mổ",
    doctorName: "Lê Văn B"
  },
    {
      idRecord: "BA-112",
      patientId: "BN-123",
      patientName: "Nguyễn Văn C",
      startIn: "10-08-2019",
      startOut: "10-08-2020",
      reason: "Suy thận mạn",
      treatmentMethods: "Chạy thận",
      doctorName: "Nguyễn Đôn D"
    },
    {
      idRecord: "BA-223",
      patientId: "BN-984",
      patientName: "Tôn Nữ D",
      startIn: "11-01-2020",
      startOut: "08-08-2020",
      reason: "Covid-2019",
      treatmentMethods: "Cách ly và theo dõi thường xuyên",
      doctorName: "La Văn N"
    },
    {
      idRecord: "BA-444",
      patientId: "BN-153",
      patientName: "Đoàn Thị E",
      startIn: "07-08-2017",
      startOut: "08-08-2018",
      reason: "Ung thư phổi giai đoạn cuối",
      treatmentMethods: "Xạ trị",
      doctorName: "Lê Văn B"
    }]

  constructor() { }
  getAll() {
    return this.medicalRecords;
  }
  updateMediRec(id: string, mediRec: MedicalRecord) {
    for (let i = 0; i < this.medicalRecords.length; i++) {
      if (this.medicalRecords[i].idRecord === id) {
        this.medicalRecords[i] = mediRec;
      }
    }
  }
  deleteMediRec(id: string) {
    this.medicalRecords = this.medicalRecords.filter(mediRec => {
      return mediRec.idRecord != id;
    });
  }
  findById(id: string) {
    return this.medicalRecords.find(mediRec => mediRec.idRecord == id);
  }
}
