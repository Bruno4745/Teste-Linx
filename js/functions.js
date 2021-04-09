let url = "https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1";

//Get data from the API
async function getProducts() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        
        // Browse all products on a page
        // for(let i=0; i<data.products.length; i++){
        //     console.log(data.products[i]);
        // }

        //Defines the next API page
        url = `https://${data.nextPage}`;

        return data;

    } catch(erro) {
        console.log("[ERROR] " + erro);
    }
}