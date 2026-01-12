import { Component, OnInit } from '@angular/core';
import { DeptService } from '../dept-service';
import { Department } from '../../dept';

@Component({
  selector: 'app-dept-working',
  standalone: false,
  templateUrl: './dept-working.html',
  styleUrl: './dept-working.css',
})
export class DeptWorking implements OnInit {
  deptarr:Department[]=[];
  deptId:string;
  deptname:string;
  constructor(private deptService: DeptService) { }
  ngOnInit(): void {
    // console.log(this.deptService.getDepts());
   
  }

  showAllDepts(){


    // alert("In show all depts");
     this.deptService.getDepts().subscribe(data=>{
      this.deptarr=data;
    });
  }
  callbyid(id:string){
    this.deptService.getDeptByID(id).subscribe(data=>{
      console.log(data);
    });
  }
  updateDept(id:string,dname:string){
  }
  deleteDept(id:string){
  }

}
