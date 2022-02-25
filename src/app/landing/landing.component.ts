import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { Widget1Component } from 'app/widgets/widget1/widget1.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class LandingComponent implements OnInit {

  constructor(
    public Widget1Component: Widget1Component,
    public _matdialog: MatDialog,
    
  ) { }

  ngOnInit() {
    try{
      localStorage.removeItem("okta_siw_1_accesstoken");
      localStorage.removeItem("okta_siw_1_idtoken");
      localStorage.removeItem("okta_siw_2_accesstoken");
      localStorage.removeItem("okta_siw_2_idtoken");           
      // this.OktaSDKAuthService.OktaSDKAuthClient_1.signOut()

  }catch(e){
}
  }

  async widget1Login() {
    const WidgetDialogConfig = new MatDialogConfig();
    WidgetDialogConfig.disableClose = false;
    WidgetDialogConfig.id = "widget-modal-component";
  
    const modalDialog = this._matdialog.open(Widget1Component, WidgetDialogConfig);
  }
}
