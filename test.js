const apiBaseUrl = "https://my-json-server.typicode.com/marataisaya/demo/";

let searchBtn = document.getElementById("searchBtn");
let sourceType = document.getElementById("source");
let itemInput = document.getElementById("itemId");
let resultContainer = document.getElementById("result");
let getItemByID = async (source, id) => {
    let response = await fetch(`${apiBaseUrl}${source}/${id}`);
    return await response.json();
}
searchBtn.addEventListener("click", async () => {
    let source = sourceType.value;
    let json = await getItemByID(source, itemInput.value);
    switch (source) {
        case "Tayota Camry 50": resultContainer.innerHTML = createTC50Card(json); break;
        case "Tayota Camry 40": resultContainer.innerHTML = createTC40Card(json); break;
        case "Tayota Camry 70": resultContainer.innerHTML = createTC70Card(json); break;
    }
})


var loginform = document.getElementById("login-form")
var login = document.getElementById("username");
var password = document.getElementById("txtpassword");

loginform.addEventListener("submit", async (e) => {
    e.preventDefault()
   
    var object = {
        "login": login,
        "password": password,
    }

    var response = await fetch("https://my-json-server.typicode.com/setouu/endterm/profiles", {
        method: 'post',
        body: JSON.stringify(object),
        headers: {
            'content-type': 'application/json'
        }
    })

    var json = await response.json()
    console.log(json)
    alert(json[0])
    
})

let createTC50Card = (json) => {
    let { id, title, year, color, price} = json;
    let html = `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${id}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${title}</h6>
      <p class="card-text">year : ${year}</p>
      <p class="card-text">color : ${color}</p>
      <p class="card-text">price : ${price}</p>
    </div>
  </div>`;
    return html;
}
let createTC40Card = (json) => {
  let { id, model, year, color, price} = json;
  let html = `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${id}</h5>
    <p class="card-text">Model : ${model}</p>
    <p class="card-text">Year : ${year}</p>
    <p class="card-text">Color : ${color}</p>
    <p class="card-text">Price : ${price}</p>
  </div>
</div>`;
  return html;
}
let createTC70Card = (json) => {
  let { id, title, year, color, price} = json;
  let html = `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${id}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${title}</h6>
    <p class="card-text">year : ${year}</p>
    <p class="card-text">color : ${color}</p>
    <p class="card-text">price : ${price}</p>
  </div>
</div>`;
  return html;
}