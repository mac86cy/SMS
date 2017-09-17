import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroupComponent } from './group.component';
import { GroupManagementComponent } from './group-management/group-management.component';
import { GroupUserComponent } from './group-user/group-user.component';

const routes: Routes = [
    {
        path: '', component: GroupComponent,
        children: [
            { path: '', redirectTo: 'manage', pathMatch: 'full' },
            { path: 'manage', component: GroupManagementComponent },
            { path: 'manage/user', component: GroupUserComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GroupRoutingModule { }
