import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';

@Component({
    selector :'app-form-demo',
    templateUrl : './FormModuleDemo.html',
    imports : [FormsModule,CommonModule]
})

export class FormModuleDemoComponent{
    JobTitles = [
        { value: 1, label : 'Manager'},
        { value: 2, label : 'Programmer'},
        { value: 3, label : 'QA'},
        { value: 4, label : 'Director'},
    ];
    Name ='harsh';
    EmailAddress ='';
    Telephone ='';
    Id =2;

        // in your component
    onSubmit(formValue: any) {
        console.log(formValue);
        alert(formValue);
        // submit form logic here
    }
}