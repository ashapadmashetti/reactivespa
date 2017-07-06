"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ServiceComponent = (function () {
    function ServiceComponent() {
    }
    return ServiceComponent;
}());
ServiceComponent = __decorate([
    core_1.Component({
        selector: 'service',
        template: "<h1 class=\"mycolor\">We offer Corporate Training services</h1>\n  <h3 >\n   <h3 class=\"well text-danger\">Technologies</h3>\n   <ul>\n      <li>Dotnet Core</li>\n      <li>Angular js and Angular 2.0/4.0</li>\n      <li>Node JS </li>\n   </ul>\n   </h3>\n  ",
        styles: ['.mycolor {background: cyan}']
    })
], ServiceComponent);
exports.ServiceComponent = ServiceComponent;
//# sourceMappingURL=service.component.js.map