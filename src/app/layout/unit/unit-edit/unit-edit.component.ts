import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Unit } from '../../model/Unit';
import { FormValidService } from '../../../shared/services/form-valid.service';
import { UnitEditService } from './unit-edit.service';
import { User } from '../../model/User';

@Component({
    selector: 'unit-edit',
    templateUrl: './unit-edit.component.html',
    styleUrls: ['./unit-edit.component.scss'],
})
export class UnitEditComponent implements OnInit {
    dialogTitle: string;
    dialogGrantTitle: string;
    units: Unit[];
    total: number;
    unit: Unit = new Unit();
    display: boolean;
    displayGrant: boolean;
    unitForm: FormGroup;
    list1: User[] = [];
    list2: User[] = [];
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
                private formValidService: FormValidService,
                private unitEditService: UnitEditService) {
    }

    ngOnInit() {
        this.buildForm();
        this.initTable();
        this.list1.push({'id': 1, 'name': '崔岩', 'idCard': '5770', 'isActive': true});
        this.list1.push({'id': 2, 'name': '赵刚晶', 'idCard': '5680', 'isActive': true});
        this.list1.push({'id': 3, 'name': '崔岩', 'idCard': '5770', 'isActive': true});
        this.list1.push({'id': 4, 'name': '赵刚晶', 'idCard': '5680', 'isActive': true});
        this.list1.push({'id': 5, 'name': '崔岩', 'idCard': '5770', 'isActive': true});
        this.list1.push({'id': 6, 'name': '赵刚晶', 'idCard': '5680', 'isActive': true});
    }

    initTable() {
        this.unitEditService.getUnits().subscribe(
            res => {
                this.total = res['total'];
                this.units = res['rows'];
            },
            error => {
                console.log(error)
            },
            () => {
            }
        );
    }

    buildForm(): void {
        this.unitForm = this.fb.group({
            'name': [
                this.unit.name,
                [
                    Validators.required,
                    Validators.minLength(2),
                    Validators.maxLength(20),
                ]
            ],
        });
        this.unitForm.valueChanges.subscribe(
            data => this.formValidService.onValueChanged(this.unitForm, this.formErrors, this.validationMessages, data)
        );
        this.formValidService.onValueChanged(this.unitForm, this.formErrors, this.validationMessages);
    }

    showDialog() {
        this.dialogTitle = '新增排班单元';
        this.display = true;
    }

    showEditDialog(type) {
        this.dialogTitle = '编辑排班单元名称';
        // this.unitForm.reset();
        this.unit = type;
        this.display = true;
    }
    onSubmit() {
        this.display = false;
        this.unitForm.reset();
    }

    handleChange(event) {
        // TODO 是否激活
    }

    showGrantDialog(unit, tag) {
        if (tag === 'manager') {
            this.dialogGrantTitle = '选择管理人员';
            // TOTO 排班员
        } else {
            this.dialogGrantTitle = '选择人员进行排班';
            // TODO 被管理的人员
        }
        this.displayGrant = true;
    }
    onGrant() {
        this.displayGrant = false;
    }
}
