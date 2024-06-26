import { NgModule } from '@angular/core';

import { Route, RouterModule } from '@angular/router';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
const EMPLOYEE_ROUT: Route[] = [
  { path: '', redirectTo: 'allEmployees', pathMatch: 'full' },
  { path: 'allEmployees', component: EmployeeDetailsComponent },

  { path: 'addEmployee', component: AddEmployeeComponent },
  { path: 'editEmployee/:identity', component:EditEmployeeComponent },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(EMPLOYEE_ROUT)
  ],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
