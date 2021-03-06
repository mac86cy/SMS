import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Schedules } from '../../model/Schedules';

@Injectable()
export class ScheduleEditService {
    URL = 'assets/s.json';

    constructor(private http: Http) {
    }

    getSchedules(): Observable<Schedules[]> {
        return this.http
            .get(this.URL, {})
            .map((res: Response) => {
                return res.json();
            })
            .catch((error: any) => Observable.throw(error || 'Server error'));
    }
}
