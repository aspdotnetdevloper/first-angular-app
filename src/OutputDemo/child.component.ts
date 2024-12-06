import { Component, EventEmitter, Output, output } from "@angular/core";

@Component({
    selector :'app-child',
    template : '<p style="background-color: yellow;"> child component <button (click)="callme()">Click me</button></p> '
})

export class ChildOuputComponent {

    @Output() e1 = new EventEmitter<string>();

    callme(){
        this.e1.emit('button clicked');
    }
}