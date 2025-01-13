import { getProduct } from "./service/product.js"


const showProduct = async () => {
    const listProduct = await getProduct(1);
    let productDom = document.querySelector(".product-list");
    let stringDom = "";
    for(let product of listProduct){
        stringDom += `<div class="product">
            <div class="name">
                <img src="https://dummyimage.com/250x100/000000/FFFFFF.png" />
            </div>
            <div class="name">
                ${product.name}
            </div>
            <div class="name">
                ${product.price}
            </div>
        `
    }
    productDom.innerHTML += stringDom;
}

showProduct();