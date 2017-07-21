import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Auth0Service } from './autho.service';

@Injectable()
export class GuardsAuth0Service implements CanActivate{

    constructor(private auth0Service: Auth0Service,){

    }

    canActivate(next:ActivatedRouteSnapshot, state : RouterStateSnapshot ){

        console.log("next", next);
        console.log("state", state);        

        if(this.auth0Service.isAuthenticated()){
            console.log("está logeado");
            return true;

        }else{
            console.log("no está logeado");
            return false;
        }
    

    }

}