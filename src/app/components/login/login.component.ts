import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.data = new FormGroup({
      email: new FormControl(""),
      password: new FormControl("")
    })
  }

  login(data: any) {
    // console.log(data);
    if (data.email == 'admin' && data.password == 'admin') {
      localStorage.setItem("user", "admin");
      this.router.navigate(['/dashboard']);
    }
    else {
      alert("Wrong credentials......");
      this.router.navigate(['/']);
    }
  }

}
