import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-auth-setting',
  templateUrl: './auth-setting.component.html',
  styleUrls: ['./auth-setting.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AuthSettingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
