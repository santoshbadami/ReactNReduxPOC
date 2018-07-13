import delay from './delay';


const products=[
{
    productid:1,
    productName:'SAMSUNG S7',
    unitPrice:20000
},
{
    productid:2,
    productName:'iPhone 7',
    unitPrice:40000
},
{
    productid:3,
    productName:'Moto 3Gen',
    unitPrice:10000
}
]


const generateId = () => {
    return products.length+1;
};
class ProductApi {
    static getAllProducts() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(Object.assign([], products));
            }, delay);
        });
    }
    static saveProduct(product) {
        product = Object.assign({}, product); // to avoid manipulating object passed in.
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate server-side validation
                debugger;
                if (product.productid) {
                    const existingProductIndex = products.findIndex(a => a.productid === product.productid);
                    products.splice(existingProductIndex, 1, product);
                } else {
                    //Just simulating creation here.
                    //The server would generate ids and watchHref's for new courses in a real app.
                    //Cloning so copy returned is passed by value rather than by reference.
                    product.productid = generateId();
                    products.push(product);
                }

                resolve(product);
            }, delay);
        });
    }
    static deleteProduct(productid) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const indexOfProductToDelete = products.findIndex(product => product.productid === productid);
                products.splice(indexOfProductToDelete, 1);
                resolve();
            }, delay);
        });
    }
    static getProduct(id) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const existingProductIndex = products.findIndex(product => product.productid === id);
                
                const productFound = Object.assign({}, products[existingProductIndex]);

                resolve(productFound);

            }, delay);
        });
    }
}


export default ProductApi;