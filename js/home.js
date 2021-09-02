// -------------BLOG SECTION BUTTONS----------------//
const all_button = document.querySelector(".all_button");
const recent = document.querySelector(".recent_button1");
const popular = document.querySelector(".recent_button2");

const blogDiv = document.querySelector("#blog_wrapper");
const recentDiv = document.querySelector("#recent_wrapper");
const popularDiv = document.querySelector("#popular_wrapper");


all_button.addEventListener("click", (e) => {
    blogDiv.classList.remove("d-none");
    recentDiv.classList.add("d-none");
    popularDiv.classList.add("d-none");

    all_button.classList.add("active1");
    recent.classList.remove("active1");
    popular.classList.remove("active1");
    
  });
  
recent.addEventListener("click", (e) => {
    blogDiv.classList.add("d-none");
    recentDiv.classList.remove("d-none");
    popularDiv.classList.add("d-none");

    all_button.classList.remove("active1");
    recent.classList.add("active1");
    popular.classList.remove("active1");

});


popular.addEventListener("click", (e) => {
    blogDiv.classList.add("d-none");
    recentDiv.classList.add("d-none");
    popularDiv.classList.remove("d-none");

    all_button.classList.remove("active1");
    recent.classList.remove("active1");
    popular.classList.add("active1");

});

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

