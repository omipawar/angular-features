import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiService } from 'src/app/shared/api.service';
import { AuthService } from 'src/app/shared/auth.service';
import { LoaderService } from 'src/app/shared/loader.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {
  products: any;

  constructor(private api: ApiService, private spinner: NgxSpinnerService, public loader:LoaderService) { }

  ngOnInit(): void {

    this.spinner.show();

    this.api.getProduct().subscribe((data: any) => {
      this.products = data;
      console.log(this.products);
      // this.spinner.hide();
    });

  }

}
