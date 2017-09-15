import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
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
            'maxlength': '描述最多为100个字符。'
        },
        'start': {
            'required': '开始时间必须输入。',
        },
        'end': {
            'required': '结束时间必须输入。',
        },
        'parentId': {
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
                    Validators.maxLength(100),
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
                []
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

    showEditDialog(type) {
        this.typeForm.reset();
        this.type = type;
        this.display = true;
    }
    onSubmit() {
        this.display = false;
        console.log(this.type.start);
        this.typeForm.reset();
    }

    handleChange(event) {
        // TODO 是否激活
    }
}
