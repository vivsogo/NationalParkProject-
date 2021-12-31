# TIMBER 
National Park match finder 
# Description
The purpose of this project was to create a MVP using HTML, CSS and Javascript. I created an application that would mimic a dating app so that users can "like" images and plan a trip with a form. 

# Dependencies
This assignment  required that I run the app on a single page as well as incorporate 3 separate event listners. The event listeners I used were DOMContent loaded, click and submit.  

# Executing program 
The first element the application features are rendered cards , showcasing 12 national parks. This was created by using css styling and DJ.son data. I then rendered park cards by creating elements for each card atribute. 
```
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
```
The user reads the cards and can "like" a national park card.
Onced clicked an alert box appears  informing the user that they have chosen a national park. 
```
const likeBtn=document.createElement('button')
   likeBtn.innerText=`LIKE`
   likeBtn.className='like-btn'
   likeBtn.addEventListener('click',() =>{
        alert("This looks like the perfect park for you!");

    })
```
At the bottom of the sites page is a form used to create a mini itinerary. This was done using a submit event listener I also added string interpolation here to pass the objects. 
```
function renderParkForm(parkForm){
    let f = document.createElement('f')
    f.textContent =`Enjoy ${parkForm.newPark} National park on ${parkForm.newDate}, take a picture at ${parkForm.newTrail}`
    document.querySelector('#park_container').appendChild(f)

```




# Ackowledments 
*Toy tale lab for css styling 




