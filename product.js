//Selecting side navbar//
var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("closenav")

menuicon.addEventListener("click", function () {
    sidenav.style.right = 0
}
)

closenav.addEventListener("click", function () {
    sidenav.style.right = "-50%"
})


//product Search Functionality
var productcontainer = document.getElementById("product-container")
var search = document.getElementById("search")
var divlist=productcontainer.querySelectorAll("div")

search.addEventListener("keyup",function(){
    var enteredvalue= event.target.value.toUpperCase()
     
    for(count=0;count<divlist.length;count=count+1){

        var productname=divlist[count].querySelector("h1").textContent
        if(productname.toUpperCase().indexOf(enteredvalue)<0){
          divlist[count].style.display="none"

        }
        else{
            divlist[count].style.display="block"
        }

    
    }

})