import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { TreeNode } from 'primeng/primeng';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { User } from '../model/User';

@Injectable()
export class UserService {
    ORGURL = 'assets/i18n/tree-mock.json';
    USERURL = 'assets/u.json';

    constructor(private http: Http) {
    }

    getOrgs(): Observable<TreeNode[]> {
        return this.http
            .get(this.ORGURL, {})
            .map((res: Response) => {
                return res.json();
            })
            .catch((error: any) => Observable.throw(error || 'Server error'));
    }

    getUsers(orgId: string): Observable<User[]> {
        return this.http
            .get(this.USERURL, {})
            .map((res: Response) => {
                return res.json();
            })
            .catch((error: any) => Observable.throw(error || 'Server error'));
    }
}
