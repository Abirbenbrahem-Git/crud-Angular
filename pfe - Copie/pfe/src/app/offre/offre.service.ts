import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { offre } from './offre';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OffreService {

  constructor(private httpClient:HttpClient) { }

  getoffres(): Observable<offre[]>{
    return this.httpClient.get<offre[]>("http://localhost:8080/offre/all");
  }

  saveProduct(postData: any) {
    return this.httpClient.post("http://localhost:8080/offre", postData);
  }

  deleteOffre(id_offre:number){
    return this.httpClient.delete(`http://localhost:8080/offre/id/${id_offre}`);
  }

  updateOffre(postData: any, id_offre: number): Observable<any> {
    return this.httpClient.put(`http://localhost:8080/offre/${id_offre}`, postData);
  }
    
}
