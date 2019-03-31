import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-hear',
  templateUrl: './hear.component.html',
  styleUrls: ['./hear.component.css']
})
export class HearComponent implements OnInit {

public date:any=new Date();
flag:boolean=true;
  constructor() {
  }
  showLogin(){
  this.flag=!this.flag;

  }

  ngOnInit() {
  }

}
