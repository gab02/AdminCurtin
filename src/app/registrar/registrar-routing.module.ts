import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import {RegistrarComponent, RegistroComponent} from './component';

export const RegistrarRoutes: Routes = [
    {
        path: 'registrar',
        component: RegistrarComponent,
        children: [{ path:'', component: RegistrarComponent }]
    }
];

@NgModule({
    imports:[ RouterModule.forChild(RegistrarRoutes) ],
    exports: [ RouterModule ]
})


export class RegistrarRoutingModule { }
