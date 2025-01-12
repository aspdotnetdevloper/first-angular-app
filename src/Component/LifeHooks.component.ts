import { AfterViewInit, Component, ElementRef, ViewChild } from "@angular/core";

@Component({
    selector :'app-life-hook-demo',
    templateUrl : './LifeHooks.html',
})

export class LifeHooksComponent implements AfterViewInit {
    @ViewChild('childDiv', { static: false }) childDiv?: ElementRef;

    ngAfterViewInit() {
        console.log(this.childDiv?.nativeElement);
      }
    
}