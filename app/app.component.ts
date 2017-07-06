import { Component } from '@angular/core';
//step 1 : configure routes 

@Component({
    selector: 'my-app',
    template: `<h2 class='text-center bg-danger'>SPA Case study</h2>
    <nav>
        <a [routerLink]="['/']">Login</a>
        <a [routerLink]="['/services']">Our Services</a>
        <a [routerLink]="['/newcontact']" >Add new Contact</a>
        
                
    </nav>
        <div class="well">
        	<router-outlet></router-outlet>
        </div>
    `   
})
export class AppComponent { }
