import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleRoutingModule } from './role-routing.module';
import { RoleComponent } from './role.component';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { SharedModule } from 'primeng/components/common/shared';
import { ButtonModule } from 'primeng/components/button/button';
import { DialogModule } from 'primeng/components/dialog/dialog';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoleService } from './role.service';
import { RolePowerComponent } from './role-power/role-power.component';
import { RolePowerService } from './role-power/role-power.service';
import { PickListModule } from 'primeng/components/picklist/picklist';
@NgModule({
    imports: [
        CommonModule,
        RoleRoutingModule,
        DataTableModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        ButtonModule,
        DialogModule,
        InputTextModule,
        PickListModule,
    ],
    declarations: [
        RoleComponent,
        RolePowerComponent
    ],
    providers: [
        RoleService,
        RolePowerService,
    ]
})
export class RoleModule { }
