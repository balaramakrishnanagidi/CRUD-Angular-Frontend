import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';





const routes: Routes = [
  {path:'employees', component: EmployeeListComponent},
  {path:'add-employee', component:AddEmployeeComponent },
  {path:'update-employee/:id', component: UpdateEmployeeComponent},
  {path:'', redirectTo:'employees', pathMatch:'full'},
  {path:'employeeDetails/:id', component: EmployeeDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
