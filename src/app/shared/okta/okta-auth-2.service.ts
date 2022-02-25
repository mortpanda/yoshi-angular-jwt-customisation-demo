import { Injectable } from '@angular/core';
import { OktaAuth } from "@okta/okta-auth-js";
import { OktaConfigService } from './okta-config.service';

@Injectable({
  providedIn: 'root'
})
export class OktaAuth2Service {

  constructor(
    private OktaConfigService: OktaConfigService
  ) { }

  // SIW_2_config = {
  //   clientId: this.OktaConfigService.SIW2strClientID,
  //   issuer: this.OktaConfigService.SIW2strIssuer,
  //   redirectUri: this.OktaConfigService.SIW2strRedirectURL,
  //   postLogoutRedirectUri:this.OktaConfigService.SIW2strPostLogoutURL,
  //   responseMode: this.OktaConfigService.SIW2strResponseMode,
  //   responseType: this.OktaConfigService.SIW2strResponseType,
  //   scopes: this.OktaConfigService.SIW2strScope,
  //   prompt: this.OktaConfigService.SIW2strPrompt,

};

// OktaSDKAuthClient_2 = new OktaAuth(this.SIW_2_config);    

// }
