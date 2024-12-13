import { Observable } from "rxjs";
import { DropDownModel } from "../app/DropDownModel";
// user.interface.ts
export interface JobTitleInterface {
    // id: number;
    // name: string;
    // email: string;
    getJobTitles(): Observable<DropDownModel[]>;
  }