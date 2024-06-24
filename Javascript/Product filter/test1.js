let products={
    data:[
        {
        productName:"Regular White T-shirt",
        category:"Topwear",
        price:"30",
        image:"whiteT.jpg",
    },
        {
        productName:"Short skirt",
        category:"Bottomwear",
        price:"50",
        image:"shortskirt.jpg",
    },
        {
        productName:"Sporty smart watch",
        category:"Watch",
        price:"99",
        image:"watch.jpg",
    },
        {
        productName:"basic knitted top",
        category:"Topwear",
        price:"45",
        image:"knitted top.jpg",
    },
        {
        productName:"Black leather Jacket",
        category:"Jacket",
        price:"70",
        image:"leather.jpg",
    },
        {
        productName:"Stylish Pink Trousers",
        category:"Botoomwear",
        price:"129",
        image:"pink.jpg",
    },
        {
        productName:"Brown Mens Jacket",
        category:"Jacket",
        price:"70",
        image:"brown jacket.jpg",
    },
        {
        productName:"Comfy grey pants",
        category:"Bottomwear",
        price:"59",
        image:"grewypants.jpg",
    },
],
};
for(let i of products.data){
    // Create card
    let card=document.createElement("div");
    //card should have category and should stay hidden initially
    card.classList.add("card",i.category,"hide");
    //image div
    let imgContainer=document.createElement("div");
    imgContainer.classList.add("image-container");
    // img tag
    let image=document.createElement("img");
    image.setAttribute("src",i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    // container
    let container=document.createElement("div");
    container.classList.add("container");
    // product name
    let name=document.createElement("h5");
    name.classList.add("product-name");
    name.innerText=i.productName.toUpperCase();
    container.appendChild(name);
    //price
    let price=document.createElement("h6");
    price.innerText= "$"+i.price;
    container.appendChild(price);
    card.appendChild(container);
    document.getElementById("products").appendChild(card);

}
// parameter passed from button (Parameter same as category)
function filterProduct(value){
    // Button class code
    let buttons=document.querySelectorAll(".button-value");
    buttons.forEach(button =>{
        // check if value equals innerText
        if(value.toUpperCase()==button.innerText.toUpperCase()){
            button.classList.add("active");
        }
        else{
            button.classList.remove("active");
        }
    });
    // Select all cards
    let elements=document.querySelectorAll(".card");
    // loop through all cards
    elements.forEach(element =>{
        // display all cards on "all" button click
        if(value=="All"){
            element.classList.remove("hide")
        
        }
        else{
            // Check if element contains category class
            if(element.classList.contains(value)){
                // Display element based on category
                element.classList.remove("hide");

            }
            else{
                // hide other elements
                element.classList.add("hide");
            }
        }
    });
}
//Search Button click
document.getElementById("search").addEventListener("click",() =>{
    // initialization
    let searchInput=document.getElementById("search-input").value;
    let elements=document.querySelectorAll(".product-name");
    let cards=document.querySelectorAll(".card");
    // console.log(searchInput);
    // loop through all Elements
    elements.forEach((element, index) => {
        // check if text includes the search value 
        if(element.innerText.includes(searchInput.toUpperCase())){
            // display matching card
            cards[index].classList.remove("hide");
        }
        else{
            // hide others
            cards[index].classList.add("hide");
        }
    });
});
// Initially display all peoducts 
window.onload=() =>{
    filterProduct("All")
}
