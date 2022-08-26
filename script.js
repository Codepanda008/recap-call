document.body.innerHTML=`<div class="heading-container">
<h1>WEATHER</h>
<h6> TODAYS WEATHER</h6>
<img class="icon" src="https://media.istockphoto.com/vectors/weather-forecast-layout-design-vector-id1166244112" width="200px" height="200px"/>
</div>
<div class="main-container" id="maincontainer"></div>`;





const getData = async()=>{
    try{
        const data=await fetch("http://dataservice.accuweather.com/forecasts/v1/minute");
        const Products=await data.json();
        Products.forEach((Products)=>{
            displayData(Products);

        })
    }catch(error){

    }
}


getData();

const displayData=(obj)=>{
    maincontainer.innerHTML+=
    `<div class="container">
    
    <p>id: ${obj.id}</p>
    <h3>Product Name: ${obj.name}</h3>
    <p>brand: ${obj.brand}</p>
    <p>price: ${obj.price}</p>
    <p>price_sign: ${obj.price_sign}</p>
    <p>currency: ${obj.currency}</p>
    <p>description: ${obj.description}</p>
    <p>product link: ${obj.product_link}</p>
    <p>Producttype: ${obj.product_type}</p>
    <p>taglist: ${obj.tag_list}</p>
    <p>category: ${obj.category}</p>
   
`
}