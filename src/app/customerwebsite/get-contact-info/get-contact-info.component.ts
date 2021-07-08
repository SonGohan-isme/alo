import { Component, OnInit } from '@angular/core';
import { District } from 'src/app/model/District';
import { Province } from 'src/app/model/Province';
import { CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: 'app-get-contact-info',
  templateUrl: './get-contact-info.component.html',
  styleUrls: ['./get-contact-info.component.css']
})


export class GetContactInfoComponent implements OnInit {

  // listDistrict: Array<District> = [];
  listProvince: Array<Province> = [];
  listDistrict: Array<District> = [];

  constructor(private customerSer: CustomerService) { }

  ngOnInit(): void {
    this.customerSer.getAllProvince().subscribe((
      data => {
        this.listProvince = data;
      }));
  }

  onChangeProvince(id_province: number) {
    this.customerSer.getAllDistrictByIdProvince(id_province).subscribe((data => {
      this.listDistrict = data;
      // this.listProvince = null;
    }))
  }
}

