function loaderanima() {
  var loader = document.querySelector("#loader")
  setTimeout(function () {
    loader.style.top = "-100%";
  }, 4000)
}

var element = document.querySelector("#element-container")
var store = document.querySelector("#image-store")
element.addEventListener("mouseenter" , function(){
  store.style.display = "block";
})
element.addEventListener("mouseleave" , function(){
  store.style.display = "none";
})
var elems = document.querySelectorAll(".element")
elems.forEach( function(e) {
  e.addEventListener("mouseenter" , function(){
    var image = e.getAttribute("data-image")
    store.style.backgroundImage = `url(${image})`
  })
  
});

const imageswiper = new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 4000, 
    disableOnInteraction: false, 
  },
  loop: true, 
  
});



const slidesContainer = document.querySelector('.slides-container');
const prevSlide = document.getElementById('prevSlide');
const nextSlide = document.getElementById('nextSlide');

let currentIndex = 0;

nextSlide.addEventListener('click', () => {
  const totalSlides = document.querySelectorAll('.slide').length;
  if (currentIndex < totalSlides - 3) {
    currentIndex++;
    updateSlider();
  }
});

prevSlide.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
});

function updateSlider() {
  const offset = currentIndex * 33.3333;
  slidesContainer.style.transform = `translateX(-${offset}%)`;
  
  // Disable/Enable navigation buttons based on current slide
  prevSlide.disabled = currentIndex === 0;
  nextSlide.disabled = currentIndex >= document.querySelectorAll('.slide').length - 3;
}

// Initialize the slider state
updateSlider();

loaderanima();