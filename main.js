fetch("https://openapi.programming-hero.com/api/categories")
.then(res => res.json())
.then(data => loadCategories(data))





// load cards 

function loadCard(id){

    //fetching cards 
    fetch(`https://openapi.programming-hero.com/api/category/${id}`)
    .then(res => res.json())
    .then(cardarr => {

        displayCard(cardarr.plants)
    }
      )  
}
//load detail api
function loaddetali(id){
    fetch(`https://openapi.programming-hero.com/api/plant/${id}`)
    .then(res => res.json())
    .then(details => displaydetailapi(details.plants))
}
//displaly deatil api
function displaydetailapi(plants){
  console.log(plants.name)
  const detailscontainer = document.getElementById("detailscontainer")
  detailscontainer.innerHTML=`
      <h1 class="font-bold">${plants.name}</h1>
        <img class="w-full h-70  rounded-md mb-4" src="${plants.image}" />
        <p><span class="font-bold">Category:</span>${plants.category}</p>
        <p><span class="font-bold">Price:</span>${plants.price}</p>
        <p><span class="font-bold">Description:</span>${plants.description}</p>
  `
  const modal = document.getElementById("my_modal_1").showModal()
}

//display cards
function displayCard (cards) {
    const cardcontainer = document.getElementById("cardContainer")
    cardcontainer.innerHTML=""
    for(card of cards){
        const div = document.createElement("div")
        console.log(card.image)
        div.innerHTML=`
              <div class="max-w-sm mx-auto rounded-2xl shadow-lg  p-4 bg-white">
       
        <img class="w-full h-40  rounded-md mb-4" src="${card.image}"/>
        <h2 onclick="loaddetali(${card.id})" class="text-lg font-semibold text-gray-800">${card.name}</h2>
        <p class="text-sm text-gray-600 mt-1">${card.description}</p>
        <div class="flex items-center justify-between mt-3">
          <span class="px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-700">
            ${card.category}
          </span>
          <span class="text-gray-800 font-semibold">৳${card.price}</span>
        </div>
        <button class="w-full mt-4 bg-green-700 text-white py-2 rounded-full hover:bg-green-800 transition">
          Add to Cart
        </button>
      </div>

        `
        cardcontainer.append(div)
    }
}


function loadCategories(categoriesarry){
    //console.log(categoriesarry.categories)
    const categories =  categoriesarry.categories
    for(let categorie of categories){
        console.log(categorie.id)
        const categorescontainer = document.getElementById("categorescontainer")//parent element
        const li = document.createElement("li")//new list element
        
        li.innerHTML=`
        <li  onclick="loadCard(${categorie.id})" class="hover:bg-[#166534] hover:text-white py-2 px-1 rounded  ">${categorie.category_name}</li>
        `
        categorescontainer.append(li)
    }
}