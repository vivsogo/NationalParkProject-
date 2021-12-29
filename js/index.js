
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
         data.map(n=> renderPark(n))

    
 
     })
  
  
     
}


//rendered park function

const renderPark =(park)=>{
    const parkCard=document.createElement('div')
    parkCard.className="card"

    const parkName=document.createElement('h2')
    parkName.innerText= park.name

    const parkImage=document.createElement('img')
    parkImage.src=park.image
    parkImage.className="park-avatar"

    const parkCaption=document.createElement('p')
    parkCaption.innerText= `${park.caption}`

    const likeBtn=document.createElement('button')
    likeBtn.innerText=`LIKE`
    likeBtn.className='like-btn'
    likeBtn.addEventListener('click',() =>{
        alert("This looks like the perfect park for you!");
    })
    
    parkCard.append(parkName,parkImage,parkCaption,likeBtn,)
    
    const parkCollection= document.querySelector('#park-collection')
    console.log(parkCollection)

    

    parkCollection.append(parkCard,)

    
  
}

const wrapper = document.querySelector('.wrapper'),
    form = wrapper.querySelectorAll('form'),
    sumbitInput = form[0].querySelector('input[type="submit"]');

function getDataForm(e){
 e.preventDefault();
 var formData= new formData(form[0]);

 alert (formData.get('nameField')+' - '+ formData.get('datefield')+' - '+ formData.get('trailfield'));

}

document.addEventListener('DOMContentLoaded',function(){
 sumbitInput.addEventListener('click',getDataForm,);


}, false);   
  

}


  


//call them here 
 document.addEventListener('DOMContentLoaded',function(){
    loadParks();
    

 })

