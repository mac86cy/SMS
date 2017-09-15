import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Unit } from '../../model/Unit';

@Injectable()
export class UnitEditService {
    URL = 'assets/g.json';

    constructor(private http: Http) {
    }

    getUnits(): Observable<Unit[]> {
        return this.http
            .get(this.URL, {})
            .map((res: Response) => {
                return res.json();
            })
            .catch((error: any) => Observable.throw(error || 'Server error'));
    }
}
