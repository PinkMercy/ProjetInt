import { Injectable } from '@angular/core';
import { Imaterial } from '../model/imaterial';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
const BASE_URL = ["http://localhost:8080/"];
export class MaterialService {
  getAllMaterials():Observable<Imaterial[]>{
    return this.http.get<Imaterial[]>(BASE_URL+'api/material');
  }

  constructor(private http:HttpClient) { }

addMaterial(a:Imaterial):Observable<Imaterial> {
    return this.http.post<Imaterial>(BASE_URL + "api/material",a);
  }

updateMaterial(a:Imaterial):Observable<Imaterial> {
    return this.http.put<Imaterial>(BASE_URL + "api/material/" + a.id,a);
  }

deleteMaterial(a:Imaterial):Observable<Imaterial> {
    return this.http.delete<Imaterial>(BASE_URL + "api/material/" + a.id);
  }
  


}
