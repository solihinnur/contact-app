import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class KontakService {

  private loggedInStatus = false

  constructor(
    private _http:Http
  ) { }
  checkMe:any;
  getKontaks(){
    return this._http.get("http://localhost/contact-app/api/select.php/")
      .map(res=>{
        this.checkMe = res;
       
        if(this.checkMe._body !== "0"){
           return res.json()
        }
       
      });
  }
  addKontak(info){
    return this._http.post("http://localhost/contact-app/api/insert.php",info)
      .map(()=>"");
  }
  deleteKontak(id){
    return this._http.post("http://localhost/contact-app/api/delete.php/",{'id':id})
      .map(()=>this.getKontaks());
  }
  updateKontak(info){
    return this._http.post("http://localhost/contact-app/api/update.php/", info)
      .map(()=>"");
  }
  getKontak(id){
    return this._http.post("http://localhost/contact-app/api/selectone.php/",{'id':id})
      .map(res=>res.json());
  }
  getSearch(nama){
    return this._http.post("http://localhost/contact-app/api/search.php/",{'nama':nama})
      .map(res=>res.json());
  }
  logout(): void {
    localStorage.setItem('isLoggedIn', "false");
    localStorage.removeItem('token');
  } 
  //==================LOGIN==========================
  getUserDetails(username, password) {
    return this._http.post("http://localhost/contact-app/api/login.php",
    {'username':username,'password':password})
    .map(res=>res.json());
  }
  // async getUserDetails(username, password) {
  //   try {
  //     const result = await this._http.post("http://localhost/contact-app/api/login.php",
  //     {'username':username,'password':password});
  //     console.log(result);
  //     return result;
  //   } catch(error) {
  //     console.error(error);
  //   }
  // }

  setLoggedIn(value: boolean) {
    localStorage.setItem("isLoggedIn", value.toString());
    this.loggedInStatus = value
  }

}