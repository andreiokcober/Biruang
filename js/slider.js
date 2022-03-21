const sliders = document.querySelectorAll('#slider')
const slide = document.querySelector('#slider')
const containerSlider = document.querySelector('.container-slider')
const count = sliders.length


containerSlider.style.width = `${count * 100}`+ '%' 
slide.style.transition =  'transform 1s '

let index = 0





document.addEventListener('DOMContentLoaded',    () =>  {
        const interval = setInterval(  () => {
          startSlide()
        
    },2000)
   
    
})

 async function startSlide(){
    if(index === count  ){
        sliders.forEach( (slide) =>{ 
            slide.style.transform = 'translateX(0%)'
        })
        index = 0
    } else {
        sliders.forEach( (slide) =>{
             slide.style.transform = `translateX(${index * -100 + '%'})` 
        })
       
    }
        index++
        
}
