import { PipesModule } from '../pipes/pipes.module';
import { LayoutModule } from '../layout/layout.module';
import { ComponentsModule } from '../components/components.module';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// pages
 

@NgModule({
  declarations: [
    
    DashboardComponent,
    PagesComponent,
     
  ],
  exports: [
    DashboardComponent,
    PagesComponent],
  imports: [
    RouterModule ,
    CommonModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule, 
    ComponentsModule,
    

  ],
  providers: [
    ]
})
export class PagesModule { }
