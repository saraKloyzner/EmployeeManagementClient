import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'employee', pathMatch: 'full' },
    { path: 'employee', loadChildren: () => import('./employee/employee.module').then(c => c.EmployeeModule) },

    // { path: 'addEmployee', loadComponent: () => import('./employee/add-employee/add-employee.component').then(c => c.AddEmployeeComponent) },
    //{ path: 'editEmployee/:identity', loadComponent: () => import('./employee/edit-employee/edit-employee.component').then(c => c.EditEmployeeComponent) },
    { path: 'login', loadComponent: () => import('./login/login.component').then(c => c.LoginComponent) },
    { path: 'addPosition', loadComponent: () => import('./position/add-position/add-position.component').then(c => c.AddPositionComponent) },
    { path: 'logout', loadComponent: () => import('./logout/logout.component').then(c => c.LogoutComponent) },
    //{path: 'exportDataToExel',loadComponent:()=>import('./export-data-to-excel/export-data-to-excel.component').then(c=>c.ExportDataToExcelComponent)},
    { path: '**', loadComponent: () => import('./not-found/not-found.component').then(c => c.NotFoundComponent) }

];

