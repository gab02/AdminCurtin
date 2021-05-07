
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LinksModule } from './links/links.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardModule, DashboardRoutingModule } from './dashboard';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule, LoginRoutingModule } from './login';
import { RegistrarRoutingModule, RegistrarModule } from './registrar';
import { LinksRoutingModule } from './links';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon'
import {MatMenuModule} from '@angular/material/menu'

import {MatTabsModule} from '@angular/material/tabs';
import { PerfilModule,PerfilRoutingModule } from './perfil';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LoginModule,
    LoginRoutingModule,
    DashboardRoutingModule,
    DashboardModule,
    RegistrarRoutingModule,
    RegistrarModule,
    LinksRoutingModule,
    LinksModule,
    MatSidenavModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatExpansionModule,
    MatButtonModule,
    MatSelectModule,
    MatTooltipModule,
    MatSidenavModule,
    MatIconModule,
    MatMenuModule,

    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    PerfilRoutingModule,
    PerfilModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],

  bootstrap: [AppComponent]
})
export class AppModule { }
