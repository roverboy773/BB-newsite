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


