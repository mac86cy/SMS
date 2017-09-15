import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Group } from '../model/Group';
import { GroupService } from './group.service';
import { FormValidService } from '../../shared/services/form-valid.service';

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
    formErrors = {
        'name': ''
    };
    validationMessages = {
        'name': {
            'required': '名称必须输入。',
            'minlength': '名称至少2个字符。',
            'maxlength': '名称最多20个字符'
        }
    };
    constructor(private fb: FormBuilder,
                private groupService: GroupService,
                private formValidService: FormValidService) {
    }

    ngOnInit() {
        this.buildForm();
        this.initTable();
    }

    initTable() {
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
    buildForm(): void {
        this.groupForm = this.fb.group({
            'name': [
                this.group.name,
                [
                    Validators.required,
                    Validators.minLength(2),
                    Validators.maxLength(20),
                ]
            ],

        });
        this.groupForm.valueChanges.subscribe(
            data => this.formValidService.onValueChanged(this.groupForm, this.formErrors, this.validationMessages, data)
        );
        this.formValidService.onValueChanged(this.groupForm, this.formErrors, this.validationMessages);
    }
    showDialog() {
        this.display = true;
    }

    onSubmit() {
        this.display = false;
        console.log(this.group.name);
        this.groupForm.reset();
    }
    handleChange(event) {
        // TODO 是否激活
    }

}
