//**Anuglar根模块 */ 

//BrowserModule，浏览器解析模块
import {BrowserModule} from '@angular/platform-browser';
//angular核心模块
import {NgModule} from '@angular/core';
//路由模块
import {AppRoutingModule} from './app-routing.module';
//根组件
import {AppComponent} from './app.component';
//注册自定义组件
import {DataMarketComponent} from './components/data-market/data-market.component';
import {HearComponent} from './components/hear/hear.component';
import {MainComponent} from './components/main/main.component';

//NgModule装饰器，接受一个元数据对象，告诉angular如何编译和启动
@NgModule({
  declarations: [//配置当前项目运行的组件
    AppComponent,
    DataMarketComponent,
    HearComponent,
    MainComponent
  ],
  imports: [ //配置当前模块运行依赖的其他模块
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],//配置项目所需的服务
  bootstrap: [AppComponent]//指定应用的主视图，通过引导模块引导AppMoudle启动应用，通常是根组件
})
//暴露当前模块
export class AppModule {
}
