import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { OktaAuth } from "@okta/okta-auth-js";
import { BehaviorSubject } from "rxjs";
import OktaSignIn from '@okta/okta-signin-widget';
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';
import { OktaConfigService } from "./okta-config.service";

@Injectable({
  providedIn: 'root'
})

export class OktaWidget1Service {
  private authClient = new OktaAuth({
    issuer: this.OktaConfig.SIW1strIssuer,
    clientId: this.OktaConfig.SIW1strClientID,
  });
  public isAuthenticated = new BehaviorSubject<boolean>(false);
  public strstateToken;
  public oktaSignIn;
  public idToken;
  public LogoutURI = this.OktaConfig.SIW1strPostLogoutURL;
  widget1_id = [];
  AccessToken_1;

  constructor(private router: Router, private OktaConfig: OktaConfigService) { }

  async checkAuthenticated() {
    const authenticated = await this.authClient.session.exists();
    this.isAuthenticated.next(authenticated);
    return authenticated;
  }

  
  async login1(scope) {
    const OktaClientID = this.OktaConfig.SIW1strClientID;
    const OktaBaseURI = this.OktaConfig.SIW1strBaseURI;
    const OktaLang = this.OktaConfig.SIW1strLang;
    const OktaRedirect = this.OktaConfig.SIW1strRedirectURL;
    const OktaBrand = this.OktaConfig.SIW1strBrand;
    const OktaPostlogoutURI = this.OktaConfig.SIW1strPostLogoutURL;
    const OktaIssuer = this.OktaConfig.SIW1strIssuer;
    // const OktaScope = this.OktaConfig.SIW1strScope;
    const OktaScope = scope;
    const OktaResType = this.OktaConfig.SIW1strResponseType;
    const OktaResMode = this.OktaConfig.SIW1strResponseMode;
    const OktaWidgetLogo = this.OktaConfig.SIW1strLogo;
    var oktaSignIn = new OktaSignIn({
      logo: OktaWidgetLogo,
      clientId: OktaClientID,
      baseUrl: OktaBaseURI,
      language: OktaLang,
      redirectUri: OktaRedirect,
      colors: {
        brand: OktaBrand,
      },
      postLogoutRedirectUri: OktaPostlogoutURI,
      authParams: {
        issuer: OktaIssuer,
        responseMode: 'fragment',
        responseType: OktaResType,
        scopes: OktaScope,
        pkce: false,
        prompt: OktaResMode
      },

    });
    // console.log(OktaScope)
    await oktaSignIn.showSignInToGetTokens({
      el: '#okta-signin-container'
    }).then(function (tokens) {

      oktaSignIn.authClient.tokenManager.setTokens(tokens);
      oktaSignIn.remove();
      const idToken = tokens.idToken;
      console.log("Hello, " + idToken.claims.email + "! You just logged in! :)");
      // console.log(tokens.accessToken);
      // console.log(tokens.idToken);
      localStorage.setItem("okta_siw_1_accesstoken", JSON.stringify(tokens.accessToken));
      localStorage.setItem("okta_siw_1_idtoken", JSON.stringify(tokens.idToken));

      window.location.replace(OktaRedirect);
      return true;

    }).catch(function (err) {
      console.error(err);
      return false;
    });

  }



  CloseWidget1(scope) {
    const OktaClientID = this.OktaConfig.SIW1strClientID;
    const OktaBaseURI = this.OktaConfig.SIW1strBaseURI;
    const OktaLang = this.OktaConfig.SIW1strLang;
    const OktaRedirect = this.OktaConfig.SIW1strRedirectURL;
    const OktaBrand = this.OktaConfig.SIW1strBrand;
    const OktaPostlogoutURI = this.OktaConfig.SIW1strPostLogoutURL;
    const OktaIssuer = this.OktaConfig.SIW1strIssuer;
    //const OktaScope = this.OktaConfig.SIW1strScope;
    const OktaScope = scope;
    const OktaResType = this.OktaConfig.SIW1strResponseType;
    const OktaResMode = this.OktaConfig.SIW1strResponseMode;
    var oktaSignIn = new OktaSignIn({
      clientId: OktaClientID,
      baseUrl: OktaBaseURI,
      language: OktaLang,
      redirectUri: OktaRedirect,
      colors: {
        brand: OktaBrand,
      },
      postLogoutRedirectUri: OktaPostlogoutURI,
      authParams: {
        issuer: OktaIssuer,
        responseMode: OktaResMode,
        responseType: OktaResType,
        scopes: OktaScope,
        pkce: false,
        prompt: OktaResMode
      },
    });
    oktaSignIn.remove();

  }

}

