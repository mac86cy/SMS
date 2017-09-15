import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnitRoutingModule } from './unit-routing.module';
import { UnitComponent } from './unit.component';
import { UnitAdminComponent } from './unit-admin/unit-admin.component';
import { UnitEditComponent } from './unit-edit/unit-edit.component';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { SharedModule } from 'primeng/components/common/shared';
import { ButtonModule } from 'primeng/components/button/button';
import { DialogModule } from 'primeng/components/dialog/dialog';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormValidService } from '../../shared/services/form-valid.service';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import { ToggleButtonModule } from 'primeng/components/togglebutton/togglebutton';
import { UnitEditService } from './unit-edit/unit-edit.service';

@NgModule({
    imports: [
        CommonModule,
        UnitRoutingModule,
        DataTableModule,
        SharedModule,
        ButtonModule,
        DialogModule,
        InputTextModule,
        FormsModule,
        ReactiveFormsModule,
        TooltipModule,
        ToggleButtonModule
    ],
    declarations: [
        UnitComponent,
        UnitAdminComponent,
        UnitEditComponent,
    ],
    providers: [
        FormValidService,
        UnitEditService,
    ]
})
export class UnitModule { }
