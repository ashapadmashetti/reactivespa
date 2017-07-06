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
var contact_service_1 = require("../services/contact.service");
var router_1 = require("@angular/router");
var NewContactComponent = (function () {
    function NewContactComponent(_contactService, _router) {
        this._contactService = _contactService;
        this._router = _router;
    }
    NewContactComponent.prototype.onInsert = function (cname, mail, ph) {
        var newcontact = { name: cname, email: mail, phone: ph };
        this._contactService.insertContact(newcontact);
        this._router.navigate(["contacts"]);
    };
    return NewContactComponent;
}());
NewContactComponent = __decorate([
    core_1.Component({
        selector: 'new-contact',
        templateUrl: './app/components/newcontact.html',
        providers: [contact_service_1.ContactService],
        styles: [
            "\n    \tlabel{ display:inline-block;width:100px}\n    \tinput{width:200px}\n    "
        ]
    }),
    __metadata("design:paramtypes", [contact_service_1.ContactService,
        router_1.Router])
], NewContactComponent);
exports.NewContactComponent = NewContactComponent;
//# sourceMappingURL=newcontact.component.js.map