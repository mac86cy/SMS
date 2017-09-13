import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Power } from '../../model/Power';

@Injectable()
export class RolePowerService {

    URL = 'assets/g.json';

    constructor(private http: Http) {
    }

    getPowerByRoleId(roleId: number): Observable<Power[]> {
        const data = new URLSearchParams();
        data.append('roleId', String(roleId));
        return this.http
            .get(this.URL, data)
            .map((res: Response) => {
                return res.json();
            })
            .catch((error: any) => Observable.throw(error || 'Server error'));

    }
}
