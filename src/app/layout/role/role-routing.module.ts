import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoleComponent } from './role.component';
import { RolePowerComponent } from './role-power/role-power.component';

const routes: Routes = [
    {
        path: '', component: RoleComponent,
        children: [
            { path: 'rolePower', component: RolePowerComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RoleRoutingModule { }
