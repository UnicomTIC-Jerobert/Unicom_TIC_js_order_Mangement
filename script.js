document.addEventListener('DOMContentLoaded', function () {
    const customerData = [];

    const form = document.getElementById("customerForm");
    const displayTable = document.querySelector('#displayCustomer tbody');

    form.addEventListener('submit', async function (event) {
        event.preventDefault();

        // 1. retrive information from form
        const customerName = document.forms["customerForm"]["customerName"].value;
        const customerPhone = document.forms["customerForm"]["phoneNumber"].value;
        const customerEmail = document.forms["customerForm"]["customerEmail"].value;

        // 2. Create Object
        const customerObj = {
            "name": customerName,
            "phoneNumber": customerPhone,
            "email": customerEmail
        }

        //console.log(customerObj)

        await createCustomer(customerObj);
    })


    async function generateTable() {
        const data = await getAllCustomers();
        customerData.push(data);

        let tableStr = '';
        customerData[0].forEach(function (data) {
            tableStr = tableStr + `<tr>
                    <td>${data.name}</td>
                    <td>${data.phoneNumber}</td>
                    <td>${data.email}</td>
                    <td><button>Edit</button><button>Delete</button></td>
                    </tr>`
        });

        displayTable.innerHTML = tableStr;
        //console.log(customerData);
    }

    generateTable();
});

async function getAllCustomers() {
    const url = "http://localhost:3000/customers";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        return json;
    } catch (error) {
        console.error(error.message);
    }
}

async function createCustomer(obj) {
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


