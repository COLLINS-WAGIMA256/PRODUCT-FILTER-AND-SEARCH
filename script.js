let products = {
    data:[{
        productName:"Regular Blouse",
        category: "Topwear",
        price:"30",
        image:"Blouses.jpg",
    }, 
    {
        productName:" Jeans",
        category: "Bottomwear",
        price:"50",
        image:"Jeans.jpeg",

    },
    {
        productName:"Sporty SmartWatch",
        category: "watch",
        price:"99",
        image:"watch.jpg",

    },
    {
        productName:"Basic skirts",
        category: "Bottomwear",
        price:"29",
        image:"skirts.jpg",

    },
    {
        productName:"Black Leather jacket",
        category: "Jacket",
        price:"129",
        image:"Black leather jacket.jpg",

    },
    {
        productName:"Gentle trouser",
        category: "Bottomwear",
        price:"89",
        image:"trouser.jpg",

    },
    {
        productName:" SmartWatch",
        category: "watch",
        price:"99",
        image:"smartwatch.jpg",
    }, 
    {
        productName:"Brown Leather jacket",
        category: "Jacket",
        price:"129",
        image:"Brown leather jacket.jpg",

    }, 
    {
        productName:" Classic Watches",
        category: "watch",
        price:"208",
        image:"classicwatches.jpg",
      }, 


    ],

};

for (let i of products.data){
 //Create card
 let card = document.createElement("div");

 //Card should have category and should stay hidden initially
 card.classList.add("card",i.category,"hide");

 //image div
 let imgContainer = document.createElement("div");
 imgContainer.classList.add("image-container");

 //img tag
 let image = document.createElement("img");
 image.setAttribute("src", i.image);
 imgContainer.appendChild(image);
 card.appendChild(imgContainer);

 document.getElementById("products").appendChild(card);
    
 //Container
 let container = document.createElement("div");
 container.classList.add("container");

 //product name
 let name = document.createElement("h5");
 name.classList.add("product-name");
 name.innerText = i.productName.toUpperCase();
container.appendChild(name);

//price
let price = document.createElement("h6");
price.innerText = i.price + "/=";
container.appendChild(price);

card.appendChild(container)
document.getElementById("products").appendChild(card);
}

//parameter passed from button (Parameter same as category)
function filterProduct(value){
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
        //check if value equals innerText
        if(value.toUpperCase()== button.innerText.toUpperCase()){
            button.classList.add("active")
        } else{
            button.classList.remove("active")
        }
});

//select all cards
let elements = document.querySelectorAll(".card");
//loop through all cards
elements.forEach(element => {
//display all cards on 'all' button clicks
if(value== 'all'){
   element.classList.remove("hide"); 
}
else{
    //Check if element contains category class
    if(element.classList.contains(value)){
      //display element based on category  
   element.classList.remove("hide");
    }
    else{
        //hide other elements
        element.classList.add("hide");
    }
}
});
}

//search button click
document.getElementById("search").addEventListener("click",() => {
//initializations
let searchInput = document.getElementById("search-input").value;
let elements = document.querySelectorAll(".product-name");
let cards = document.querySelectorAll(".card");
console.log(searchInput);

//loop through all elements 
elements.forEach((element,index) => {
//check if text includes the search value
if(element.innerText.includes(searchInput.toUpperCase())){
    //Display matching cards
    cards[index].classList.remove("hide");
}
else{
    //Hide others 
    cards[index].classList.add("hide");
}
})
});

 //Initially display all products
window.onload = () => {
    filterProduct("all");
}