
const fs = require('fs');
const path= require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'cart.json'
  );

module.exports= class Cart{
  
    static addProduct(id){
        //fetch previous data
        fs.readFile(p, (err, fileContent)=>{
            let cart= {products: [], totalPrice: 0}
            if(err){
                cart= JSON.parse(fileContent)
            }
            // analyse the cart => find existig product
            const existingProductIndex= cart.products.find(prod => prod.id === id);
            const existingProduct= cart.products[existingProductIndex]
            let updateProduct;
            //adding new product or increase
            if(existingProduct) {
                updateProduct= {...existingProduct };
                updateProduct.qty= updateProduct.qty + 1;
                cart.products = [...cart.products];
                cart.products[existingProductIndex]= updateProduct
            }else{
                updateProduct = { id: id, qty :1};
                cart.products = [...cart.products, updateProduct];
            }
            cart.totalPrice = cart.totalPrice + +productPrice;
            fs.writeFile(p, JSON.stringify(cart), (err)=>{
                console.log(err);
            })
        })
    }

}