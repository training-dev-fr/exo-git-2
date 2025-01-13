const getProduct(page) = async () => {
    let result = await fetch(`http://localhost:3000/product/${page}`,{
        method: "POST"
    });
    let data = await result.json();
    return data.data;
}