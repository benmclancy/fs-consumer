import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Property } from '../models/property.model';
import { NavController } from '@ionic/angular';

// import {Property} from '../models';
import { PropertyBindingType } from '@angular/compiler';

// class PropertyResponse {
//   public user: ;
// }

class PropertyResponse {
  public properties: Array<Property>;
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public property: Property = new Property;

  public rentals: Array<Property> = [];

  constructor(private navCtrl: NavController, private activatedRoute: ActivatedRoute, private httpClient: HttpClient) {}
  
  ngOnInit() {
    this.httpClient.get("http://localhost:3000/api/properties").subscribe((response: PropertyResponse) => {
          console.log(response);
          // this.rentals=response.properties;
          
          response.properties.forEach((item: Property) => {
            this.property.id = item.id;
            this.property.name = item.name;
            this.property.location = item.location;
            this.property.img = item.img;
            this.property.price = item.price;
            this.property.user_id = item.user_id;
            this.rentals.push(this.property);
          });
        }
      );
  }


  navToTab1() {
    this.navCtrl.navigateForward("main/tabs/tab1");
  }

}
