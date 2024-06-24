let searchBtn=document.getElementById("search-btn")
let countryInp=document.getElementById("country-inp")
searchBtn.addEventListener("click",()=>{
    let countryName="India";
    let finalURL=`https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    console.log(finalURL)
    fetch(finalURL).then((response)=> response.json())
    .then((data)=>{
        console.log(data)
    })
})