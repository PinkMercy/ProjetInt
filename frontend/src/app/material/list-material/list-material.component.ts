import { Component, OnInit } from '@angular/core';
import { MaterialService } from '../service/material.service';
import { Imaterial } from '../model/imaterial';
@Component({
  selector: 'app-list-material',
  templateUrl: './list-material.component.html',
  styleUrls: []
})

export class ListMaterialComponent implements OnInit{
  
  materials!:Imaterial[];
  constructor(private service:MaterialService){}
  ngOnInit(): void {
      this.service.getAllMaterials().subscribe((m)=>this.materials=m);
  }
  deleteMaterial(id:number){
    this.service.deleteMaterial(id).subscribe((response)=>{
      this.ngOnInit();
    })
  }
}
