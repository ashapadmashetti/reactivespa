import { Routes, RouterModule } from '@angular/router';

import {ContactListComponent} 
     from "./components/contactlist.component";

import {NewContactComponent} 
     from "./components/newcontact.component";

import {ShowComponent} from "./components/show.component";

import {LoginComponent} from "./components/login.component"

import {ServiceComponent} from "./components/service.component"

const routes: Routes = [
	{path:'',component:LoginComponent},
    {path: 'contacts',component: ContactListComponent},
    {path: 'newcontact', component: NewContactComponent},
    {path:'show/:selected',component:ShowComponent},
    {path:'services',component:ServiceComponent}
];

export const routing = RouterModule.forRoot(routes);

