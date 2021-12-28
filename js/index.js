alert('yo')
console.log('please')

// global const since we have to call a few times 
const baseUrl= 'http://localhost:3000';
let parks = [];




const loadParks = () => {
    fetch(baseUrl + '/parks')
        .then(resp => resp.json())
        .then(data =>{
         console.log('data', data)
             parks = data;
         })

}


 document.addEventListener('DOMContentLoaded',function(){
    loadParks();

 })