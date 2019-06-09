import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { User } from '../models/user.model';

class UserResponse {
  public user: User;
}

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public user: User = new User();


  constructor(private httpClient: HttpClient, private activatedRoute: ActivatedRoute) {}


  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe(
      (parameters: ParamMap) => {
        console.log(parameters);
        const userId = localStorage.getItem('USER_ID')

        this.httpClient
          .get(`http://localhost:3000/api/users/${userId}`)
          .subscribe(
            (response: UserResponse) => {
              console.log(response);
              this.user.id = response.user.id;
              this.user.first_name = response.user.first_name;
              this.user.last_name = response.user.last_name;
              this.user.email = response.user.email;
              this.user.password = response.user.password;
            }
          );
      }
    );
  }

}

//NOTES:
//-QUERY PARAMETERS

