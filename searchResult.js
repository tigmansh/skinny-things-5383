
    let storage = JSON.parse(localStorage.getItem("newdata"))||[];
    let page = document.getElementById("body");
    let counter = document.getElementById('counter');
storage.forEach((element)=>{

let card = document.createElement("div");

let image = document.createElement("img");
image.setAttribute("src", element.image);

let product = document.createElement("h2");
product.innerText = element.product;

let price = document.createElement("h2");
price.innerText = element.price;

let rating = document.createElement("h2");
rating.innerText = element.rating;

let button = document.createElement("button");
button.innerText = "Add To Cart";

let cartStatus = document.createElement("h3");

button.addEventListener("click",()=>
            { 
              let cart = JSON.parse(localStorage.getItem("cart")) || [];

              let already = false;

              for(let i=0; i<cart.length; i++){
                if(cart[i].product == element.product){
                  already = true;
                  break;
                }
              }
              if(already==true){
                alert("Product Already in Cart");
                // cartStatus.innerText = "Product Already in Cart";
              }
              else{
                cart.push({...element,quantity:1});
                counter.innerText++;
                localStorage.setItem("cart",JSON.stringify(cart));
                // alert("Product Added To Cart");
                cartStatus.innerText = "Product Added To Cart";
              }
            })
card.append(image,product,price,rating,button,cartStatus);
page.append(card);
})