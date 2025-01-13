import { getProduct } from "./service/product.js"


const showProduct = async () => {
    const listProduct = await getProduct(1);
    let productDom = document.querySelector(".product-list");
    let stringDom = "";
    for(let product of listProduct){
        stringDom += `<div class="product">
            <div class="picture">
                <img src="https://dummyimage.com/250x100/000000/FFFFFF.png" />
            </div>
            <div class="content">
                <div class="name">
                    ${product.name}
                </div>
                <div class="price">
                    ${product.price}
                </div>
            </div>
            </div>
        `
    }
    productDom.innerHTML += stringDom;
}

showProduct();