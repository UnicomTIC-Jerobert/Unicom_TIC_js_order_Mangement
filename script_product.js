import { createProduct, getAllProducts } from './api_product.js';

console.log("script product connected");

document.addEventListener('DOMContentLoaded', function () {

    const displayTable=document.querySelector('#displayProducts tbody')

    document.getElementById('productForm').addEventListener('submit', async function (event) {
        event.preventDefault();

        // alert("testing");

        // 1. retrive information from form
        const productName = document.forms["productForm"]["productName"].value;
        const productQuantity = document.forms["productForm"]["quantity"].value;
        const productPrice = document.forms["productForm"]["price"].value;

        // 2. Create Object
        const productObj = { productName: productName, quantity: productQuantity, price: productPrice }

        console.log(productObj);

        await createProduct(productObj)
    })


    async function generateTable() {
        const productData = await getAllProducts();
        //console.log(data);
        // customerData.push(data);

        let tableStr = '';
        productData.forEach(function (product) {
            console.log(product)
            tableStr = tableStr + `<tr>
                    <td>${product.name}</td>
                    <td>${product.quantity}</td>
                    <td>${product.price}</td>
                    <td><button>Edit</button><button>Delete</button></td>
                    </tr>`
        });

        displayTable.innerHTML = tableStr;
        //console.log(customerData);
    }

    generateTable();
})

