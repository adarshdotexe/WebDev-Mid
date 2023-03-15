let nums = document.getElementById("number")
let cats = document.getElementById("category")
for (let index = 1; index < 101; index++) {
        
        nums.innerHTML += "<option value=\"" + index + "\">" + index + "</option>"
    
}

let saved = document.body.innerHTML

function generate(params) {
    let folder = document.getElementById("category").value
    let n = document.getElementById("number").value

    document.body.innerHTML = saved
    document.getElementById("number").setAttribute("value", n)

    for (let i = 0; i < n; i++) {
        document.body.innerHTML += "<div style=\"background-color: rgb(" + Math.random()*255 + "," + Math.random()*255 + "," + Math.random()*255 + "); margin-left:" + Math.random()*500 + "px; margin-top: " + Math.random()*500 + "px\">" + folder + "</div>"

        
    }
}