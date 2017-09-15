import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypeComponent } from './type.component';
import { TypeRoutingModule } from './type-routing.module';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { SharedModule } from 'primeng/components/common/shared';
import { ButtonModule } from 'primeng/components/button/button';
import { DialogModule } from 'primeng/components/dialog/dialog';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TypeService } from './type.service';
import { FormValidService } from '../../shared/services/form-valid.service';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import { CalendarModule } from 'primeng/components/calendar/calendar';
import { InputTextareaModule } from 'primeng/components/inputtextarea/inputtextarea';
import { ToggleButtonModule } from 'primeng/components/togglebutton/togglebutton';
@NgModule({
    imports: [
        CommonModule,
        TypeRoutingModule,
        DataTableModule,
        SharedModule,
        ButtonModule,
        DialogModule,
        InputTextModule,
        FormsModule,
        ReactiveFormsModule,
        TooltipModule,
        CalendarModule,
        InputTextareaModule,
        ToggleButtonModule,
    ],
    declarations: [
        TypeComponent
    ],
    providers: [
        TypeService,
        FormValidService,
    ]
})
export class TypeModule { }
