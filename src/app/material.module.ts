import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule} from '@angular/material/select'


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    MatButtonModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule
  ]
})
export class MaterialModule { }
