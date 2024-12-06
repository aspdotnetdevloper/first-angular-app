import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector :'app-form-demo',
    templateUrl : './FormModuleDemo.html',
    imports : [FormsModule]
})

export class FormModuleDemoComponent{
    Name ='harsh'
}