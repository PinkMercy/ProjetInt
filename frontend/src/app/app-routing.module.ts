import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'auth',loadChildren:()=>import('./auth/auth.module' ).then(m=>m.AuthModule)},
  {path:'material',loadChildren:()=>import('./material/material.module').then(m=>m.MaterialModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
