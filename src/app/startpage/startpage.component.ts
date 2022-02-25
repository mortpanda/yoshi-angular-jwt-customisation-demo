import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { OktaWidget1Service } from 'app/shared/okta/okta-widget-1.service';
// import {OktaGetUserService} from 'app/shared/okta/okta-get-user.service';
import { OktaConfigService } from 'app/shared/okta/okta-config.service';
import {AuthSettingComponent} from 'app/auth-setting/auth-setting.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-startpage',
  templateUrl: './startpage.component.html',
  styleUrls: ['./startpage.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StartpageComponent implements OnInit {
  widget1_tokens: boolean = false;
  widget1_idtoken;
  widget1_accesstokens;
  access_code_1;
  
  arrThisUser_1;
  siw_1_name;


  widget2_tokens;
  widget2_accesstokens;
  widget2_idtoken;
  arrThisUser_2

  constructor(
    public OktaWidget1Service: OktaWidget1Service,
    // public OktaGetUserService:OktaGetUserService,
    public OktaConfigService:OktaConfigService,
    public AuthSettingComponent:AuthSettingComponent,
    public _matdialog: MatDialog,
  ) { }

  

  async ngOnInit() {
    this.OktaWidget1Service.CloseWidget1(['openid', 'email', 'profile', 'address']);
    this.widget1_accesstokens =  localStorage.getItem('okta_siw_1_accesstoken');
    this.widget1_idtoken =  localStorage.getItem('okta_siw_1_idtoken');   

    

    // this.access_code_1 = JSON.parse(this.widget1_accesstokens);
    console.log(JSON.parse(this.widget1_accesstokens));   
    switch (this.widget1_accesstokens) {
      case null: {
        this.widget1_tokens = false;
        break;
      }
      default: {
        this.widget1_tokens = true;
        this.arrThisUser_1 = JSON.parse(this.widget1_accesstokens);
        this.siw_1_name = this.arrThisUser_1.claims.sub;
        break;
      }
    }

    this.widget2_accesstokens =  localStorage.getItem('okta_siw_2_accesstoken');
    this.widget2_idtoken =  localStorage.getItem('okta_siw_2_idtoken');   
    switch (this.widget2_accesstokens) {
      case null: {
        console.log("widget 2 false")
        this.widget2_tokens = false;
        break;
      }
      default: {
        console.log("widget 2 true")
        this.widget2_tokens = true;
        this.arrThisUser_2 = JSON.parse(this.widget2_accesstokens);
        // this.siw_1_name = this.arrThisUser_1.claims.sub;
        // await this.OktaGetUserService.GetMe(this.OktaConfigService.SIW1strUserInfo,this.access_code_1.accessToken)
        // await console.log(this.OktaGetUserService.strThisUserInfo);
        // localStorage.setItem('okta_siw_1_userinfo',JSON.stringify(this.OktaGetUserService.strThisUserInfo));

        // this.arrThisUser_1 = JSON.parse(localStorage.getItem('okta_siw_1_userinfo'));
        // console.log(this.arrThisUser_1)

        // this.siw_1_name = this.arrThisUser_1.sub
        // console.log(this.siw_1_name)
        break;
      }
    }

    

  }

  AuthServerSetting(){
    const SettingDialogConfig = new MatDialogConfig();
    SettingDialogConfig.disableClose = false;
    SettingDialogConfig.id = "auth-server-setting";
    SettingDialogConfig.height = "60%";
    // SettingDialogConfig.width = "450px";
    const modalDialog = this._matdialog.open(AuthSettingComponent, SettingDialogConfig);
  }
  
}

