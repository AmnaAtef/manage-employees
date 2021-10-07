import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationAfterSubmit {
  constructor() { }
  afterSubmit(form){
    Object.keys(form.controls).forEach(field => { // {1}
        const control = form.get(field);            // {2}
        control.markAsTouched({ onlySelf: true });       // {3}
      });
  }
}