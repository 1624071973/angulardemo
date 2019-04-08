import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router';
import{CommonService} from '../../services/common.service';
import{Router,NavigationExtras} from '@angular/router';
import { people } from 'src/app/model/people';
@Component({
  selector: 'app-data-market',
  templateUrl: './data-market.component.html',
  styleUrls: ['./data-market.component.css']
})
export class DataMarketComponent   implements OnInit {
  public peopleInfo:people =this.people
  constructor( protected route:ActivatedRoute,protected commonService:CommonService,protected router:Router,private people:people) { 



   
    let v:people = this.commonService.peopleInfo;
    if(v!=null){
      this.peopleInfo=v
    }

//     console.log(this.route );
//     this.route.queryParams.subscribe(date=> console.log(date.uername)) 
//     this.route.queryParams.subscribe(date=> console.log(date.people)) 
//     this.route.params.subscribe((data)=>{

//       console.log(data);


// })
//     this.route.params.subscribe(date=> console.log('+++++++++'+date))

    console.log('*********'+JSON.stringify(this.peopleInfo) );

  }

  ngOnInit() {
  }

  back(){
    
    this.router.navigate(['/Login']);
  }
}
