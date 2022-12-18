
  
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
    let slideIndex = 0;
 showSlides();

 function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
   // Change image every 3 seconds
  setTimeout(showSlides, 3000); 
 }

