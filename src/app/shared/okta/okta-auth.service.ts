import { Injectable } from '@angular/core';
import { OktaAuth } from "@okta/okta-auth-js";
import { OktaConfigService } from './okta-config.service';


@Injectable({
  providedIn: 'root'
})
export class OktaSDKAuthService {
  constructor(private OktaConfigService: OktaConfigService  ){ }

    SIW_1_config = {
        clientId: this.OktaConfigService.SIW1strClientID,
        issuer: this.OktaConfigService.SIW1strIssuer,
        redirectUri: this.OktaConfigService.SIW1strRedirectURL,
        postLogoutRedirectUri:this.OktaConfigService.SIW1strPostLogoutURL,
        responseMode: this.OktaConfigService.SIW1strResponseMode,
        responseType: this.OktaConfigService.SIW1strResponseType,
        scopes: this.OktaConfigService.SIW1strScope,
        prompt: this.OktaConfigService.SIW1strPrompt,

    };

    OktaSDKAuthClient_1 = new OktaAuth(this.SIW_1_config);    

   

    
  }
  