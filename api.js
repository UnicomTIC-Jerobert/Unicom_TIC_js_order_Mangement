

function getAllCustomers1() {
    fetch('http://localhost:3000/customers')
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data)
        })
        .catch(function (err) {
            console.log(err)
        })
}

async function getAllCustomers2() {
    const url = "http://localhost:3000/customers";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.error(error.message);
    }
}

function getSingleCustomer1(id) {
    fetch('http://localhost:3000/customers/' + id)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data)
        })
        .catch(function (err) {
            console.log(err)
        })
}

function getSingleCustomer2(id) {
    fetch(`http://localhost:3000/customers/${id}`)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data)
        })
        .catch(function (err) {
            console.log(err)
        })
}


async function createCustomer1() {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const response = await fetch("http://localhost:3000/customers", {
        method: "POST",
        body: JSON.stringify({
            "name": "vijay",
            "phoneNumber": "0771231234",
            "email": "vijay@123.com"
        }),
        headers: myHeaders,
    });
}

async function createCustomer2(obj) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const response = await fetch("http://localhost:3000/customers", {
        method: "POST",
        body: JSON.stringify({
            "name": obj.name,
            "phoneNumber": obj.phoneNumber,
            "email": obj.email
        }),
        headers: myHeaders,
    });
}

module.exports = { createCustomer2 }