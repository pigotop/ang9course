import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  fullName: string = '';
  salary: number = 2500;
  constructor() { }

  ngOnInit(): void {
  }

  myKeyUp(){
    console.log(this.fullName.length);
  }

  doSave(){
    alert(this.fullName);
  }
}
