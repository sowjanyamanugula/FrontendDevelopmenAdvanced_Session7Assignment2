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
var DetailComponent = (function () {
    function DetailComponent(currentRoute) {
        this.currentRoute = currentRoute;
    }
    DetailComponent.prototype.ngOnInit = function () {
        this.parameter_name = this.currentRoute.snapshot.params['name'];
        this.parameter_designation = this.currentRoute.snapshot.params['designation'];
        this.parameter_company = this.currentRoute.snapshot.params['companyName'];
    };
    DetailComponent = __decorate([
        core_1.Component({
            template: "<h2>This is detailed view for employee</h2>\n            <div>{{parameter_name}}\n              {{parameter_designation}}\n              {{parameter_company}}</div>\n\n             "
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute])
    ], DetailComponent);
    return DetailComponent;
}());
exports.DetailComponent = DetailComponent;
//# sourceMappingURL=detail.component.js.map