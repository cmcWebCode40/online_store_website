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
        moving = true;

        setTimeout(() => {
            moving = false;
        }, 500);
    }

    const carouselDirection =(slide)=> {
        if (!moving) {
            disableCarouselDisplay();
            let newPrev =  slide -1,
            newNext = slide +1,
            oldPrev = slide -2,
            oldNext = slide +2;
            
            if ((totalItems -1)> 3) {
               if (newPrev <=0) {
                   oldPrev = (totalItems -1);
               } else if(newNext >= (totalItems-1)) {
                   oldNext =0;
               } 

               if (slide === 0) {
                   newPrev = (totalItems -1);
                   oldPrev = (totalItems -2);
                   oldNext = (slide +1);
               } else if(slide === (totalItems-1)) {
                   newPrev = (slide -1);
                   newNext =0;
                   oldNext =1;
               }
            } 
        }
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

