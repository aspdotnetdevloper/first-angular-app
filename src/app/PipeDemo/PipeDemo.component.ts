import { Component } from "@angular/core";
import { UpperCasePipe, LowerCasePipe, DatePipe, CurrencyPipe, DecimalPipe } from "@angular/common";

@Component({
    selector:'app-pipedemo',
    imports:[UpperCasePipe, LowerCasePipe, DatePipe, CurrencyPipe],
    template:"<p> Pipe uppercase demo : {{display2 | uppercase}}</p><p> Pipe lowercase demo : {{display | lowercase}}</p> <p> Pipe date parameter demo : {{dateVar | date:'medium' }} </p> <p> Pipe currency parameter demo : {{cost | currency }} </p> <p> Pipe parameter demo : {{decNumber}} </p>"
})
export class PipeDemoComponent {
    
    display = 'HARSH SHARMA';

    display2 ='ashutosh sharma'

    dateVar = new Date(2024,12,4);

    cost = 200;

    decNumber = 111.11;

}