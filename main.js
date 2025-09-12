fetch("https://openapi.programming-hero.com/api/categories")
.then(res => res.json())
.then(data => {
  
  loadCategories(data)
})





let carts = []

const main = document.getElementById("main")
main.addEventListener("click",(e) => {
  if(e.target.innerText === "Add to Cart"){
   const title = e.target.parentNode.children[1].innerText
   const price = e.target.parentNode.children[3].children[1].innerText
   const numericPrice = parseFloat(price.replace(/[^0-9.]/g, ""))
   carts.push({
     title:title,
     price:numericPrice
    })
    alert("this item added to the cart")
   displayCart(carts)
  }
})

function displayCart(carts){
  let total = 0
  const cartcontainer = document.getElementById("cartcontainer")
  cartcontainer.innerHTML=""
  carts.forEach(cart => {
    total += cart.price
    console.log(total)
    cartcontainer.innerHTML +=`
    <div id="cartcon" class="bg-white p-2 mt-2 flex justify-between items-center rounded-lg">
      <div>
        <h1 class="font-bold">${cart.title}</h1>
        <p>${cart.price}</p>
      </div>
      <div ><i onclick="deleteCart('${cart.title}')"  class="fa-solid fa-square-xmark text-3xl"></i></div>
    </div>
    
    `
    document.getElementById("totalprice").innerText = `Total: $${total}`
  });
}

function deleteCart(title){
  filtercarts = carts.filter((cart) => cart.title !== title )
  carts = filtercarts
  displayCart(carts)
}


function handlespinner (status){
  if(status){
    document.getElementById("spinner").classList.remove("hidden")
    document.getElementById("cardContainer").classList.add("hidden")

  }
  else{
    document.getElementById("spinner").classList.add("hidden")
    document.getElementById("cardContainer").classList.remove("hidden")
  }
}






function loadCard(id){
    handlespinner(true)
    //fetching cards 
    fetch(`https://openapi.programming-hero.com/api/category/${id}`)
    .then(res => res.json())
    .then(cardarr => {

        displayCard(cardarr.plants)
        handlespinner(false)
    }
      )  
}

function loaddetali(id){
    fetch(`https://openapi.programming-hero.com/api/plant/${id}`)
    .then(res => res.json())
    .then(details => displaydetailapi(details.plants))
}

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
        <button  class="w-full mt-4 bg-green-700 text-white py-2 rounded-full hover:bg-green-800 transition">
          Add to Cart
        </button>
      </div>

        `
        cardcontainer.append(div)
    }
    
}


function loadCategories(categoriesarry){
    const categories = categoriesarry.categories
    const categorescontainer = document.getElementById("categorescontainer")
    categorescontainer.innerHTML = "" // ✅ (NEW) clear before re-render

    for(let categorie of categories){
        const li = document.createElement("li")

        
        li.className = "category-item hover:bg-[#166534] hover:text-white py-2 px-1 rounded cursor-pointer"

        
        li.setAttribute("data-id", categorie.id) 

        li.innerText = categorie.category_name

       
        li.addEventListener("click", () => {
            
            document.querySelectorAll(".category-item").forEach(item => {
                item.classList.remove("bg-[#166534]", "text-white")
            })

           
            li.classList.add("bg-[#166534]", "text-white")

           
            loadCard(categorie.id)
        })

        categorescontainer.append(li)
    }
}
