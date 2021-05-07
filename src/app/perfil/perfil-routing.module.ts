import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import {PerfilComponent, ProfileComponent} from './components';

export const PerfilRoutes: Routes = [
    {
        path: 'perfil',
        component: ProfileComponent,
        children: [{ path:'', component: PerfilComponent }]
    }
];

@NgModule({
    imports:[ RouterModule.forChild(PerfilRoutes) ],
    exports: [ RouterModule ]
})


export class PerfilRoutingModule { }
