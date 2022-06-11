import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  istoggle: string = "hide";

  constructor(private router:Router) { }

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
    localStorage.removeItem("user");
    this.router.navigate(["/"])
  }

}
