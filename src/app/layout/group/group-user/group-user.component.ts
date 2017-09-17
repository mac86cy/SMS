import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/components/common/treenode';
import { User } from '../../model/User';
import { GroupUserService } from './group-user.service';

@Component({
  selector: 'group-user',
  templateUrl: './group-user.component.html',
  styleUrls: ['./group-user.component.scss'],
})
export class GroupUserComponent implements OnInit {

    users: User[];
    selectedUsers: User[] = [{
        'id': 1,
        'idCard': '5770',
        'name': '信息技术部',
        'isActive': true
    }];
    orgs: TreeNode[];
    selectedOrg: TreeNode;
    constructor(private userService: GroupUserService) {
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
