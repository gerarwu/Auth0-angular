import { Component, OnInit } from '@angular/core';
import { Auth0Service } from '../../services/autho.service'

@Component({
    selector: 'app-miembros',
    templateUrl: 'miembros.component.html'
})
export class MiembrosComponent implements OnInit {

    public profile : any;

    constructor( private auth0Service: Auth0Service){}

    ngOnInit() {

        if (this.auth0Service.userProfile) {
            this.profile = this.auth0Service.userProfile;
        } else {
            this.auth0Service.getProfile((err, profile) => {
                this.profile = profile;
            });
        }

    }


}