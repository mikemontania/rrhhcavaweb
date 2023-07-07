import { RouterModule, Routes } from '@angular/router';
 
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { VerificaTokenGuard } from '../services/service.index';
   
 


const childRoutes: Routes = [
    { path: '', component: DashboardComponent, 
   // canActivate: [VerificaTokenGuard], 
    data: { titulo: 'Dashboard' } },
    { path: 'dashboard', component: DashboardComponent, 
   // canActivate: [VerificaTokenGuard], 
    data: { titulo: 'Dashboard' } },
  
]
 
@NgModule({
  imports: [ RouterModule.forChild(childRoutes) ],
  exports: [ RouterModule ]
})
export class ChildRoutesModule { }
