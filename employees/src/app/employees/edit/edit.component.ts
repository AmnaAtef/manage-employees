import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationAfterSubmit } from '../../shared/plugins';
import { Employee } from '../../shared/models/employee.model';
import { EmployeeService } from '../../shared/services/api';
import {MessageService} from 'primeng/api';
import {DynamicDialogConfig} from 'primeng/dynamicdialog';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  providers: [MessageService]
})
export class EditComponent implements OnInit {

  submitted = false;
  Employee = new Employee;
  EmployeeForm: FormGroup;
  showData;
  id;
  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService, 
    private isFormValid: ValidationAfterSubmit,
    private messageService: MessageService,
    public config: DynamicDialogConfig

     ) { 
      console.log(config.data)
    }

  ngOnInit(): void {
    this.initForm()
  }

  private initForm() {
    this.EmployeeForm = this.fb.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{3}$")]],
      phone:[null,[ Validators.required, Validators.pattern("01(0|1|2|5)[0-9]{8}$")]],
      address: [null, Validators.required]

    });
    if(this.config.data.id){
      this.showDataForm(this.config.data.id)
    }
  }
  get f() {
    return this.EmployeeForm.controls;
  }
  showDataForm(id) {
    this.employeeService.getEmployeeById(id).subscribe(data => {
      this.showData = data
      this.EmployeeForm.patchValue({
        name: this.showData.name,
        address: this.showData.address,
        email: this.showData.email,
        phone: this.showData.phone
      });

    });
  }
  editEmployee() {
    this.Employee = this.EmployeeForm.value;
    this.isFormValid.afterSubmit(this.EmployeeForm);
    this.submitted = true;

    if (this.EmployeeForm.valid == true) {
      this.employeeService.updateEmployee(this.config.data.id,this.Employee).subscribe(res => {
        // if (res.status == 200) {
          this.messageService.add({severity:'success',
          summary: 'Success', detail: 'Employee Updated Successfully'});
          setTimeout(() =>{
            window.location.reload();
          }, 2000);
         
        // }
       
        // else {
          // this.sweetAlert.afterSubmit('false', 'Please Check Your Feild Again')
        
        // }
      })
    }
  }
}
