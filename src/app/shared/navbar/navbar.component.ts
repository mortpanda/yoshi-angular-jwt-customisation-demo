import { Component, OnInit, ElementRef } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {OktaSDKAuthService} from 'app/shared/okta/okta-auth.service';
import { ViewEncapsulation } from '@angular/core';
import { ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import {OktaAuth2Service} from 'app/shared/okta/okta-auth-2.service'



declare const OktaMFA: any;
declare const RemoveMFAWidget: any;



@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    encapsulation: ViewEncapsulation.None
})


export class NavbarComponent implements OnInit {
    private toggleButton: any;
    private sidebarVisible: boolean;
    public Userfullname: any;
    //private authService = new OktaAuth(this.oktaSDKAuth.config);


    constructor( 
        public location: Location, 
        private element: ElementRef,
        public _matdialog: MatDialog, 
        private router: Router,
        public OktaSDKAuthService:OktaSDKAuthService,
        public OktaAuth2Service:OktaAuth2Service,
        ) {
        this.sidebarVisible = false;
        
    }

    ngOnInit() {
        const navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];


    }
    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const html = document.getElementsByTagName('html')[0];
        // console.log(html);
        // console.log(toggleButton, 'toggle');

        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');

        this.sidebarVisible = true;
    };
    sidebarClose() {
        const html = document.getElementsByTagName('html')[0];
        // console.log(html);
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };
    sidebarToggle() {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
    };
    isHome() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }
        if (titlee === '/home') {
            return true;
        }
        else {
            return false;
        }
    }

    isDocumentation() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }
        if (titlee === '/documentation') {
            return true;
        }
        else {
            return false;
        }
    }


      Logout(){
          try{
            localStorage.removeItem("okta_siw_1_accesstoken");
            localStorage.removeItem("okta_siw_1_idtoken");
            localStorage.removeItem("okta_siw_2_accesstoken");
            localStorage.removeItem("okta_siw_2_idtoken");           
            this.OktaSDKAuthService.OktaSDKAuthClient_1.signOut()

        }catch(e){
      }
    }

}
