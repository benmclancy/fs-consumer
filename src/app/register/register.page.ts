import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage {

  public user: any = {
    firstname: "",
    lastname: "",
    email: "",
    password: ""
  };



  constructor(
    private httpClient: HttpClient, 
    private navCTRL: NavController) {}

  submit() {
    console.log("Submitting...");
    console.log(this.user);

    this.httpClient.post("http://localhost:3000/api/users", this.user).subscribe((response:any) => {
      console.log(response);
      const id = response.id;
      localStorage.setItem("USER_ID", id);
      this.navCTRL.navigateForward ( "main/tabs/tab1", {
        // queryParams: {
        //   user_id: response
        // }
      }  );
    },
    (err) => {
      console.log(err);
      alert(err.error.message)
    });
  }

  navBack() {
    this.navCTRL.navigateForward("");
  }

}
