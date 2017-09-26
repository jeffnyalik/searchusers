import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users:any;
  username:string;
  repos:any;
  constructor(private dataService:DataService) {
    
   }

   searchUser(){
     this.dataService.updateUsername(this.username);
     this.dataService.getUsers().subscribe((users) =>{
      this.users = users;
      console.log(users);
    });

    this.dataService.getRepos().subscribe((repos) =>{
      this.repos = repos;
    })
    
   }

   


  ngOnInit() {
    console.log('working properly');
  }

}