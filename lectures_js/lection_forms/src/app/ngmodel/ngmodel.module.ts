import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgmodelComponent } from './ngmodel.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [NgmodelComponent]
})
export class NgmodelModule { }
