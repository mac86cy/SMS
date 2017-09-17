import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from '../model/User';
@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
    users: User[];
    total: number;
    displayGrant: boolean;
    list1: User[] = [];
    list2: User[] = [];
    constructor(private userService: UserService) {
    }

    ngOnInit() {
        this.list1.push({'id': 1, 'name': '崔岩', 'idCard': '5770', 'isActive': true});
        this.list1.push({'id': 2, 'name': '赵刚晶', 'idCard': '5680', 'isActive': true});
        this.list1.push({'id': 3, 'name': '崔岩', 'idCard': '5770', 'isActive': true});
        this.list1.push({'id': 4, 'name': '赵刚晶', 'idCard': '5680', 'isActive': true});
        this.list1.push({'id': 5, 'name': '崔岩', 'idCard': '5770', 'isActive': true});
        this.list1.push({'id': 6, 'name': '赵刚晶', 'idCard': '5680', 'isActive': true});
        this.initTable();
    }

    initTable() {
        this.userService.getUsers().subscribe(
            res => {
                this.total = res['total'];
                this.users = res['rows'];
            },
            error => {
                console.log(error)
            },
            () => {
            }
        );
    }

    showGrantDialog(user) {
        this.displayGrant = true;
    }
    onGrant() {
        this.displayGrant = false;
    }
}
