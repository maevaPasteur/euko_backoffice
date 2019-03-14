import {Component, OnInit} from '@angular/core';
import {AuthentificationService} from '../../services/authentification/authentification.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    constructor(private  authentificationService: AuthentificationService) {
    }

    ngOnInit() {
    }
}