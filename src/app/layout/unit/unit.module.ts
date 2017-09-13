import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnitRoutingModule } from './unit-routing.module';
import { UnitComponent } from './unit.component';

@NgModule({
    imports: [
        CommonModule,
        UnitRoutingModule,
    ],
    declarations: [
        UnitComponent
    ]
})
export class UnitModule { }
