var footer = document.querySelector("footer.text-muted")
footer.addEventListener('click', changeTexte)
let n = 0
function changeTexte(){
  n = n+1
  console.log("clique" + n )

}



var navbarHeader = document.getElementById("navbarHeader")
var navbarButton = document.querySelector("button.navbar-toggler")

navbarButton.addEventListener('click', changeClass)
var check = 1
function changeClass(){
if (check == 1) {
navbarHeader.classList.value = "bg-dark"
check = 0 }
else {
navbarHeader.classList.value = "bg-dark collapse"
check = 1 }
}




var editButton = document.querySelectorAll("button.btn-outline-secondary")[0]
var textCard = document.querySelectorAll("p.card-text")[0]

editButton.addEventListener('click', changeColor)
var checkColor = 0
function changeColor(){
if (checkColor === 0)
{textCard.style.color = "Red"
checkColor = 1 }
else
{textCard.style.color = ""
checkColor = 0 }

}



var editButton1 = document.querySelectorAll("button.btn-outline-secondary")[1]
var textCard1 = document.querySelectorAll("p.card-text")[1]

editButton1.addEventListener('click', changeColor1)
var checkColor1 = 0
function changeColor1(){
if (checkColor1 === 0)
{textCard1.style.color = "Green"
checkColor1 = 1 }
else
{textCard1.style.color = ""
checkColor1 = 0 }

}



var linkCDN = document.querySelector ("link")
var navbar = document.querySelector ("header")

navbar.addEventListener('dblclick', changeCDN)
var check1 = 0
function changeCDN(){
if (check1 === 0)
{ linkCDN.href = ""
check1 = 1}
else
{ linkCDN.href = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
check1 = 0
}
}





  var editBtn = document.querySelectorAll("button.btn-success")


for (let i = 0; i < editBtn.length; i++){
editBtn[i].addEventListener('mouseover', changeCard)
let textCardAll = document.querySelectorAll("p.card-text")[i]
let imgCard = document.querySelectorAll("img.card-img-top")[i]
function changeCard(){
textCardAll.classList.toggle("collapse")
imgCard.classList.toggle("w-25")

}
}



var card = document.querySelectorAll("div.row")
var cardfirst = document.querySelectorAll("div.col-md-4")[0]
var cardlast = document.querySelectorAll("div.col-md-4")[5]
var btnGrey = document.querySelector("a.btn-secondary")
btnGrey.addEventListener('click', changeOrderCard)

function changeOrderCard(){
  var card = document.querySelectorAll("div.row")
  var cardfirst = document.querySelectorAll("div.col-md-4")[0]
  var cardlast = document.querySelectorAll("div.col-md-4")[5]
  var btnGrey = document.querySelector("a.btn-secondary")

cardfirst.parentNode.insertBefore(cardlast, cardfirst)

console.log(card[0].childNodes[0])
}


var card = document.querySelectorAll("div.row")
var cardfirst = document.querySelectorAll("div.col-md-4")[0]
var cardlast = document.querySelectorAll("div.col-md-4")[5]
var btnBlue = document.querySelector("a.btn-primary")
btnBlue.href = '#'
btnBlue.addEventListener('click', changeOrderCard1)

function changeOrderCard1(){

  var card = document.querySelectorAll("div.row")
  var cardfirst = document.querySelectorAll("div.col-md-4")[0]
  var cardlast = document.querySelectorAll("div.col-md-4")[5]
  var btnGrey = document.querySelector("a.btn-secondary")

cardfirst.parentNode.insertBefore(cardfirst, cardlast.newtSibling)

}


var JS = document.querySelector("strong")
JS.addEventListener('click', function9)
function function9(){



document.body.addEventListener('keydown', function10)
}

function function10(e){
var keyCode = e.keyCode;

if(keyCode == 65){ console.log("a")
document.body.classList.remove("col-4", "offset-md-8", "offset-md-4")
document.body.classList.add("col-4")}
if(keyCode == 89){ console.log("y")
document.body.classList.remove( "offset-md-8", "offset-md-4")
document.body.classList.add("offset-md-4", "col-4")}
if(keyCode == 80){ console.log("p")
document.body.classList.remove("col-4", "offset-md-8", "offset-md-4")
document.body.classList.add("offset-md-8", "col-4")}

if(keyCode == 66){ console.log("b")
document.body.classList.remove("col-4", "offset-md-8", "offset-md-4")
}

}
