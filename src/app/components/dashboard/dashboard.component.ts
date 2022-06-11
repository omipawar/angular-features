import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  products: any;
  loader: boolean = true;
  num: any;
  constructor(private api: ApiService, private auth: AuthService) { }

  ngOnInit(): void {
    this.api.getProduct().subscribe((data: any) => {
      this.products = data;
      this.num = data.length;

      // console.log(this.products);
      this.loader = false;

    });


  }

}
