import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  constructor(private empService: EmployeeService) { }

  ngOnInit(): void {
  }

  onSubmit(data){
    this.empService.createEmployee(data);
    console.log(data);
  }

}