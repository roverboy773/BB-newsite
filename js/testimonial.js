// ---------------TESTIMONIAL PURPLE BUTTON CHANGE------------//
const testimonial_button1=document.querySelector('.testimonial_button1')
const testimonial_button2=document.querySelector('.testimonial_button2')


let currSlide=2;
let prevSlide=2;

testimonial_button1.addEventListener('click',()=>{
    // console.log(';clciked')
    document.getElementById(`purple_square${prevSlide}`).style.backgroundColor="#634ABB"
    document.getElementById(`purple_square${prevSlide}`).style.transform="scale(1)"


    currSlide--;
   if(currSlide<1)
   currSlide=4;
   prevSlide=currSlide

   document.getElementById(`purple_square${currSlide}`).style.backgroundColor="#FCA702"
   document.getElementById(`purple_square${currSlide}`).style.transform="scale(1.75)"
})
testimonial_button2.addEventListener('click',()=>{
    // console.log(';clciked')
    document.getElementById(`purple_square${prevSlide}`).style.backgroundColor="#634ABB"
    document.getElementById(`purple_square${currSlide}`).style.transform="scale(1)"

    currSlide++;
   if(currSlide>4)
   currSlide=currSlide%4;
   prevSlide=currSlide

   document.getElementById(`purple_square${currSlide}`).style.backgroundColor="#FCA702"
   document.getElementById(`purple_square${currSlide}`).style.transform="scale(1.75)"
})