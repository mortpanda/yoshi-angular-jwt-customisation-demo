import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import {OktaWidget2Service } from 'app/shared/okta/okta-widget-2.service';

@Component({
  selector: 'app-widget2',
  templateUrl: './widget2.component.html',
  styleUrls: ['./widget2.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class Widget2Component implements OnInit {

  constructor(
    public OktaWidget2Service:OktaWidget2Service,
  ) { }

  ngOnInit(){
    this.OktaWidget2Service.CloseWidget2(['openid', 'email', 'profile', 'address', 'scpApprover']);
    this.OktaWidget2Service.login2(['openid', 'email', 'profile', 'address', 'scpApprover']);
  }

}
