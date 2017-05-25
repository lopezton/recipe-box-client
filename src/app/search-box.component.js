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
var SearchBoxComponent = (function () {
    function SearchBoxComponent() {
        this.update = new core_1.EventEmitter();
    }
    SearchBoxComponent.prototype.ngOnInit = function () {
        this.update.emit('');
    };
    return SearchBoxComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SearchBoxComponent.prototype, "searchLabelText", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SearchBoxComponent.prototype, "searchPlaceholderText", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SearchBoxComponent.prototype, "update", void 0);
SearchBoxComponent = __decorate([
    core_1.Component({
        selector: 'search-box',
        template: "\n    <div class=\"search-box\">\n      <div class=\"form-group\">\n        <label for=\"search-text\">{{searchLabelText}}</label>\n        <input #searchText \n          name=\"search-text\" \n          type=\"text\" \n          class=\"form-control\" \n          placeholder=\"{{searchPlaceholderText}}\"\n          (input)=\"update.emit(searchText.value)\">\n      </div>\n    </div>\n  "
    })
], SearchBoxComponent);
exports.SearchBoxComponent = SearchBoxComponent;
//# sourceMappingURL=search-box.component.js.map