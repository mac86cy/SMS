import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from '../model/User';
import { TreeNode } from 'primeng/components/common/treenode';
@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
    users: User[];
    selectedUsers: User[] = [{
        "id": 1,
        "idCard": "5770",
        "name": "信息技术部",
        "isActive": true
    }];
    orgs: TreeNode[];
    selectedOrg: TreeNode;
    constructor(private userService: UserService) {
    }

    ngOnInit() {
        this.userService.getOrgs().subscribe(
            res => {
                this.orgs = res['data'];
            },
            error => {
                console.log(error)
            },
            () => {
            }
        );
    }

    nodeSelect(event) {
        this.userService.getUsers(event.node.label).subscribe(
            res => {
                this.users = res['rows'];
            },
            error => {
                console.log(error)
            },
            () => {
            }
        );
    }

}
