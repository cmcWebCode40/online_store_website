// //**********Carousel Effects for Landing page**********/

(() => {
    // document.querySelector(".carousel__button-next").addEventListener('click', (e) => {
    //     let num = 0;
    //     console.log(num++);
    //     console.log("me");


    // })

    let items = document.querySelectorAll('.carousel__photo'),
    totalItems = items.length,
    slide = 0,
    moving=true;

    const setInitialClassses =()=>{
        items[totalItems-1].classList.add('prev');
        items[0].classList.add("active");
        items[1].classList.add('next')
    }

    const disableCarouselDisplay=()=>{
        movinf
    }

    const moveToNext=()=> {
        if(!moving) {
            if (slide===(totalItems -1)) {
                slide =0;
            } else {
                slide++;
            }
            carouselDirection(slide)
        }
    }
    
    const moveToPrev=()=> {
        if(!moving) {
            if (slide===0) {
               slide = (totalItems -1);
            } else {
                slide--;
            }
            carouselDirection(slide)
        }
    }

    //*******Event Listernenrs for Buttons************//
    const carouselButtonListeners =()=>{
        const next = document.querySelector(".carousel__button-next")[0];
        const prev= document.querySelector(".carousel__button-prev")[0];
        next.addEventListener('click', moveToNext)
        prev.addEventListener('click', moveToPrev)
        
    }
    
})()

// init()

console.log("hello");

