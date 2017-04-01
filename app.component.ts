import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'my-app',
  template: `<h1>Routing App</h1>
             <ul *ngFor="let emp of existing_empList">
                <li (click)="onSelect(emp)"> <a routerLink="/details/{{emp.name}}/{{emp.designation}}/{{emp.companyName}}" routerLinkActive="active">{{emp.name}}</a></li>
             </ul>
              
              <router-outlet></router-outlet>`
    
})
export class AppComponent  {
  constructor(private router:Router){}
        existing_empList: any = [
{name: 'Sowjanya', designation: 'SSE', companyName: 'Techsophy'},
{name: 'Saranya', designation: 'SSE', companyName: 'Techsophy1'},
{name: 'Devi', designation: 'SE', companyName: 'Techsophy2'},
];
onSelect(emp){
  this.router.navigate(['/details',emp.name,emp.designation,emp.companyName]);
  //this.router.navigate(['/details',emp.designation]);
  //this.router.navigate(['/details',emp.companyName]);
}
  }



