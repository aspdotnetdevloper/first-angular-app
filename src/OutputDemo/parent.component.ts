import { Component, EventEmitter, Output } from "@angular/core";
import { ChildOuputComponent } from "./child.component";

@Component({
    selector :'app-parent',
    template : ' <p style="background-color: orange;">Parent component <app-child (e1)="callParentMethod($event)"></app-child> End of parent component</p> ',
    imports: [ChildOuputComponent]
})

export class ParentOutputComponent {
    callParentMethod(e: any){
        alert(e);
    }
}