import { Component } from '@angular/core';
import { Auth0Service } from '../../services/autho.service';

@Component({
    selector : 'navbar',
    templateUrl: './navbar.component.html'
})
export class NavBarComponent{
    
    constructor( private auth0Service : Auth0Service){
        auth0Service.handleAuthentication();
    }

    login (){
        this.auth0Service.login();
    }

    logout(){
        this.auth0Service.logout();
    }

}