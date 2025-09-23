const themebutton = document.querySelector("#themebutton")
const header = document.querySelector("header")

themebutton.addEventListener("click",()=>{
    const body = document.body
    const themeAnimation = [
        {transform: "rotateY(0)"},
        {transform: "rotateY(360deg)"}
    ]
    const themeAnimationTiming = {
        duration: 500,
        iterations: 1,
    }
    if(body.classList.contains("light")) {
        let tab = document.querySelectorAll(".light")
        let menubutton = document.querySelectorAll(".menulight")
        tab.forEach((el,i)=>{
            el.classList.remove("light")
            el.classList.add("dark")
        })
        menubutton.forEach((el,i)=>{
            el.classList.remove("menulight")
            el.classList.add("menudark")
        })
        themebutton.innerHTML = '<i class="fa-regular fa-moon fa-xl"></i>'
        themebutton.animate(themeAnimation,themeAnimationTiming)
    } else {
        let tab = document.querySelectorAll(".dark")
        let menubutton = document.querySelectorAll(".menudark")
        tab.forEach((el,i)=>{
            el.classList.remove("dark")
            el.classList.add("light")
        })
        menubutton.forEach((el,i)=>{
            el.classList.remove("menudark")
            el.classList.add("menulight")
        })
        themebutton.innerHTML = '<i class="fa-regular fa-sun fa-xl"></i>'
        themebutton.animate(themeAnimation,themeAnimationTiming)
    }
})
