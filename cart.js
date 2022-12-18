
       let cart = JSON.parse(localStorage.getItem("cart")) || [];
       let container = document.getElementById("cart-container");
       let totalPrice = document.getElementById("cart-total");
       
       let checkout = document.getElementById("toPay");
       checkout.addEventListener("click",pp);
       function pp(){
        window.location = "./purchasePage.html"
       }

    function displayProducts(){

      container.innerHTML = null;
          cart.forEach((element,index)=>{
            let card = document.createElement("div");

            let image = document.createElement("img");
            image.setAttribute("src",element.image);

            let product = document.createElement("h2");
           product.innerText = element.product;

           let price = document.createElement("h3");
           price.innerText = element.price;

            let category = document.createElement("p");
            category.innerText = "Category: "+element.category;

            let plus = document.createElement("button");
            plus.innerText = "+";

            let qty = document.createElement("span");
            qty.innerText = element.quantity;

            let minus = document.createElement("button");
            minus.innerText = "-";

            let remove = document.createElement("button");
            remove.innerText = "Remove";

            plus.addEventListener("click",()=>{
              element.quantity++;
              qty.innerText = element.quantity;
               abcd(); 
            });

            minus.addEventListener("click",()=>{
              element.quantity--;
              qty.innerText = element.quantity;
              if(qty.innerText > 0){
              // totalPrice.innerText = +totalPrice.innerText - +element.price;
              abcd()
              }
              if (qty.innerText == 0)
              {
              //  totalPrice.innerText = +totalPrice.innerText - +element.price;
              abcd()
               card.remove();
               cart.splice(index, 1);
               localStorage.setItem("cart", JSON.stringify(cart));
               displayProducts();
              }
            })
            
            remove.addEventListener("click",()=>{
              // totalPrice.innerText = +totalPrice.innerText - (element.price * +element.quantity);
              
              cart.splice(index, 1);
              localStorage.setItem("cart", JSON.stringify(cart));
              displayProducts();
              abcd()
            })
          
            card.append(image,product,price,category,minus,qty,plus,remove);
            container.append(card);
          });
          container.append(checkout);
        }
        displayProducts();
        
        abcd();
        
        function abcd()
        {
          let add = 0;
          
          tig = cart.map((ele)=>
          {
           return ele.price.trim().split("₹").map(Number)
          })

          tig = tig.map((ele)=>
          {
           return ele[1]
          })
        
          for(let x=0;x<tig.length;x++)
          {
           add += tig[x]*cart[x]["quantity"]
          }

          totalPrice.innerText = add;

        }

        let storage = JSON.parse(localStorage.getItem("MyAPI"))||[];

        let searchButton = document.getElementById("searchbutton");
    
        let search = document.getElementById("search");
    
        let page = document.getElementById("body");
        let body = document.getElementById("body2");
    
        searchButton.addEventListener("click",()=>{
          
          let newStorage = storage.filter((element)=>{
    
           return (search.value === element.category);
    
          });
    
          localStorage.setItem("newdata",JSON.stringify(newStorage));
          window.location = "/searchResult.html";
    
        });
    
          function display(storage){
    
            // page.innerHTML = null;
    
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
           button.innerText = "Add to Cart";
           
           card.append(image,product,price,rating,button);
           page.append(card);
        })
      }


