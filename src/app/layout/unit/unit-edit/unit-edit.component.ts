import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Unit } from '../../model/Unit';
import { FormValidService } from '../../../shared/services/form-valid.service';
import { UnitEditService } from './unit-edit.service';

@Component({
    selector: 'unit-edit',
    templateUrl: './unit-edit.component.html',
    styleUrls: ['./unit-edit.component.scss'],
})
export class UnitEditComponent implements OnInit {

    units: Unit[];
    total: number;
    unit: Unit = new Unit();
    display: boolean;
    unitForm: FormGroup;
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
        this.display = true;
    }

    showEditDialog(type) {
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
}
