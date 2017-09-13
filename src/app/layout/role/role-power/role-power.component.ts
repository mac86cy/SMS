import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Power } from '../../model/Power';
import { RolePowerService } from './role-power.service';

@Component({
  selector: 'role-power',
  templateUrl: './role-power.component.html',
  styleUrls: ['./role-power.component.scss']
})
export class RolePowerComponent implements OnInit {
    powers: Power[];
    total: number;
    roleId: number;
    display: boolean;
    list1: Power[];
    list2: Power[];
    constructor(private rolePowerService: RolePowerService, private activeRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.activeRoute.params.subscribe(params => {
            // 这里可以从路由里面获取URL参数
            this.roleId = params['id'];
            this.initTable();
        });
        this.list1 = [];
        this.list2 = [];
        this.list1.push({'id': 1, 'name': 'gg', 'tag': 'fffff'});
        this.list1.push({'id': 2, 'name': 'dd', 'tag': 'dcddd'});
    }

    initTable() {
        this.rolePowerService.getPowerByRoleId(this.roleId).subscribe(
            res => {
                this.powers = res['rows'];
                this.total = res['total'];
            },
            error => {
                console.log(error)
            },
            () => {
            }
        )
    }

    showDialog() {
        this.display = true;
    }

    getList() {
        console.log(this.list2);
    }

}
