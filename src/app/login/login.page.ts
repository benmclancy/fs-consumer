import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  public user: any = {
    first_name: "",
    last_name: ""
  };

  constructor(
    private httpClient: HttpClient,
    private navCTRL: NavController
  ) {}

  submit() {
    console.log("Submitting...");
    console.log(this.user);

    this.httpClient.post("http://localhost:3000/api/users/authentication", this.user).subscribe((response: any) => {
      console.log(response);
      const userId = response.user.id;

      localStorage.setItem("USER_ID", userId);
      /*
      In pages to link to info:
      if(userId) {
        this.httpClient.get(...)
      } else {
        //Nav to login page
      }
      */
      this.navCTRL.navigateForward ( "main/tabs/tab1", {
        // queryParams: {
        //   user_id: userId
        // }
      })
    },
    (err) => {
      console.log(err);
      alert(err.error.message)
    });
  }
  navToRegister() {
    this.navCTRL.navigateForward("register");
  }

}
