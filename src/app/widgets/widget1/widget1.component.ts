import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import {OktaWidget1Service } from 'app/shared/okta/okta-widget-1.service';
import {OktaGetUserService} from 'app/shared/okta/okta-get-user.service';
import { OktaConfigService } from 'app/shared/okta/okta-config.service';
import {StartpageComponent} from 'app/startpage/startpage.component';

@Component({
  selector: 'app-widget1',
  templateUrl: './widget1.component.html',
  styleUrls: ['./widget1.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class Widget1Component implements OnInit {

  constructor(
    public OktaWidget1Service:OktaWidget1Service,
    public OktaGetUserService:OktaGetUserService,
    public OktaConfigService:OktaConfigService,
    public StartpageComponent:StartpageComponent,
  ) { }

  async ngOnInit(){
    await this.OktaWidget1Service.CloseWidget1(['openid', 'email', 'profile', 'address']);
    await this.OktaWidget1Service.login1(['openid', 'email', 'profile', 'address']);
    // await this.OktaGetUserService.GetMe(this.OktaConfigService.SIW1strUserInfo,this.StartpageComponent.widget1_accesstoken.accessToken)
  }

}
