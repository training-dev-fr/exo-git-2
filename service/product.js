const getProduct = async (page) => {
    let result = await fetch(`http://localhost:3000/product/${page}`,{
        method: "POST"
    });
    let data = await result.json();
    return data.data;
}

export {getProduct};