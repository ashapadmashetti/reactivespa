"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var contactlist_component_1 = require("./components/contactlist.component");
var newcontact_component_1 = require("./components/newcontact.component");
var show_component_1 = require("./components/show.component");
var login_component_1 = require("./components/login.component");
var service_component_1 = require("./components/service.component");
var routes = [
    { path: '', component: login_component_1.LoginComponent },
    { path: 'contacts', component: contactlist_component_1.ContactListComponent },
    { path: 'newcontact', component: newcontact_component_1.NewContactComponent },
    { path: 'show/:selected', component: show_component_1.ShowComponent },
    { path: 'services', component: service_component_1.ServiceComponent }
];
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routing.js.map