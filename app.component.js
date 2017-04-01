"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
        this.existing_empList = [
            { name: 'Sowjanya', designation: 'SSE', companyName: 'Techsophy' },
            { name: 'Saranya', designation: 'SSE', companyName: 'Techsophy1' },
            { name: 'Devi', designation: 'SE', companyName: 'Techsophy2' },
        ];
    }
    AppComponent.prototype.onSelect = function (emp) {
        this.router.navigate(['/details', emp.name, emp.designation, emp.companyName]);
        //this.router.navigate(['/details',emp.designation]);
        //this.router.navigate(['/details',emp.companyName]);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<h1>Routing App</h1>\n             <ul *ngFor=\"let emp of existing_empList\">\n                <li (click)=\"onSelect(emp)\"> <a routerLink=\"/details/{{emp.name}}/{{emp.designation}}/{{emp.companyName}}\" routerLinkActive=\"active\">{{emp.name}}</a></li>\n             </ul>\n              \n              <router-outlet></router-outlet>"
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map