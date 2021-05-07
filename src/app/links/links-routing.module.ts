import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import {LinksComponent, CrudComponent} from './components';

export const LinksRoutes: Routes = [
    {
        path: 'links',
        component: CrudComponent,
        children: [{ path:'', component: LinksComponent }]
    }
];

@NgModule({
    imports:[ RouterModule.forChild(LinksRoutes) ],
    exports: [ RouterModule ]
})


export class LinksRoutingModule { }
