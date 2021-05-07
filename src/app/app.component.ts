import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api/menuitem';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'curtinLa';
  showFiller = false;
  hasToggledTheme = false;
  valorLogin: boolean = false;

  constructor(    private router: Router,
    ){}
    // items: MenuItem[];
  // display1: boolean = false;
ngOnInit(){
  this.valorLogin = true;
  // this.items = [
  //   {
  //     label: "Links",
  //     icon: "pi pi-pw pi-file",

  //         items: [
  //           { label: "https://web.whatsapp.com/", icon: "pi pi-fw pi-trash" },
  //           { label: "https://web.whatsapp.com/", icon: "pi pi-fw pi-refresh" },
  //           { label: "https://web.whatsapp.com/", icon: "pi pi-fw pi-refresh" }

  //         ],
  //       },
  //       {
  //         label: "Paineis",
  //         icon: "pi pi-pw pi-file",

  //             items: [
  //               { label: "https://web.whatsapp.com/", icon: "pi pi-fw pi-trash" },
  //               { label: "https://web.whatsapp.com/", icon: "pi pi-fw pi-refresh" },
  //               { label: "https://web.whatsapp.com/", icon: "pi pi-fw pi-refresh" }

  //             ],
  //           },

  // ];

}
// Function to change heading background color


/*changeHeadingBg(){
  this.colorBackGround1 = 'pink';
  this.colorBackGround = 'red';

  let background1 = this.colorBackGround1;
  let background = this.colorBackGround;
  let btn = this.colorBtn;
  let text = this.colorText;

  //cor do background reativo
  document.getElementById("corBackground1").style.background = background1 ;
  //cor do botao reativo
  document.getElementById("corBackground").style.background = background ;
  //cor do texto reativo
  //document.getElementById("corTexto").style.background = text ;
}
*/
toggleTheme() {
  this.hasToggledTheme = !this.hasToggledTheme;
}
dash() {
  this.router.navigate([ 'dashboard']);
}

links() {
  this.router.navigate([ 'links']);
}
perfil() {
  this.router.navigate([ 'perfil']);
}

sair() {
  this.router.navigate([ 'login']);
}
// cor1(){
//  // this.themeSwitcher.setTheme(this.color);

// }
// cor2(){
//  // this.themeSwitcher.cycleTheme();

// }
}
