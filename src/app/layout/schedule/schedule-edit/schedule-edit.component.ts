import { Component, OnInit } from '@angular/core';
import { Schedules } from '../../model/Schedules';
import { ScheduleEditService } from './schedule-edit.service';
import { Type } from '../../model/Type';
import { SelectItem } from 'primeng/components/common/selectitem';

@Component({
  selector: 'schedule-edit',
  templateUrl: './schedule-edit.component.html',
  styleUrls: ['./schedule-edit.component.scss']
})
export class ScheduleEditComponent implements OnInit {
    schedules: Schedules[];
    types: SelectItem[];
    total: number;
    h1: string;
    h2: string;
    h3: string;
    h4: string;
    h5: string;
    h6: string;
    h7: string;
    constructor(private scheduleEditService: ScheduleEditService) {
    }

    ngOnInit() {
        this.h1 = '10月1日';
        this.h2 = '10月2日';
        this.h3 = '10月3日';
        this.h4 = '10月4日';
        this.h5 = '10月5日';
        this.h6 = '10月6日';
        this.h7 = '10月7日';
        this.initTable();
        this.types = [
            {label: 'Choose', value: null},
            {label: 'Audi', value: 'Audi'},
            {label: 'BMW', value: 'BMW'},
            {label: 'Fiat', value: 'Fiat'},
            {label: 'Ford', value: 'Ford'},
            {label: 'Honda', value: 'Honda'},
            {label: 'Jaguar', value: 'Jaguar'},
            {label: 'Mercedes', value: 'Mercedes'},
            {label: 'Renault', value: 'Renault'},
            {label: 'VW', value: 'VW'},
            {label: 'Volvo', value: 'Volvo'}
        ];
    }

    initTable() {
        this.scheduleEditService.getSchedules().subscribe(
            res => {
                this.total = res['total'];
                this.schedules = res['rows'];
            },
            error => {
                console.log(error)
            },
            () => {
            }
        );
    }

}
