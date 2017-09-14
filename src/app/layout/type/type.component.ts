import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Type } from '../model/Type';
import { TypeService } from './type.service';
import { FormValidService } from '../../shared/services/form-valid.service';

@Component({
  selector: 'type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss'],
})
export class TypeComponent implements OnInit {

    types: Type[];
    total: number;
    type: Type = new Type();
    display: boolean;
    typeForm: FormGroup;
    formErrors = {
        'name': '',
        'description': '',
        'start': '',
        'end': '',
        'parentId': ''
    };
    validationMessages = {
        'name': {
            'required': '名称必须输入。',
            'minlength': '名称至少2个字符。',
            'maxlength': '名称最多20个字符'
        },
        'description': {
            'required': '昵称必须输入。',
            'minlength': '昵称2到32个字符。'
        },
        'start': {
            'required': '邮箱必须输入。',
            'minlength': '请输入正确的邮箱地址。'
        },
        'end': {
            'required': '密码必须输入。',
            'minlength': '密码至少要8位。'
        },
        'parentId': {
            'required': '重复密码必须输入。',
            'minlength': '密码至少要8位。',
        }
    };
    constructor(private fb: FormBuilder,
                private typeService: TypeService,
                private formValidService: FormValidService) {
    }

    ngOnInit() {
        this.buildForm();
        this.initTable();
    }

    initTable() {
        this.typeService.getTypes().subscribe(
            res => {
                this.total = res['total'];
                this.types = res['rows'];
            },
            error => {
                console.log(error)
            },
            () => {
            }
        );
    }

    buildForm(): void {
        this.typeForm = this.fb.group({
            'name': [
                this.type.name,
                [
                    Validators.required,
                    Validators.minLength(2),
                    Validators.maxLength(20),
                ]
            ],
            'description': [
                this.type.description,
                [
                    Validators.required,
                ]
            ],
            'start': [
                this.type.start,
                [
                    Validators.required,
                ]
            ],
            'end': [
                this.type.end,
                [
                    Validators.required,
                ]
            ],
            'parentId': [
                this.type.parentId,
                [
                    Validators.required,
                ]
            ],
        });
        this.typeForm.valueChanges.subscribe(
            data => this.formValidService.onValueChanged(this.typeForm, this.formErrors, this.validationMessages, data)
        );
        this.formValidService.onValueChanged(this.typeForm, this.formErrors, this.validationMessages);
    }

    showDialog() {
        this.display = true;
    }

    showEditDialog(): void {

    }
    onSubmit() {
        this.display = false;
        this.typeForm.reset();
    }
}
