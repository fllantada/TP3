type Product = {title: string, price: number,thumbnail: string}};


class productApi {
    
    private products: Product[] 
    constructor () {
        this.products = [];
    }
    getAll(): Product[] {
        return this.products;
    }

}
const product = new productApi();









export default product;