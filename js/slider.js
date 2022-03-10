const slider = document.querySelectorAll('.slider')


let index = 0



const slideInterval = setInterval(() => {
   
},2000)


function nextSlide(){
    if(index === slider.length - 1){
        index = 0
        activeSlide(index)
    } else {
        index++
        activeSlide(index)
    }
}

function activeSlide(n){
    for(let slide of slider){
        slide.classList.remove('active')
    }
    slider[n].classList.add('active')
}