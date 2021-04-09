let url = "https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1";
let listProducts = "";

async function getProducts() {
    try {
        // Will get data from the API and turn it into JSON
        const response = await fetch(url);
        const data = await response.json();
        //console.log(data);

        // Browse all products on an API page and add each product to a list (in card format)
        for(let i=0; i<data.products.length; i++){
            //console.log(data.products[i]);
            listProducts += `<div class="card">  
                                <img src="https://${data.products[i].image}" alt="Image">
                                <div class="card-container">
                                    <p class="text14px">${data.products[i].name}</p>
                                    <p class="text12px">${data.products[i].description}</p>
                                    <p class="text12px"> De: R$${data.products[i].oldPrice}</p>
                                    <p class="text16px"><b>Por: R$${data.products[i].price}</b></p>
                                    <p class="text12px">ou ${data.products[i].installments.count}x de R$${data.products[i].installments.value}</p>
                                    <button class="button-style card-button">Comprar</button>
                                </div>
                            </div>`;
        }
        //console.log(listProducts);
        // Will insert the products on the page
        document.getElementById("show-products").innerHTML = listProducts;

        // Defines the next API page
        url = `https://${data.nextPage}`;

    } catch(erro) {
        console.log("[ERROR] " + erro);
    }
}

// Calls the function to load the products from the first page of the API
getProducts();