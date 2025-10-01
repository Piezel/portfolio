const creationButton = document.querySelector("#notes")

const createNote = (left=100,top=100) => {
    const stickyNote = document.createElement("textarea")
    let isdown = false
    let offset = [0,0]
    let zindex = 0

    stickyNote.style.cssText = `
        background-color: #feff9c;
        color: black;
        width: 200px;
        height: 200px;
        position: fixed;
        top: ${top}px;
        left: ${left}px;
        border: 1px solid lightgray;
        overflow: auto;
    `
    stickyNote.addEventListener("dblclick",e=>{
        e.preventDefault()
        createNote(stickyNote.style.left.split("px")[0],stickyNote.style.top.split("px")[0])
    })
    stickyNote.addEventListener("contextmenu",e=>{
        e.preventDefault()
    })
    stickyNote.addEventListener('mousedown',e=>{
        if(e.button==1) {
            e.preventDefault()
            stickyNote.remove()
            stickyNote = null
        }
        else if(e.button==2) {
            e.preventDefault()
            stickyNote.style.zIndex = 100
            offset = [
                stickyNote.offsetLeft - e.clientX,
                stickyNote.offsetTop - e.clientY
            ]
            isdown = true
        }
    })
    stickyNote.addEventListener('mouseup',e=>{
        if(e.button==2) {
            isdown = false
            stickyNote.style.zIndex = zindex
        }
    })
    stickyNote.addEventListener("mousemove",e=>{
        if(isdown) {
            stickyNote.style.top = (e.clientY+offset[1])+'px'
            stickyNote.style.left = (e.clientX+offset[0])+'px'
            if(Number(stickyNote.style.top.split("px")[0])+stickyNote.clientHeight>window.innerHeight) {
                let bottomBorder = window.innerHeight-stickyNote.clientHeight-20
                stickyNote.style.top = bottomBorder+"px"
            }
        }
    })
    stickyNote.addEventListener("mouseleave",e=>{
        if(isdown) {
            stickyNote.style.top = (e.clientY+offset[1])+'px'
            stickyNote.style.left = (e.clientX+offset[0])+'px'
            if(Number(stickyNote.style.top.split("px")[0])+stickyNote.clientHeight>window.innerHeight) {
                let bottomBorder = window.innerHeight-stickyNote.clientHeight-20
                stickyNote.style.top = bottomBorder+"px"
            }
        }
    })

    document.body.append(stickyNote)
}

creationButton.addEventListener("click",createNote)