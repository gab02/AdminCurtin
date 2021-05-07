import { AppComponent } from './../../../app.component';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';

export interface PeriodicElement {
  visitas: string;
  links: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {links: 'https://web.whatsapp.com/', visitas: 'Hydrogen'},
  {links: 'https://web.whatsapp.com/', visitas: 'Helium'},
  {links: 'https://web.whatsapp.com/', visitas: 'Lithium'},
  {links: 'https://web.whatsapp.com/', visitas: 'Beryllium'},
  {links: 'https://web.whatsapp.com/', visitas: 'Boron'},
  {links: 'https://web.whatsapp.com/', visitas: 'Carbon'},
  {links: 'https://web.whatsapp.com/', visitas: 'Nitrogen'},
  {links: 'https://web.whatsapp.com/', visitas: 'Oxygen'},
  {links: 'https://web.whatsapp.com/', visitas: 'Fluorine'},
  {links: 'https://web.whatsapp.com/', visitas: 'Neon'},
];
@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  panelOpenState = false;

  displayedColumns: string[] = ['Links', 'Visitas'];
  dataSource = ELEMENT_DATA;

  constructor(private app: AppComponent) { this.app.valorLogin = false;}

  ngOnInit(): void {
    this.app.valorLogin = false;
  }
}
