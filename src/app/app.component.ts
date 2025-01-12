import { Component } from "@angular/core";
import { forwardRef } from "@angular/core";
import { FormsModule } from "@angular/forms";
import {RouterOutlet , RouterLink} from '@angular/router';

@Component({
  selector:'app-root',
  template: '| <a routerLink="/LifeCycleDemo">Component Life Hooks Demo</a> |<nav><a routerLink="/">Home</a>| <a routerLink="formmoduledemo">Forms Module Demo</a>| <a routerLink="outputdemo">Output & EventEmitter Demo</a>| <a routerLink="pipedemo">Pipe Demo</a> | <a routerLink="/user">User</a> | <a routerLink="/injectmethod">Inject Method</a> | <a routerLink="/constructormethod">Constructor Method</a>  </nav><router-outlet />',
  imports: [RouterOutlet,RouterLink],
  styles:':host{color : #a144eb}',
  
})
export class AppComponent{}

@Component({
  selector:"app-firstform",
  imports:[FormsModule],
  template:" <p>Framework Name : {{frameworkName}} <button (click)='showFramework()' >Tell Framework</button> </p> <p> Enter Framework Name : <input type='text' [(ngModel)]='frameworkName' /> </p>"
})

export class FirstFormComponent{
  frameworkName = "Angular";

  showFramework(){
      alert(this.frameworkName)
  }
}

@Component({
  selector: 'app-user',
  template:'Username is {{UserName}} @if (IsServerRunning) {<p>Yes, running</p>} @else { <p> Not running </p> } <div><app-forloop/></div>',
  imports: [forwardRef(() => ForLoopComponent)]
})

export class UserComponent{
  UserName = 'Harsh Sharma';
  IsServerRunning = false;
}


@Component({
  selector:'app-forloop',
  template:'@for (User of UserList; track User.Id) { <p>{{ User.Name }}</p>}'
})
export class ForLoopComponent{
  UserList = [{ Id : 1, Name: 'Harsh Sharma'},{ Id:2, Name:'Ashutosh Sharma'}, {Id:3, Name:'Anuja Sharma'},
     {Id:4, Name:'Anuradha Sharma'} , {Id:5, Name:'Suresh Sharma'}] ;
}

@Component({
  selector: 'app-propbind',
  template: '<input type="text" value="Enter value" [disabled]="IsDisabled" />'
})
export class PropertyBindingComponent{
  IsDisabled = false;
}

@Component({
  selector: 'app-eventbinding',
  template: ' <p>{{message}}<p> <input type="button" value="Click Me" (click)="SayHello()" />'
})
export class EventBindingComponent{
  message = '';

  SayHello() {
    this.message = "Hello World";
  }
}

// @Component({
//   selector:'app-root',
//   template: '<section> <p> <app-firstform /> </p> <p>paragraph tag</p> <app-user/> <p> <app-propbind/> </p> <app-eventbinding/> </section>  ',
//   imports: [UserComponent, PropertyBindingComponent, EventBindingComponent, FirstFormComponent],
//   styles:':host{color : #a144eb}', 
// })





