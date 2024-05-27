import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpoyeeFormComponent } from './empoyee-form/empoyee-form.component'
import { ListemployeeComponent } from './listemployee/listemployee.component';

const routes: Routes = [
  {
    path:"empoyeeForm",
    component:EmpoyeeFormComponent
  },
  {
    path:"empoyeList",
    component:ListemployeeComponent
  },
  {
    path:'empoyeupdate/:id',
    component:EmpoyeeFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
