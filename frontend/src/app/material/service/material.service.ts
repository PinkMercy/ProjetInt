import { Injectable } from '@angular/core';
import { Imaterial } from '../model/imaterial';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient} from '@angular/common/http';
import { AuthService } from 'src/app/auth/service/auth.service';
const BASE_URL = ["http://localhost:8080/"];
@Injectable({
  providedIn: 'root'
})

export class MaterialService {
  headers= this.service.createAuhtorizationHeader()
  
  getAllMaterials():Observable<Imaterial[]>{
    return this.http.get<Imaterial[]>(BASE_URL+'api/materiel',{headers:this.headers!});
  }

  constructor(private http:HttpClient,private service:AuthService) { }

addMaterial(a:Imaterial):Observable<Imaterial> {
    return this.http.post<Imaterial>(BASE_URL + "api/materiel",a,{headers:this.headers!});
  }

updateMaterial(a:Imaterial):Observable<Imaterial> {
    return this.http.put<Imaterial>(BASE_URL + "api/materiel/" + a.id,a,{headers:this.headers!});
  }

deleteMaterial(a:Imaterial):Observable<Imaterial> {
    return this.http.delete<Imaterial>(BASE_URL + "api/materiel/" + a.id,{headers:this.headers!});
  }
  


}
