export async function getAllProducts() {

    // using promise
    // fetch('http://localhost:4000/products')
    // .then(function (res) {
    //     return res.json()
    // })
    // .then(function (data) {
    //     console.log(data)
    // })
    // .catch(function (err) {
    //     console.log(err)
    // })

    const url = "http://localhost:4000/products";
    try {
        const response = await fetch(url);
        console.log(response)
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        return json;
        //console.log(json);
    } catch (error) {
        console.error(error.message);
    }
}

export function getSingleProduct(id) {

    fetch(`http://localhost:4000/products/${id}`)
        .then(function (res) {
            return res.json()
        })
        .then(function (data) {
            console.log(data)
        })
        .catch(function (err) {
            console.log(err)
        })
}

export async function createProduct(obj) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const response = await fetch("http://localhost:4000/products", {
        method: "POST",
        body: JSON.stringify({
            "name": obj.productName,
            "quantity": obj.quantity,
            "price": obj.price
        }),
        headers: myHeaders,
    });
}

//getAllProducts();
//getSingleProduct(3);
//createProduct({productName:"Mango",quantity:100,price:200.00});