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
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var drink_service_1 = require("./drink.service");
var DrinkListViewComponent = (function () {
    function DrinkListViewComponent(drinkService, router, modalService) {
        this.drinkService = drinkService;
        this.router = router;
        this.modalService = modalService;
    }
    DrinkListViewComponent.prototype.ngOnInit = function () {
        this.getDrinks();
    };
    DrinkListViewComponent.prototype.getDrinks = function () {
        var _this = this;
        this.drinkService.getDrinks().then(function (drinks) { return _this.drinks = drinks; });
    };
    DrinkListViewComponent.prototype.gotoDetails = function (drink) {
        var url = "/manage/drinks/" + drink.id + "/detail";
        this.router.navigateByUrl(url);
    };
    DrinkListViewComponent.prototype.gotoEditDrink = function (drink) {
    };
    DrinkListViewComponent.prototype.openModal = function (content) {
        this.modalService.open(content);
    };
    DrinkListViewComponent.prototype.deleteDrink = function (drink) {
        var _this = this;
        this.drinkService.delete(drink.id)
            .then(function () {
            _this.drinks = _this.drinks.filter(function (d) { return d !== drink; });
        });
    };
    return DrinkListViewComponent;
}());
DrinkListViewComponent = __decorate([
    core_1.Component({
        selector: 'drink-list-view',
        templateUrl: './drink-list-view.component.html',
        styleUrls: ['./drink-list-view.component.css'],
    }),
    __metadata("design:paramtypes", [drink_service_1.DrinkService,
        router_1.Router,
        ng_bootstrap_1.NgbModal])
], DrinkListViewComponent);
exports.DrinkListViewComponent = DrinkListViewComponent;
//# sourceMappingURL=drink-list-view.component.js.map