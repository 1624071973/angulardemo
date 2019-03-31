import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  // 定义数据的几种方式
  public tltle = '我来组成首页';

  msg: string = '欢迎来到数据目录';

  public msg2: any = '欢迎来再次来到数据目录';

  public dataProduct: object = {
    id: '001',
    dataType: 'hive'
  };

  public txtContent = '<h1>这是一个h1标签</h1>';

  // 定义数组
  movies = ['疯狂外星人', '复仇者', '飞驰人生']

  dataProductList: any[] = [
    {
      id: '001',
      name: 'demo01',
      dataType: 'hive',
      status: 0   //状态0：未发布；1：已发布；2：已下架
    },
    {
      id: '002',
      name: 'demo02',
      dataType: 'hdfs',
      status: 1
    },
    {
      id: '003',
      name: 'demo03',
      dataType: 'hive',
      status: 2
    }
  ]


  isOption: boolean = true;

  constructor() {
    console.log(this.movies);
  }

  ngOnInit() {
  }

}
