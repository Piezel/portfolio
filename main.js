const themebutton = document.querySelector("#themebutton")

themebutton.addEventListener("click",()=>{
    let tab = document.querySelectorAll(".light")
    tab.forEach((el,i)=>{
        el.classList.toggle("light")
        el.classList.toggle("dark")
    })
})