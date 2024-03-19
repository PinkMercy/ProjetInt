import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListMaterialComponent } from './list-material/list-material.component';
import { AddMaterialComponent } from './add-material/add-material.component';

const routes: Routes = [
  { path : '' , component:ListMaterialComponent},
  { path : 'add',component:AddMaterialComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialRoutingModule {
  

 }
