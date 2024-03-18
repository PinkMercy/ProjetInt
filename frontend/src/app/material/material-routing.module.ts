import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListMaterialComponent } from './list-material/list-material.component';

const routes: Routes = [
  { path : '' , component:ListMaterialComponent},
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialRoutingModule {
  

 }
