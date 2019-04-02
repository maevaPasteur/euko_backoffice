import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private http: HttpClient) {
    }

    getUsers(type) {
        switch (type) {
            case 'borrower':
                return this.http.get('../assets/json/borrowers.json');
                break;
            case 'investissor':
                return this.http.get('../assets/json/investissors.json');
                break;
            case 'both':
                return this.http.get('../assets/json/both.json');
                break;
            case 'neutral':
                return this.http.get('../assets/json/neutrals.json');
                break;
            default :
                return this.http.get('../assets/json/admin/users.json');
        }
    }

    getProject(type) {
        switch (type) {
            case 'all':
                return this.http.get('../assets/json/projets.json');
                break;
            default :
                return this.http.get('https://euko-api-staging.herokuapp.com/projects');
        }
    }

    getWireframe() {
        return this.http.get('../assets/json/screen_app.json');
    }
}
