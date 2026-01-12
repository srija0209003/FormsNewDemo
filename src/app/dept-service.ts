import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Department } from '../dept';

@Injectable({
  providedIn: 'root',
})
export class DeptService {
  apiUrl:string="https://localhost:7267/api/Department";
  constructor(private http: HttpClient) {}
  DeptData:Department;
  getDepts(){
    return this.http.get(this.apiUrl);
  }
}
