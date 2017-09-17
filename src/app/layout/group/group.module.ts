import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupRoutingModule } from './group-routing.module';
import { GroupComponent } from './group.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import { FormValidService } from '../../shared/services/form-valid.service';
import { ToggleButtonModule } from 'primeng/components/togglebutton/togglebutton';
import { TreeModule } from 'primeng/components/tree/tree';
import { GroupManagementComponent } from './group-management/group-management.component';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { SharedModule } from 'primeng/components/common/shared';
import { ButtonModule } from 'primeng/components/button/button';
import { DialogModule } from 'primeng/components/dialog/dialog';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { GroupManagementService } from './group-management/group-management.service';
import { GroupUserComponent } from './group-user/group-user.component';
import { GroupUserService } from './group-user/group-user.service';
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
        TreeModule,

    ],
    declarations: [
        GroupComponent,
        GroupManagementComponent,
        GroupUserComponent,

    ],
    providers: [
        GroupManagementService,
        GroupUserService,
        FormValidService,
    ]
})
export class GroupModule {
}
