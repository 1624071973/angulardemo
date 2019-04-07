import { Injectable } from '@angular/core';
import { people } from '../model/people';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  public peopleInfo:people

  setinfo(key:any,e:people){
    this.peopleInfo=e
    // localStorage.setItem(key,JSON.stringify(e))
  }
  getinfo(key){
    return this.peopleInfo; 
    // var info = JSON.parse(localStorage.getItem(key)) 
    
    // return info==null? this.peopleInfo:info
  }
  remove(key){
    // localStorage.removeItem(key)
  }

}
