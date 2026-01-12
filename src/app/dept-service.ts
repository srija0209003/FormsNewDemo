import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Department } from '../dept';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DeptService {
  apiUrl:string="https://localhost:7267/api/Department";
  constructor(private http: HttpClient) {}
  DeptData:Department[]=[];
  getDepts():Observable<Department[]>
  {
    
    return this.http.get<Department[]>(this.apiUrl);
     
      // this.DeptData=data;;
    // return this.DeptData;
  }

   getDeptByID(id:string){
    return this.http.get<Department>("https://localhost:7267/api/Department/"+id);
   
  }
  updatedept(id:string,dname:string){
  }
  deleteDept(id:string){
  }
}
