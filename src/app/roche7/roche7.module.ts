import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Roche7Component } from './roche7.component';
import { FormsModule } from '@angular/forms';
import { BugsModule } from '../bugs/bugs.module';


@NgModule({
  declarations: [Roche7Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    BugsModule
  ],
})
export class Roche7Module { }
