let one = document.getElementById("one")
let two = document.getElementById("two")
let three = document.getElementById("three")

function func(x) {
    document.getElementById("table").setAttribute("border", "2px")
    document.getElementById("table").innerHTML += "<tr><td> You Clicked On: " + x + " at time :" + Date()
        

    
}