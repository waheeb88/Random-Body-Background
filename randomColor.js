
let randomColor = document.getElementById("box-color")
let btnRandom   = document.querySelector("#Change-color")


btnRandom.addEventListener("click", function(){
    let i = Math.random().toString(16).slice(2,8)

    randomColor.style.backgroundColor = "#"+ i
    // console.log(i.length)
})


