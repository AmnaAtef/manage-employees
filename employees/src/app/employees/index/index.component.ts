import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../shared/services/api';
import { Employee } from '../../shared/models';
import {ConfirmationService} from 'primeng/api';
import {Message} from 'primeng/api';
import {MessageService} from 'primeng/api';
import {DialogService} from 'primeng/dynamicdialog';
import {AddComponent} from '../add/add.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  providers: [ConfirmationService, MessageService, DialogService],
})
export class IndexComponent implements OnInit {
   
  list: Employee[];
  totalRecords: number;
  msgs: Message[] = [];
  selectedEmployees: Employee[];

  constructor(
    private service: EmployeeService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    public dialogService: DialogService
  ) { }

  ngOnInit(): void {
    this.getAllEmployees();
  }
  getAllEmployees(){
    this.service.getallEmployeedetails().subscribe(res =>{
      this.list = res
    } )
  }
  deleteSelectedEmployees() {
    this.confirmationService.confirm({
        message: 'Are you sure you want to delete the selected Employees?',
        header: 'Confirm',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.list = this.list.filter(val => !this.selectedEmployees.includes(val));
            this.selectedEmployees = null;
            this.messageService.add({severity:'success', summary: 'Successful', detail: 'Employees Deleted', life: 3000});
        }
    });
}
  deleteEmployee(id,index) {
    this.confirmationService.confirm({
      message: 'Do you want to delete this employee?',
      header: 'Delete Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.service.deleteEmployeeDetails(id).subscribe(res=>{
              // if(res.status==200){
                this.list.splice(index ,1)
                this.messageService.add({severity:'success', summary:'Successful', detail:'Employee Deleted'});
              // }
            })  
          
      },
      reject: () => {
        this.messageService.add({severity:'info', summary:'Rejected', detail:'You have rejected'});
      }
  });
}

// deleteEmployee(id: number) {  
//       this.confirmationService.confirm({
//           message: 'Do you want to delete this employee?',
//           header: 'Delete Confirmation',
//           icon: 'pi pi-exclamation-triangle',
//           accept: () => {
//             let index= this.list.findIndex(e => e.id === id)
//             if(index !== -1){
//               this.list.splice(index,1)
//             }
//             this.messageService.add({severity:'error', summary:'Deleted Successfully', detail:'Employee Deleted'});
                   
//           }
//       });
 
// }
addEmployee(){
  const ref = this.dialogService.open(AddComponent, {
    header: 'Add Employee',
   
    width: '30%'
});
}

}
