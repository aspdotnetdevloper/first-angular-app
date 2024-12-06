import { Component, inject, Injectable } from "@angular/core";
import { CarService } from "./car.service";

@Component({
    selector:'app-car',
    template:'<h1> Constructor Method - dependency Injection demo : {{display}}</h1>'
})
export class Car2Component {
    
    display = '';

    constructor(carService : CarService){
        this.display = carService.getCars().join(',');
    }
}