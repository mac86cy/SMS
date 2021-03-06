import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { User } from '../model/User';

@Injectable()
export class UserService {
    USERURL = 'assets/u.json';

    constructor(private http: Http) {
    }

    getUsers(): Observable<User[]> {
        return this.http
            .get(this.USERURL, {})
            .map((res: Response) => {
                return res.json();
            })
            .catch((error: any) => Observable.throw(error || 'Server error'));
    }
}
