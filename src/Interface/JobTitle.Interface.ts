import { Observable } from "rxjs";
import { DropDownModel } from "../app/DropDownModel";
// user.interface.ts
export interface JobTitleInterface 
  {
    getJobTitles(): Observable<DropDownModel[]>;
  }