import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleRoutingModule } from './schedule-routing.module';
import { ScheduleComponent } from './schedule.component';
import { ScheduleListComponent } from './schedule-list/schedule-list.component';
import { ScheduleEditComponent } from './schedule-edit/schedule-edit.component';
import { SharedModule } from 'primeng/components/common/shared';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { ScheduleEditService } from './schedule-edit/schedule-edit.service';
import { DropdownModule } from 'primeng/primeng';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        ScheduleRoutingModule,
        SharedModule,
        DataTableModule,
        FormsModule,
        ReactiveFormsModule,
        DropdownModule,
    ],
    declarations: [
        ScheduleComponent,
        ScheduleListComponent,
        ScheduleEditComponent,
    ],
    providers: [
        ScheduleEditService,
    ]
})
export class ScheduleModule {
}
