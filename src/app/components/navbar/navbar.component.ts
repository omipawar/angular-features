import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  istoggle: string = "hide";

  constructor() { }

  ngOnInit(): void {
  }

  toggle(data: any) {
    if (data == "hide") {
      this.istoggle = "show";
    }
    else {
      this.istoggle = "hide";
    }

  }

  logout(){
    
  }

}
