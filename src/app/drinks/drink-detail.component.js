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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
require("rxjs/add/operator/switchMap");
var drink_service_1 = require("./drink.service");
var DrinkDetailComponent = (function () {
    function DrinkDetailComponent(drinkService, route, location) {
        this.drinkService = drinkService;
        this.route = route;
        this.location = location;
    }
    DrinkDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.drinkService.getDrink(+params['id']); })
            .subscribe(function (drink) { return _this.drink = drink; });
    };
    DrinkDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    return DrinkDetailComponent;
}());
DrinkDetailComponent = __decorate([
    core_1.Component({
        selector: 'drink-detail',
        templateUrl: './drink-detail.component.html',
        styleUrls: ['./drink-detail.component.css']
    }),
    __metadata("design:paramtypes", [drink_service_1.DrinkService,
        router_1.ActivatedRoute,
        common_1.Location])
], DrinkDetailComponent);
exports.DrinkDetailComponent = DrinkDetailComponent;
//# sourceMappingURL=drink-detail.component.js.map