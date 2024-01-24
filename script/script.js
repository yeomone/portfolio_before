const mouse = document.querySelector('.mouse')
const skills_left = document.querySelectorAll('.skills_left li a')
const skills_right = document.querySelectorAll('.skills_right li')
const skill_works = document.querySelectorAll('.skill_works p')

window.addEventListener('mousemove',(e)=>{
    mouse.style.left = `${e.clientX}px`
    mouse.style.top = `${e.clientY}px`
})

const hide = () => {for(let r of skills_right){r.style.display = 'none'}}
hide()

skills_left.forEach((t, i)=>{
    const border_hide = () => {for(let h of skills_left)h.style.borderBottom = '0'}
    t.addEventListener('click',(e)=>{
        e.preventDefault()
        border_hide()
        t.style.borderBottom = '1px solid #000'
        hide()
        skills_right[i].style.display = 'block'
    })
})