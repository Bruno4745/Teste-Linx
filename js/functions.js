let url = "https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1";
let listProducts = "";

async function getProducts(num) {
    try {
        // Will get data from the API and turn it into JSON
        const response = await fetch(url);
        const data = await response.json();
        console.log(num);
        if(num > 0){
            teste = num;
        } else {
            teste = data.products.length;
        }
        console.log(teste);
        // Browse all products on an API page and add each product to a list (in card format)
        for(let i=0; i<teste; i++){
            //console.log(data.products[i]);
            listProducts += `<div class="card">  
                                <div class="card-image center">
                                    <img src="https://${data.products[i].image}" alt="Image">
                                </div>
                                <div class="card-container">
                                    <p class="text14px textName">${data.products[i].name}</p>
                                    <p class="text12px textDescription">${data.products[i].description}</p>
                                    <p class="text12px textOldPrice">De: R$${data.products[i].oldPrice.toFixed(2).replace(".",",")}</p>
                                    <p class="text16px textPrice"><b>Por: R$${data.products[i].price.toFixed(2).replace(".",",")}</b></p>
                                    <p class="text12px textInstallments">ou ${data.products[i].installments.count}x de R$${data.products[i].installments.value.toFixed(2).replace(".",",")}</p>
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

function checkEmail(value, id) {
    //console.log(value.indexOf('.com'));
    if(value.indexOf('@') == -1 || value.indexOf('.com') == -1  || value.indexOf('.com') < value.indexOf('@') || (value.indexOf('.com') - value.indexOf('@')) == 1) {
	    alert("Por favor, informe um e-mail válido!");
        document.getElementById(id).value = "";
	    return false;
	}
}

function sendForm() {
    alert("Formulário enviado!");
}

function checkName(value, id) {
    // Removes all spaces
    if(value.trim().length == 0){
        alert("Por favor, informe um nome válido!");
        document.getElementById(id).value = "";
    }
}