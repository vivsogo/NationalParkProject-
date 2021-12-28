alert('yo')
console.log('please')





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
         data.map(p=> renderParks(p))

        console.log(data)

     })
}


//rendered park function
//adding to collection in HTML

function renderParks(park){
    const parkCard = `<div class="card">
       <h2>${park.name}</h2> 
       <img src=${park.image} class="park-avatar"/>
       <p>${park.likes}</p>
       <button class="like-btn">like<3/button>
    </div>`

   const parkHome = document.getElementById("park-collection")
   parkHome.innerHTML += parkCard
}



//call them here 
 document.addEventListener('DOMContentLoaded',function(){
    loadParks();

 })