import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule  } from '@angular/common';
// HTTp request namespace
import { HttpClient, HttpClientModule  } from '@angular/common/http';
import { DropDownModel } from "../app/DropDownModel";
import { Injectable } from '@angular/core';

@Component({
    selector :'app-form-demo',
    templateUrl : './FormModuleDemo.html',
    imports : [FormsModule,CommonModule,HttpClientModule]
})

export class FormModuleDemoComponent{
  JobTitles = [
    { value: 1, label : 'Manager'},
    { value: 2, label : 'Programmer'},
    { value: 3, label : 'QA'},
    { value: 4, label : 'Director'},
];
JobTitlesResponse : DropDownModel[] = [];
  // Constructor with dependency injection
  constructor(private http: HttpClient) {
        // get http request
        this.http.get<DropDownModel[]>('http://localhost:5162/JobTitles')
        .subscribe(
            response => {
                this.JobTitlesResponse = response;
            },
            error=>{
                console.log(error);
            }
        )
  }
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