function searchFood(){
let input=document.getElementById("search").value.toLowerCase();
let items=document.getElementsByClassName("food-card");

for(let i=0;i<items.length;i++){
let text=items[i].innerText.toLowerCase();
items[i].style.display=text.includes(input) ? "block" : "none";
}
}

function recommendFood(){

let foods=[
{
name:"Cheese Pizza 🍕",
desc:"Recommended because it is our most loved item.",
img:"https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800"
},
{
name:"Classic Burger 🍔",
desc:"Perfect for a quick satisfying meal.",
img:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800"
},
{
name:"Spicy Noodles 🍜",
desc:"Great for users who enjoy bold flavours.",
img:"https://images.unsplash.com/photo-1585032226651-759b368d7246?w=800"
}
];

let random=foods[Math.floor(Math.random()*foods.length)];

document.getElementById("foodName").innerText=random.name;
document.getElementById("foodDesc").innerText=random.desc;
document.getElementById("foodImage").src=random.img;
}

function loginUser(){
let user=document.getElementById("user").value;
let pass=document.getElementById("pass").value;

if(user==="admin" && pass==="1234"){
alert("Login Successful");
}else{
alert("Invalid Login");
}
}