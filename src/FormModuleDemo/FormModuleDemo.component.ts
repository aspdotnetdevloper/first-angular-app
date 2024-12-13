import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule  } from '@angular/common';
import { Observable } from "rxjs";
// HTTp request namespace
import { HttpClient, HttpClientModule  } from '@angular/common/http';
import { DropDownModel } from "../app/DropDownModel";
// import { Injectable } from '@angular/core';
import { JobTitleInterface } from "../Interface/JobTitle.Interface";
import { JobTitleService } from "../Service/JobTitle.Service";

@Component({
    selector :'app-form-demo',
    templateUrl : './FormModuleDemo.html',
    imports : [FormsModule,CommonModule,HttpClientModule],
    providers: [JobTitleService],
})

export class FormModuleDemoComponent{
  JobTitles = [
    { value: 1, label : 'Manager'},
    { value: 2, label : 'Programmer'},
    { value: 3, label : 'QA'},
    { value: 4, label : 'Director'},
];
  JobTitlesResponse : Observable<DropDownModel[]> = new Observable<DropDownModel[]>();
  // Constructor with dependency injection
  constructor(private service: JobTitleService) {
        // get http request
         this.JobTitlesResponse = this.service.getJobTitles();
         console.log(this.JobTitlesResponse);
  }

//   constructor(private http: HttpClient) {
//     this.http.get<DropDownModel[]>('http://localhost:5162/JobTitles')
//         .subscribe(
//             response => {
//                 this.JobTitlesResponse = response;
//             },
//             error=>{
//                 console.log(error);
//             }
//         )
//   }
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