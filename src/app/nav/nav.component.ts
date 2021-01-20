import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  labelContact = 'Contact';
  labelAbout = 'About';
  employee = {
    name : 'Puvanat Wichaidit',
    tel : '0929936149',
    salary : 19500
  }
  constructor() { }

  ngOnInit(): void {
  }

}
