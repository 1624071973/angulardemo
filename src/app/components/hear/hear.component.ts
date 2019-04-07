import {Component, OnInit} from '@angular/core';
import{CommonService} from '../../services/common.service';

@Component({
  selector: 'app-hear',
  templateUrl: './hear.component.html',
  styleUrls: ['./hear.component.css']
})
export class HearComponent implements OnInit {



flag:boolean=true;
  constructor(private commonService:CommonService) {
  }
  showLogin(){
  this.flag=!this.flag;

  }

  ngOnInit() {
  }

}
