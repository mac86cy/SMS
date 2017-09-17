import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { PageHeaderModule } from '../../shared';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { UserService } from './user.service';
import { SharedModule } from 'primeng/components/common/shared';
import { ButtonModule } from 'primeng/components/button/button';
import { PickListModule } from 'primeng/components/picklist/picklist';
import { DialogModule } from 'primeng/components/dialog/dialog';

@NgModule({
    imports: [
        CommonModule,
        UserRoutingModule,
        PageHeaderModule,
        DataTableModule,
        SharedModule,
        ButtonModule,
        PickListModule,
        DialogModule,
    ],
    declarations: [
        UserComponent,
    ],
    providers: [
        UserService,
    ]
})
export class UserModule { }
