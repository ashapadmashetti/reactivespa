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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ShowComponent = (function () {
    function ShowComponent(route) {
        this.route = route;
        this.name = route.snapshot.params['selected'];
        //{path:'show/:selected',component:ShowComponent},
    }
    return ShowComponent;
}());
ShowComponent = __decorate([
    core_1.Component({
        selector: 'show',
        template: "<h1 class=\"mycolor\">\n               You have selected {{name}}\n             </h1>",
        styles: ['.mycolor {background: cyan}']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute])
], ShowComponent);
exports.ShowComponent = ShowComponent;
//# sourceMappingURL=show.component.js.map