// Define a class that implements the interface
import { Injectable } from '@angular/core';
import { JobTitleInterface } from "../Interface/JobTitle.Interface";
// HTTp request namespace
import { HttpClient, HttpClientModule  } from '@angular/common/http';
import { DropDownModel } from "../app/DropDownModel";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class JobTitleService implements JobTitleInterface {
    private httpRequest: HttpClient;
    private apiUrl = 'http://localhost:5162/JobTitles';
  
    constructor(private http: HttpClient) {
      this.httpRequest = http;
    }
  
    public getJobTitles(): Observable<DropDownModel[]> {
      // get http request
      return this.httpRequest.get<DropDownModel[]>(this.apiUrl);
    }
  }