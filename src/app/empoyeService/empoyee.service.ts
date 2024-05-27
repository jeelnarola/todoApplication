import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpoyeeService {
  isEdite:boolean=false;
  Empoyebutton:string="Submit";
  URL:string="http://localhost:3000"
  constructor(private _http: HttpClient) { }
  
  postEmpoye(data:any) {
    return this._http.post(`${this.URL}/User`,data)
  }

  getEmpoyee(){
    return this._http.get(`${this.URL}/User`)
  }

  deleteEmpoye(id:string){
    return this._http.delete(`${this.URL}/User/${id}`)
  }

  getsingleEmpoye(id:string){
    return this._http.get(`${this.URL}/User/${id}`)
  }
  putEmpoye(id:string,data:any){
    return this._http.put(`${this.URL}/User/${id}`,data)
  }
}
