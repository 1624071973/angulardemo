import { Component, OnInit } from '@angular/core';
import{Router,NavigationExtras} from '@angular/router';
import{CommonService} from '../../services/common.service';
import{ActivatedRoute} from '@angular/router';
import{people} from '../../model/people';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

public cityList:any[]=['北京','上海','深圳'];

public  hobbyList:any[]=[
  {
  title:'吃饭',
  checked:false
},{

    title:'睡觉',
    checked:false
},{

  title:'敲代码',
  checked:true
}]

public name:any;
public peopleInfo:people=this.people

  constructor(protected route:ActivatedRoute,protected commonService:CommonService,protected router:Router,private people:people) {
    console.log(this.commonService.getinfo(1))
    // let v:people =this.commonService.getinfo(1);
let v = this.commonService.peopleInfo;
    if(v!=null){
      this.peopleInfo=v
    }
   
   
   }

  ngOnInit() {
    
   
  }

  doSubmit(){

    /*    
    jquery  dom操作

      <input type="text" id="username" />
      let usernameDom:any=document.getElementById('username');
      console.log(usernameDom.value);    
    */
  this.commonService.peopleInfo= this.peopleInfo;
   // this.commonService.setinfo('info',this.peopleInfo);
    this.router.navigate(['/DataMarket']);

    // let queryParams: NavigationExtras = {
    //   queryParams: { 
    //     'peolpe': {"username":"","sex":"1","city":"","hobby":[{"title":"吃饭","checked":false},{"title":"睡觉","checked":false},{"title":"敲代码","checked":true}],"mark":""} ,
    //     'name':'111'},
    //   fragment: 'anchor'
    //   };
    // this.router.navigate(['/DataMarket'],queryParams);
    


  }
gonext(){
  console.log(this.peopleInfo);    
  this.router.navigate(['/DataMarket/',this.peopleInfo]);

}

}
