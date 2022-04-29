import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  showNavbarMenu = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleShowNavbarMenu() {
    this.showNavbarMenu = !this.showNavbarMenu;
  }

}
