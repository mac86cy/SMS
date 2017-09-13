import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Group } from '../model/Group';
import { GroupService } from './group.service';

@Component({
  selector: 'group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {
    groups: Group[];
    total: number;
    group: Group = new Group();
    display: boolean;
    groupForm: FormGroup;

    constructor(private fb: FormBuilder, private groupService: GroupService) {
    }

    ngOnInit() {
        this.groupForm = this.fb.group({
            'name': new FormControl('', Validators.required)
        });
        this.groupService.getGroups().subscribe(
            res => {
                this.total = res['total'];
                this.groups = res['rows'];
            },
            error => {
                console.log(error)
            },
            () => {
            }
        );
    }

    showDialog() {
        this.display = true;
    }

    onSubmit() {
        this.display = false;
        console.log(this.group.name);
        this.groupForm.reset();
    }

}
