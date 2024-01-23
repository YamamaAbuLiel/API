async function getPosts() {
    const response = await fetch("https://dummyjson.com/products");
    const products = await response.json();

    let result = "";

    for (let i = 0; i < products.products.length; i++) {
        const item = products.products[i];

        result += `
            <div class="product">
                <h2>${item.title}</h2>
                <p>Price: ${item.price}</p>
                <img src="${item.thumbnail}" alt="${item.title}" width="200">
                <p>Description: ${item.description}</p>
            </div>
        `;
    }

    document.querySelector("#productList").innerHTML = result;
}

getPosts();
