async function display_Product_Info() {
    const data = await fetch("http://makeup-api.herokuapp.com/api/v1/products.json")
    const data1 = await data.json();
    console.log(data1);
    data1.forEach((data2) => createDetail(data2));
}

function display_product(data2) {
    const product = document.createElement("div");
    product.setAttribute("class", "container");




    product.innerHTML = ` 
    
    <div class ="about">
    <img class="productpic" src="${data2.api_featured_image}" width="200" height ="300">
    <h1 span class ="heading">${data2.brand}<h1>
    <h2 span class ="heading2">${data2.name}<h2>
    <p><span class="descrip"> Description:<br><br></span>${data2.description}</p>
    <p><spanclass="price"> Price:$ </span>${data2.price}</p>
    <p span class ="buylink"><a href="${data2.product_link}">Buy now</a></p>
    <hr> 
    </div>`;
    document.body.append(product);

}
display_Product_Info();
