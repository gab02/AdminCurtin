import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  display: boolean = false;
num: number;
  constructor(    private router: Router,
    ) { }

  ngOnInit(): void {
  }
  showDialog() {
    this.display = true;
}
  dash(){
    this.router.navigate(['../dashboard']);
  }








  Registrar(){

    this.router.navigate(['../registrar']);
  }
}
