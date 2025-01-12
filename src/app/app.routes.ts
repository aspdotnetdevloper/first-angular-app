import { Routes } from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {UserComponent} from '../user/user.component';
import { CarComponent } from './InjectableDemo/car.component';
import { Car2Component } from './InjectableDemo/car2.component';
import { PipeDemoComponent } from './PipeDemo/PipeDemo.component';
import { ParentOutputComponent } from '../OutputDemo/parent.component';
import { FormModuleDemoComponent } from '../FormModuleDemo/FormModuleDemo.component';
import { LifeHooksComponent } from '../Component/LifeHooks.component';

export const routes: Routes = [
  {
    path: 'LifeCycleDemo',
    title: 'ComponentLife Hooks demo',
    component: LifeHooksComponent,
  },
      {
        path: '',
        title: 'App Home Page',
        component: HomeComponent,
      },
      {
        path: 'user',
        title: 'App User Page',
        component: UserComponent,
      },
      {
        path: 'injectmethod',
        title: 'Inject Method - dependency Injection demo',
        component: CarComponent,
      },
      {
        path: 'constructormethod',
        title: 'Constructor Method - dependency Injection demo',
        component: Car2Component,
      },
      {
        path: 'pipedemo',
        title: 'Pipe demo',
        component: PipeDemoComponent,
      },
      {
        path: 'pipeparameterdemo',
        title: 'Pipe Parameter demo',
        component: PipeDemoComponent,
      },
      {
        path: 'outputdemo',
        title: 'Output demo',
        component: ParentOutputComponent,
      },
      {
        path: 'formmoduledemo',
        title: 'Output demo',
        component: FormModuleDemoComponent,
      },
      
];
