import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Type } from '../model/Type';

@Injectable()
export class TypeService {

    URL = 'assets/g.json';

    constructor(private http: Http) {
    }

    getTypes(): Observable<Type[]> {
        return this.http
            .get(this.URL, {})
            .map((res: Response) => {
                return res.json();
            })
            .catch((error: any) => Observable.throw(error || 'Server error'));
    }
}
