import { Injectable } from '@angular/core';
import { Property } from '../models';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  public properties: Array<Property> = [];

  constructor() { }

  getAllProperties() {
    this.properties = [];

    let property1 = new Property();
    property1.id = 1;
    property1.name = "Big House";
    property1.location = "Joe";
    property1.price = 230;
    property1.img = "http://miriadna.com/desctopwalls/images/max/Perfect-house-interior.jpg"

    let property2 = new Property();
    property2.id = 2;
    property2.name = "Small House";
    property2.location = "Kelly"
    property2.price = 170;
    property2.img = "https://www.liveenhanced.com/wp-content/uploads/2018/01/house-interior-design-3.jpg"

    let property3 = new Property();
    property3.id = 3;
    property3.name = "Town House";
    property3.location = "Mike";
    property3.price = 185;
    property3.img = "https://wp.homepolish.com/wp-content/uploads/Homepolish-interior-design-04a20-800x500.jpg"

    this.properties.push(property1);
    this.properties.push(property2);
    this.properties.push(property3);
  }

  // Returns null if not found.
  findPropertyById(id: number): Property {
    let foundProperty: Property = null;

    this.properties.forEach(
      (property: Property) => {
        if (property.id == id) {
          foundProperty = property;
        }
      }
    );

    return foundProperty;
  }

}
