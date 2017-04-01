import { Component,OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
 
  template: `<h2>This is detailed view for employee</h2>
            <div>{{parameter_name}}
              {{parameter_designation}}
              {{parameter_company}}</div>

             `
    
})
export class DetailComponent implements OnInit {
   constructor(public currentRoute:ActivatedRoute) { }
   parameter_name:any;
 parameter_designation:any;
parameter_company:any;
  ngOnInit(){
    this.parameter_name=this.currentRoute.snapshot.params['name'];
     this.parameter_designation=this.currentRoute.snapshot.params['designation'];
      this.parameter_company=this.currentRoute.snapshot.params['companyName'];
  }
  }



