//引入当前组件
import {Component} from '@angular/core';

@Component({
  selector: 'app-root', //定义当前组件名称
  templateUrl: './app.component.html',//组件界面
  styleUrls: ['./app.component.css']//组件css
})
export class AppComponent {
  title = 'angulardemo';//属性

  constructor() { //构造函数
  }

}
