import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
    private username = "jeffnyalik ";
    private client_id = "7148410ea88cad417542";
    private secret_key = "601e006b79c51bff8ff0b63aff7fa56b1135bb5a";

  constructor(public http: Http) { 
    // code
  }

  getUsers(){
    return this.http.get('https://api.github.com/users/'+this.username).map(res => res.json());
  }

  getRepos(){
    return this.http.get('https://api.github.com/users/'+this.username+'/repos').map(res=> res.json());
  }

  updateUsername(username:string){
    this.username =username;
  }

}
