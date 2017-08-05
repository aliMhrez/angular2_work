

export class Item {

    constructor (public name: string, public quantity: number, public price: number) {
    }

    toString () {
        return `Product Name: ${this.name} ----- Quantity: ${this.quantity} ----- Price: ${this.price}`;
    }
}
