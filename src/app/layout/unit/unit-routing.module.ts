import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnitComponent } from './unit.component';
import { UnitAdminComponent } from './unit-admin/unit-admin.component';
import { UnitEditComponent } from './unit-edit/unit-edit.component';

const routes: Routes = [
    {
        path: '', component: UnitComponent,
        children: [
            { path: '', redirectTo: 'edit', pathMatch: 'full' },
            { path: 'admin', component: UnitAdminComponent },
            { path: 'edit', component: UnitEditComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UnitRoutingModule { }
