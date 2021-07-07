import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common/common.service';

@Component({
  selector: 'app-claim-guide',
  templateUrl: './claim-guide.component.html',
  styleUrls: ['./claim-guide.component.css']
})
export class ClaimGuideComponent implements OnInit {

  constructor(public common: CommonService, private router: Router) { }

  ngOnInit(): void {
  }

  exit() {
    this.common.deleteCookie('token_customer');
    this.router.navigate(['login-customerweb']);
  }

}
