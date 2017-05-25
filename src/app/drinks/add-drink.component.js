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
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var drink_1 = require("./drink");
var drink_service_1 = require("./drink.service");
var ingredient_1 = require("./ingredient");
var AddDrinkComponent = (function () {
    function AddDrinkComponent(drinkService, location) {
        this.drinkService = drinkService;
        this.location = location;
        this.drink = new drink_1.Drink();
        this.formErrors = {
            'name': '',
            'imageUrl': '',
            'description': ''
        };
        this.validationMessages = {
            'name': { 'required': 'Name is required.' },
            'imageUrl': { 'required': 'Image URL is required.' },
            'description': { 'required': 'Description is required.' }
        };
        this.title = 'Add a Drink';
    }
    AddDrinkComponent.prototype.addNewIngredient = function () {
        this.drink.ingredients.push(new ingredient_1.Ingredient());
    };
    AddDrinkComponent.prototype.removeIngredient = function (ingredient) {
        this.drink.ingredients = this.drink.ingredients.filter(function (i) { return i !== ingredient; });
    };
    AddDrinkComponent.prototype.trackByIdx = function (index, obj) {
        return index;
    };
    AddDrinkComponent.prototype.onSubmit = function () {
        var _this = this;
        this.drink.ingredients = this.drink.ingredients.filter(function (ingredient) { return ingredient.name; });
        this.drinkService.create(this.drink).then(function () { return _this.goBack(); });
    };
    AddDrinkComponent.prototype.goBack = function () {
        this.location.back();
    };
    AddDrinkComponent.prototype.ngAfterViewChecked = function () {
        this.formChanged();
    };
    AddDrinkComponent.prototype.formChanged = function () {
        var _this = this;
        if (this.currentForm === this.drinkForm) {
            return;
        }
        this.drinkForm = this.currentForm;
        if (this.drinkForm) {
            this.drinkForm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
        }
    };
    AddDrinkComponent.prototype.onValueChanged = function (data) {
        if (!this.drinkForm) {
            return;
        }
        var form = this.drinkForm.form;
        for (var field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    AddDrinkComponent.prototype.hasErrors = function () {
        for (var field in this.formErrors) {
            if (this.formErrors[field] !== '') {
                return true;
            }
        }
        return false;
    };
    return AddDrinkComponent;
}());
__decorate([
    core_1.ViewChild('drinkForm'),
    __metadata("design:type", forms_1.NgForm)
], AddDrinkComponent.prototype, "currentForm", void 0);
AddDrinkComponent = __decorate([
    core_1.Component({
        selector: 'add-drink',
        templateUrl: './drink-form.html',
        styleUrls: ['./drink-form.css']
    }),
    __metadata("design:paramtypes", [drink_service_1.DrinkService,
        common_1.Location])
], AddDrinkComponent);
exports.AddDrinkComponent = AddDrinkComponent;
//# sourceMappingURL=add-drink.component.js.map