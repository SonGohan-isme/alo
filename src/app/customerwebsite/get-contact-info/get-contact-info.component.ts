import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';

import { CanActivate } from "@angular/router";
import { Injectable } from "@angular/core";

@Component({
  selector: 'app-get-contact-info',
  templateUrl: './get-contact-info.component.html',
  styleUrls: ['./get-contact-info.component.css']
})


export class GetContactInfoComponent implements OnInit {
  // @ViewChild('myModel') myModel: ModalDirective;

  ngOnInit(): void {
    // this.myModel.show();
  }


}
