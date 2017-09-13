import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypeComponent } from './type.component';
import { TypeRoutingModule } from './type-routing.module';

@NgModule({
    imports: [
        CommonModule,
        TypeRoutingModule
    ],
    declarations: [
        TypeComponent
    ]
})
export class TypeModule { }
