const menu=[
    {
        id : 1,
        name : "buttermilk pancakes",
        category: "breakfast",
        price: 16,
        img: "images/c9210dbb2115368b504fe186a9f412af.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, voluptatem quis? Possimus ab est saepe voluptates placeat illo! Vitae aspernatur molestias eos perspiciatis quia optio velit nostrum dolorem autem voluptatibus?"
    },
    {
        id : 2,
        name : "dinner double",
        category: "lunch",
        price: 12,
        img: "images/jawalkkar-20220521-0001.jpg",
        text: "Wikipedia has a consumer rating of 3.76 stars from 156 reviews indicating that most customers are generally satisfied with their purchases. Consumers satisfied with Wikipedia most frequently mention online encyclopedia, many times and reliable source.Wikipedia ranks 1st among Open Source sites."
    },
    {
        id : 3,
        name : "hamburger",
        category: "snacks",
        price: 20,
        img: "images/dishapatani-20220410-0001.jpg",
        text: "It is said that the universe is expanding at 150,000 mph. I'm not sure if even God knows. But on Earth, as we witness the miracle of the technology revolution, none of us can be masters of our universe and that's where Wikipedia plays an invaluable role. This online encyclopedia is in itself an expanding universe of almost anything"
    },
    {
        id : 4,
        name : "chicken biriyani",
        category: "lunch",
        price: 10,
        img: "images/actress_loverr-20200827-0002.jpg",
        text: " In fact, if you're still alive, this should be bookmarked. The nice thing about Wikipedia is that it is neutral, can be edited by anyone, tends to be highly accurate since changes to content undergo the scrutiny of contributing editors."
    },
    {
        id : 5,
        name : "egg masala",
        category: "snacks",
        price: 25,
        img: "images/craze_vibes1-20200919-0001.jpg",
        text: " Your destination starts in one place and depending upon how curious you are, takes you to places you didn't intend to go or knew existed. So, while most people think in terms of the present, Wikipedia provides you with enough information to think."
    },
    {
        id : 6,
        name : "chapathi",
        category: "breakfast",
        price: 10,
        img: "images/dishapatani-20220702-0001.jpg",
        text: "Wikipedia has a consumer rating of 3.76 stars from 156 reviews indicating that most customers are generally satisfied with their purchases. Consumers satisfied with Wikipedia most frequently mention online encyclopedia, many times and reliable source.Wikipedia ranks 1st among Open Source sites."
    },
    {
        id : 7,
        name : "Idli",
        category: "breakfast",
        price: 8,
        img: "images/shraddha.kapoor.fanpage-20220429-0003.webp",
        text: "Wikipedia has a consumer rating of 3.76 stars from 156 reviews indicating that most customers are generally satisfied with their purchases. Consumers satisfied with Wikipedia most frequently mention online encyclopedia, many times and reliable source.Wikipedia ranks 1st among Open Source sites."
    },
    {
        id : 8,
        name : "Fish curry",
        category: "lunch",
        price: 30,
        img: "images/saraalikhan95-20220617-0003.jpg",
        text: "Wikipedia has a consumer rating of 3.76 stars from 156 reviews indicating that most customers are generally satisfied with their purchases. Consumers satisfied with Wikipedia most frequently mention online encyclopedia, many times and reliable source.Wikipedia ranks 1st among Open Source sites."
    },
    {
        id : 9,
        name : "obbattu",
        category: "breakfast",
        price: 20,
        img: "images/iamsandeepadhar-20220628-0003.jpg",
        text: "Wikipedia has a consumer rating of 3.76 stars from 156 reviews indicating that most customers are generally satisfied with their purchases. Consumers satisfied with Wikipedia most frequently mention online encyclopedia, many times and reliable source.Wikipedia ranks 1st among Open Source sites."
    },
    {
      
        id : 10,
        name : "uppittu",
        category: "breakfast",
        price: 5,
        img: "images/ruhisingh12-20220710-0002.jpg",
        text: "Wikipedia has a consumer rating of 3.76 stars from 156 reviews indicating that most customers are generally satisfied with their purchases. Consumers satisfied with Wikipedia most frequently mention online encyclopedia, many times and reliable source.Wikipedia ranks 1st among Open Source sites."    
    },
        {
        id : 11,
        name : "oota",
        category: "dinner",
        price: 5,
        img: "images/voompla-20220531-0001.jpg",
        text: "Wikipedia has a consumer rating of 3.76 stars from 156 reviews indicating that most customers are generally satisfied with their purchases. Consumers satisfied with Wikipedia most frequently mention online encyclopedia, many times and reliable source.Wikipedia ranks 1st among Open Source sites."
    }
];

const sectionMenu=document.querySelector(".row");
const btnContainer=document.querySelector(".btn-container")

window.addEventListener("DOMContentLoaded",function(){
displayMenu(menu)
displayMenuButtons()
})

function displayMenu(menuItems)
{
    let displayMenu=menuItems.map(function(item){
        return `
            <div class="menu-item col-md-6">
              <img class="photo" src=${item.img} alt="">
              <div class="item-info">
                <header>
                  <h4>${item.name}</h4>
                  <h4 class="price">${item.price}</h4>
                </header>
                <p class="item-text">${item.text}</p>
              </div>
            </div> `
    });
    displayMenu=displayMenu.join('')
    sectionMenu.innerHTML=displayMenu;
}
function displayMenuButtons(){
    const categories=menu.reduce(function(values,items){
        if(!values.includes(items.category)){
            values.push(items.category)
        }
        return values;
    },["all"])
    const categoyBtn=categories.map(function(cat){
        return `<button class="filter-btn" type="button" data-id=${cat}>${cat}</button>`;
    }).join("")
    btnContainer.innerHTML=categoyBtn;
    
    const filterBtns= document.querySelectorAll(".filter-btn")
    filterBtns.forEach(function(filterBtn){
    filterBtn.addEventListener('click',function(e){
        const category=e.currentTarget.dataset.id;
        console.log(category);
        if(category==="all"){
            return displayMenu(menu)
        }
        else{
        const menuCategory=menu.filter(function(menuitem){
            if(menuitem.category===category)   
            return menuitem
        })
        displayMenu(menuCategory)
    }})
    })
}



    
