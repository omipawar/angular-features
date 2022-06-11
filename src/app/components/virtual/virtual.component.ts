import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiService } from 'src/app/shared/api.service';
import { LoaderService } from 'src/app/shared/loader.service';

@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html',
  styleUrls: ['./virtual.component.css']
})
export class VirtualComponent implements OnInit {
  product: any;
  off: number = 0;
  arr: any = [];
  end: boolean = false;

  notemptypost: boolean = true;
  notscrolly: boolean = true;

  constructor(private api: ApiService, private spinner: NgxSpinnerService, private http: HttpClient) { }

  ngOnInit(): void {
    // this.api.getProduct().subscribe((data: any) => {
    //   this.product = data;

    // });

    let data = { off: this.off };
    this.http.post("http://localhost:8081/data/getnext", { data: data }).subscribe((data: any) => {
      this.product = data.data;
      console.log(this.product);

    })

  }

  onScroll() {
    console.log("scrolled");

    this.spinner.show();
    this.off += 6;
    console.log(this.off);

    let data = { off: this.off };
    this.http.post("http://localhost:8081/data/getnext", { data: data }).subscribe((data: any) => {
      // this.product = data.data;
      console.log(data.data[0]);
      console.log(data.data.length);

      // this.product.push(data.data[0]);
      // console.log(this.product);
      if (data.data.length != 0) {
        for (let i = 0; i < data.data.length; i++) {
          // console.log(data.data[i]);
          this.product.push(data.data[i]);
          console.log(this.product);
        }
      }

      if (data.data.length == 0) {
        this.spinner.hide();
        this.end = true;
      }



    })

  }

  upscroll() {
    // alert("up")
  }



}
