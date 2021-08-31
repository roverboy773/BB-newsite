const web=document.querySelector('.Web_Development')
const software=document.querySelector('.Software_Development')
const mobile=document.querySelector('.Mobile_App_Development')
const design=document.querySelector('.Designing_and_Branding')
const modern=document.querySelector('.Modern_Solution_Services')

const target=document.querySelector('section.main_content .container h1')

const services=[web,software,mobile,design,modern]
let prevService=web

services.forEach((ele,i)=>{
    ele.addEventListener('click',(e)=>{
        if(ele!==prevService){
            prevService.classList.remove('active')
            ele.classList.add('active')
            prevService=ele
        }
        target.innerHTML=e.target.className.split(' ')[0].split('_').join(' ')
    })
})

