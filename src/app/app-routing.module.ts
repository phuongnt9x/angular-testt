import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MedicalRecordUpdateComponent} from "./medical-record-update/medical-record-update.component";
import {MedicalRecordListComponent} from "./medical-record-list/medical-record-list.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'medicalrcd/list',
    pathMatch: 'full'
  },
  {
    path: "medicalrcd/update/:id",
    component: MedicalRecordUpdateComponent
  }, {
    path: "medicalrcd/list",
    component: MedicalRecordListComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
