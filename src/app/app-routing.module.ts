import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DataMarketComponent} from './components/data-market/data-market.component';
import {HearComponent} from './components/hear/hear.component';
import {MainComponent} from './components/main/main.component';
import {LoginComponent} from './components/login/login.component';
const routes: Routes = [

  {path: 'DataMarket', component: DataMarketComponent},
  {path: 'Hear', component: HearComponent},
  {path: 'Main', component: MainComponent},
  {path: 'Login', component: LoginComponent},
  // {
  //   path:'**',
  //   redirectTo: '/Main'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
