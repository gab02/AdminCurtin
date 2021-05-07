import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss']
})
export class RegistrarComponent implements OnInit {

  constructor( private router: Router,) { }

  ngOnInit(): void {
  }
  dash(){
    this.router.navigate(['../login']);
  }
}
