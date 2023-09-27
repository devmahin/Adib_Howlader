let oldTime = "1 January 2024 12:00 AM"
let input = document.querySelectorAll("input")

document.querySelector("#oldTime").innerHTML = oldTime



function time() {
    let oldT = new Date(oldTime)
    let newT = new Date()

    let diff = (oldT - newT) / 1000;
    
    if(diff < 0) return
    
    
    
    
    input[0].value = Math.floor(diff / 3600 / 24);
    input[1].value = Math.floor(diff / 3600 % 24)
    input[2].value = Math.floor(diff / 60) % 60;
    input[3].value = Math.floor(diff) % 60;
    
}

setInterval(() => {
time()

},1000)

//1 day = 24 hrs
// 1 hourse = 60 min
// 60 minutes = 3600