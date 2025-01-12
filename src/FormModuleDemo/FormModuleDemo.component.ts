import { Component, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule  } from '@angular/common';
import { Observable } from "rxjs";
import { DropDownModel } from "../app/DropDownModel";
import { JobTitleService } from "../Service/JobTitle.Service";

@Component({
    selector :'app-form-demo',
    templateUrl : './FormModuleDemo.html',
    imports : [FormsModule,CommonModule],
    providers: [JobTitleService],
})

export class FormModuleDemoComponent implements OnChanges, OnInit {

    @Input() exampleInput: string;

    Name ='harsh';
    EmailAddress ='';
    Telephone ='';
    Id =2; 
    
  JobTitles = [
    { value: 1, label : 'Manager'},
    { value: 2, label : 'Programmer'},
    { value: 3, label : 'QA'},
    { value: 4, label : 'Director'},
  ];

  JobTitlesResponse : Observable<DropDownModel[]>;

    // Constructor with dependency injection
  constructor(private service: JobTitleService) {
    // get http request
    console.log("Constructor called");
    this.JobTitlesResponse = new Observable<DropDownModel[]>();
    this.exampleInput = "harsh";
  }
  
  ngOnChanges(changes: SimpleChanges): void {
     console.log("OnChanges called"); 
     console.log(changes);
  }

  ngOnInit(): void {
    // More complex initialization task
    console.log("OnInit Called");
    this.JobTitlesResponse = this.service.getJobTitles();
    // console.log(this.JobTitlesResponse);
  }
    
  // in your component
  onSubmit(formValue: any) {
    console.log(formValue);
    alert(formValue);
    // submit form logic here
  }
}