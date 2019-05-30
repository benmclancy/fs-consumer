import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private navCtrl: NavController
  ) {}

  navToTab1() {
    this.navCtrl.navigateForward("main/tabs/tab3");
  }

  navToRegister() {
    this.navCtrl.navigateForward("register");
  }

  ngOnInit() {
  }

}
