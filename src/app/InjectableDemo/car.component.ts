import { Component, inject, Injectable } from "@angular/core";
import { CarService } from "./car.service";

@Component({
    selector:'app-car',
    template:'<h1> Inject Method - dependency Injection demo : {{display}}</h1>'
})
export class CarComponent {
    
    display = '';
    carService = inject(CarService);

    constructor(){
        this.display = this.carService.getCars().join(',');
    }
}