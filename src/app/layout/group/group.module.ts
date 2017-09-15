import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupRoutingModule } from './group-routing.module';
import { GroupComponent } from './group.component';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { SharedModule } from 'primeng/components/common/shared';
import { ButtonModule } from 'primeng/components/button/button';
import { DialogModule } from 'primeng/components/dialog/dialog';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';

import { GroupService } from './group.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import { FormValidService } from '../../shared/services/form-valid.service';
import { ToggleButtonModule } from 'primeng/components/togglebutton/togglebutton';

@NgModule({
    imports: [
        CommonModule,
        GroupRoutingModule,
        DataTableModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        ButtonModule,
        DialogModule,
        InputTextModule,
        TooltipModule,
        ToggleButtonModule,
    ],
    declarations: [
        GroupComponent,
    ],
    providers: [
        GroupService,
        FormValidService,
    ]
})
export class GroupModule {
}
