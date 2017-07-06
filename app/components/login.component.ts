import {Component} from '@angular/core';
import {LoginService} from '../services/login.service'
import {User} from '../services/user'

 
@Component({
    selector: 'login-form',
    providers: [LoginService],
    templateUrl:'./app/components/login.component.html'
})
 
export class LoginComponent {
 
    public user = new User('admin@admin.com','welcome');
    public errorMsg = '';
 
    constructor(
        private _service:LoginService) {}
 
    login() {
        if(!this._service.login(this.user)){
            this.errorMsg = 'Failed to login';
        }
    }
}