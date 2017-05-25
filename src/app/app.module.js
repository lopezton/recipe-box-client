"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var dashboard_component_1 = require("./dashboard.component");
var add_drink_component_1 = require("./drinks/add-drink.component");
var drink_detail_component_1 = require("./drinks/drink-detail.component");
var drink_list_view_component_1 = require("./drinks/drink-list-view.component");
var edit_drink_component_1 = require("./drinks/edit-drink.component");
var drink_service_1 = require("./drinks/drink.service");
var search_box_component_1 = require("./search-box.component");
var has_drink_name_pipe_1 = require("./pipes/has-drink-name.pipe");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            app_routing_module_1.AppRoutingModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            ng_bootstrap_1.NgbModule.forRoot()
        ],
        declarations: [
            app_component_1.AppComponent,
            dashboard_component_1.DashboardComponent,
            add_drink_component_1.AddDrinkComponent,
            edit_drink_component_1.EditDrinkComponent,
            drink_detail_component_1.DrinkDetailComponent,
            drink_list_view_component_1.DrinkListViewComponent,
            search_box_component_1.SearchBoxComponent,
            has_drink_name_pipe_1.HasDrinkNamePipe
        ],
        bootstrap: [app_component_1.AppComponent],
        providers: [
            drink_service_1.DrinkService
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map