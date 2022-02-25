import { Injectable } from '@angular/core';
import { OktaConfigService } from "./okta-config.service";
import { OktaSDKAuthService } from './okta-auth.service';
import { OktaAuth } from '@okta/okta-auth-js';



@Injectable({
  providedIn: 'root'
})
export class OktaGetUserService {
  strThisUserInfo;
  strThisSession;
  strThisUser;
  strThisUserID;
  strFullName;
  strStreeAddress;
  strLocality;
  strRegion;
  strPostCode;
  strCountry;
  bolCIAM;
  bolWorkforce;

  public authService = new OktaAuth(this.OktaSDKAuthService.SIW_1_config);

  constructor(
    public OktaConfigService: OktaConfigService,
    public OktaSDKAuthService: OktaSDKAuthService,
  ) { }

  async GetMe(url, token) {
    const thisFetch = fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
        'Accept': 'application/json',
      },

    })
      .then(response => response.json())
    this.strThisUserInfo = await thisFetch;
    // console.log('Getting me using service')
    // console.log(this.strThisUserInfo);
    this.strThisUser = this.strThisUserInfo.email;
    this.strThisUserID = this.strThisUserInfo.sub;
    this.strFullName = this.strThisUserInfo.name;
    this.strStreeAddress = this.strThisUserInfo.address.street_address;
    this.strLocality = this.strThisUserInfo.address.locality;
    // this.strRegion = this.strThisUserInfo.profile.state;
    // this.strPostCode = this.strThisUserInfo.profile.zipCode;
    // this.strCountry = this.strThisUserInfo.profile.countryCode;
    // this.bolCIAM = this.strThisUserInfo.profile.ciam;
    // this.bolWorkforce = this.strThisUserInfo.profile.workforce;
  

    // this.OktaSDKAuthService.OktaSDKAuthClient.signOut()
    
  }

  // async GetUserInfo_1() {
  //   this.strThisSession = await this.authService.token.getWithoutPrompt();
  //   console.log(this.strThisSession);
  //   await this.GetMe(this.OktaConfigService.SIW1strBaseURI + this.OktaConfigService.SIW1strUserInfo, this.strThisSession.tokens.accessToken.accessToken);
  // }

}
