import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 

import {
 
  ExcelService, 
  SidebarService,
  LayoutService,
  LoginGuardGuard,
  AuthGuard, 
  LoginService,
  VerificaTokenGuard, 
  InterceptorService
} from './service.index';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    ExcelService, 
    SidebarService,
    LayoutService,
    LoginGuardGuard,
    AuthGuard, 
    LoginService,
    VerificaTokenGuard, 
    InterceptorService
  ],
  declarations: []
})
export class ServiceModule { }
