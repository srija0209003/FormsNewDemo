import { Component, OnInit } from '@angular/core';
import { DeptService } from '../dept-service';

@Component({
  selector: 'app-dept-working',
  standalone: false,
  templateUrl: './dept-working.html',
  styleUrl: './dept-working.css',
})
export class DeptWorking implements OnInit {
  constructor(private deptService: DeptService) { }
  ngOnInit(): void {
    console.log(this.deptService.getDepts());
  }
}
