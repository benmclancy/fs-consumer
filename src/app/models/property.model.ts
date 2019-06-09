export class Property {
    id: number;
    name: string;
    location: string;
    img: string;
    price: number;
    user_id: number;

    constructor() {
        this.id = 0;
        this.name = "";
        this.location = "";
        this.img = "";
        this.price = 0;
        this.user_id = 0;
    }
}