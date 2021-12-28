
console.log('please work')

// return a promise which returns a promise use .then to grab array of parks
//call render inside load parks 
// using each element is stored in a key 
// were passing a call back function 
function loadParks(){
    fetch('http://localhost:3000/parks')
     .then(function(response){
         return response.json();

     })
     .then(function(data){ 
         data.map(p=> renderPark(p))

    
        
 
     })
     
}


//rendered park function
//adding to collection in HTML
//+= to concatanate each park

function renderPark(park){
    const parkCard = `<div class="card">
       <h2>${park.name}</h2> 
       <img src=${park.image} class="park-avatar"/>
       <p>${park.caption}</p>
       <button>like</button>
    </div>`

   const parkHome = document.getElementById("park-collection")
   console.log("cards rendered")
   parkHome.innerHTML += parkCard
}
  
document.querySelectorAll('like-btn').forEach(item => {
    console.log ("add event")
    
    item.addEventListener('click', event => {
      alert("Great choice");
    })
  })


//call them here 
 document.addEventListener('DOMContentLoaded',function(){
    loadParks();


 })