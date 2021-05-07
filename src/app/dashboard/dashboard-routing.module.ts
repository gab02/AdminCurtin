import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import {DashboardComponent, DashComponent} from './components';

export const DashboardRoutes: Routes = [
    {
        path: 'dashboard',
        component: DashComponent,
        children: [{ path:'', component: DashboardComponent }]
    }
];

@NgModule({
    imports:[ RouterModule.forChild(DashboardRoutes) ],
    exports: [ RouterModule ]
})

export class DashboardRoutingModule {
}
