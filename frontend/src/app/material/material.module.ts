import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialRoutingModule } from './material-routing.module';
import { ListMaterialComponent } from './list-material/list-material.component';
import { AddMaterialComponent } from './add-material/add-material.component';


@NgModule({
  declarations: [
    ListMaterialComponent,
    AddMaterialComponent
  ],
  imports: [
    CommonModule,
    MaterialRoutingModule
  ]
})
export class MaterialModule { }
