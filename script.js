//selecting popupoverlay and addbook
var popoverlay=document.querySelector(".popoverlay")
var popadd=document.querySelector(".add-book")
var addbtn=document.getElementById("addpopbtn")


function show()
{
    popoverlay.style.display="block"
    popadd.style.display="block"
}

function closepopup()
{
    popoverlay.style.display="none"
    popadd.style.display="none"
}
//select Container(text small box),add button
//select book title,book author,short description
var newcontainer = document.querySelector(".Container")
var addbook= document.getElementById("popadd")
var addtitle=document.getElementById("bk-title")
var newauthor =document.getElementById("bkauthor")
var newdesc=document.getElementById("shrtdesc")

addbook.addEventListener("click",function(event){
    event.preventDefault()//to vaoid refresh
    var div=document.createElement("div")//creating that dabba
    div.setAttribute("class","book-container") //set attribute for that dabba
    div.innerHTML=`<h2>${addtitle.value}</h2>
                    <p>${newauthor.value}</p>
                    <p>${newdesc.value}</p>
                    <button class="deletebtn" onclick="deletebook(event)">Delete</button>`
    newcontainer.append(div)
    popoverlay.style.display="none"
    popadd.style.display="none"
})

function deletebook(event)
{
    event.target.parentElement.remove()
}