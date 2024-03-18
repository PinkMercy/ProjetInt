import { Component, OnInit } from '@angular/core';
import { Imaterial } from '../model/imaterial';
import { MaterialModule } from '../material.module';
import { MaterialService } from '../service/material.service';
@Component({
  selector: 'app-list-material',
  templateUrl: './list-material.component.html',
  styleUrls: []
})

export class ListMaterialComponent implements OnInit {
  materials!:Imaterial[];
  constructor(private service:MaterialService){}
  ngOnInit(): void {
      this.service.getAllMaterials().subscribe((m)=>this.materials=m);
  }
  
}
