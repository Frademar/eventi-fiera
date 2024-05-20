import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FieraService {

  
  constructor(private http : HttpClient) {}

  estraiFiere(){
    return this.http.get("http://localhost:8080/api/fiera/visualizzaTutteFiere");
  }
}
