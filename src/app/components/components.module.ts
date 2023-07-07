import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { PipesModule } from '../pipes/pipes.module';

import { IncrementadorComponent } from './incrementador/incrementador.component';

import { InputDebounceComponent } from './inputDebounce/inputDebounce.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    PipesModule,

    FormsModule,
    ReactiveFormsModule,

  ],
  declarations: [

    IncrementadorComponent,

    InputDebounceComponent,

  ],
  exports: [

    IncrementadorComponent,

    InputDebounceComponent,


  ],
  providers: [
  ]
})
export class ComponentsModule { }
