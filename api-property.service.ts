import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiStudentsService {
  apiURL = "https://630c3f8e83986f74a7bbcf32.mockapi.io/Students";
  constructor(private http:HttpClient) { }

  getAllStudents(){
    return this.http.get(this.apiURL);
  }

  getStudentById(id:any){
    return this.http.get(this.apiURL+'/'+id);
  }

  delete(id:any){
    return this.http.delete(this.apiURL+'/'+id);
  }

  insert(form:any){
    return this.http.post(this.apiURL,form);
  }

  update(id:any,form:any){
    return this.http.put(this.apiURL+'/'+id,form);
  }
}
