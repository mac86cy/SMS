import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Role } from '../model/Role';
import { RoleService } from './role.service';

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

    constructor(private fb: FormBuilder, private roleService: RoleService) {
    }

    ngOnInit() {
        this.initTable();
        this.buildForm();
    }

    buildForm() {
        this.roleForm = this.fb.group({
            'name': new FormControl('', Validators.required),
            'description': new FormControl('', )
        })
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
