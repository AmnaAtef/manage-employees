import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationAfterSubmit } from '../../shared/plugins';
import { Employee } from '../../shared/models/employee.model';
import { Observable, from } from 'rxjs';
import { EmployeeService } from '../../shared/services/api';
import {MessageService} from 'primeng/api';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
  providers: [MessageService]
})
export class AddComponent implements OnInit {

  submitted = false;
  Employee = new Employee;
  EmployeeForm: FormGroup;
 
  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService, 
    private isFormValid: ValidationAfterSubmit,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.initForm()
  }

  private initForm() {
    this.EmployeeForm = this.fb.group({
      name: [null, [Validators.required, Validators.pattern("[a-zA-Z][a-zA-Z ]{2,}")]],
      email: [null, [Validators.required, Validators.email, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{3}$")]],
      mobile:[null,[ Validators.required, Validators.pattern("01(0|1|2|5)[0-9]{8}$")]],
      address: [null, Validators.required]

    });
   
    // this.contactForm.patchValue({
    //   name: '',
    //   email: '',
    //   subject: '',
    //   message: ''
    // });
  }
  get f() {
    return this.EmployeeForm.controls;
  }

  addEmployee() {

    this.Employee = this.EmployeeForm.value;
    this.isFormValid.afterSubmit(this.EmployeeForm);
    this.submitted = true;

    if (this.EmployeeForm.valid == true) {
      this.employeeService.createEmployee(this.Employee).subscribe(res => {
        if (res.status == 200) {
          // this.sweetAlert.afterSubmit('true', );
      
          // this.contactForm.patchValue({
          //   name: null,
          //   email: null,
          //   subject: null,
          //   message: null
          // });

          // after reset disable error message
          this.submitted = false;

          this.EmployeeForm.reset()
          this.messageService.add({severity:'success',
          summary: 'Success', detail: 'Employee added Successfully'});
        }
       
        else {
          // this.sweetAlert.afterSubmit('false', 'Please Check Your Feild Again')
        
        }
      })

    }
  }

}
