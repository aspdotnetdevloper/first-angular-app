import { Injectable } from "@angular/core";

@Injectable({
    providedIn : 'root'
})

export class CarService {
    cars = ['alto','benz','desire'];

    getCars() : string[]{
        return this.cars;
    }

    getCar(Id:number){
        return this.cars[Id];
    }
}