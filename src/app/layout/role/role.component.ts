import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Role } from '../model/Role';
import { RoleService } from './role.service';
import { FormValidService } from '../../shared/services/form-valid.service';

@Component({
    selector: 'role',
    templateUrl: './role.component.html',
    styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit {
    roles: Role[];
    total: number;
    role: Role = new Role();
    display: boolean;
    roleForm: FormGroup;
    formErrors = {
        'name': '',
        'description': ''
    };
    validationMessages = {
        'name': {
            'required': '名称必须输入。',
            'minlength': '名称至少2个字符。',
            'maxlength': '名称最多20个字符'
        },
        'description': {
            'maxlength': '描述最多为100个字符。'
        }
    };
    constructor(private fb: FormBuilder,
                private roleService: RoleService,
                private formValidService: FormValidService) {
    }

    ngOnInit() {
        this.initTable();
        this.buildForm();
    }

    buildForm(): void {
        this.roleForm = this.fb.group({
            'name': [
                this.role.name,
                [
                    Validators.required,
                    Validators.minLength(2),
                    Validators.maxLength(20),
                ]
            ],
            'description': [
                this.role.description,
                [
                    Validators.maxLength(100),
                ]
            ],
        });
        this.roleForm.valueChanges.subscribe(
            data => this.formValidService.onValueChanged(this.roleForm, this.formErrors, this.validationMessages, data)
        );
        this.formValidService.onValueChanged(this.roleForm, this.formErrors, this.validationMessages);

    }

    initTable() {
        this.roleService.getRoles().subscribe(
            res => {
                this.roles = res['rows'];
                this.total = res['total'];
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
        this.roleForm.reset();
    }

}
