class Carousel {
    constructor(element){
        this.element = element;
        this.images = ['./assets/carousel/mountains.jpeg',
        './assets/carousel/computer.jpeg',
        './assets/carousel/trees.jpeg',
        './assets/carousel/turntable.jpeg',
        ];

        //let carouselDom = document.querySelector('.carousel');
        this.theImgs = carouselDom.querySelectorAll('img');
        this.size = [];
        this.currIndex = 0;
        this.counter = 0;
        this.time = 3000;

        this.leftButton = document.querySelector(".left-button");
        this.rightButton = document.querySelector(".right-button");

        this.firstRun();
        
    }

    firstRun(){
        //this.theImgs[this.currIndex].setAttribute("src", this.images[this.currIndex] );
        this.theImgs[this.currIndex].style.display = "block";
        // this.theImgs.forEach((item, index, array) => {
        //     this.theImgs[index].style.display = "block";
        // })
        //this.theImgs.forEach((item, index, array) => {this.size[index] = array[index].width})
        let defaultUl = document.getElementById("sliderWrapper");
        defaultUl.style.padding = "0";
        console.log(`${this.currIndex}`);
        
    }



}


/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/


let carouselDom = document.querySelector('.carousel');
let carouselEl = new Carousel(carouselDom);
let size = carouselEl.size[0];
//carouselDom.style.transform = 'translateX(' + (-carouselEl.size * carouselEl.counter) + 'px)';

// carouselEl.leftButton.addEventListener('click', carouselEl.carouselLeft);

// carouselEl.rightButton.addEventListener('click', carouselEl.carouselRight);

carouselEl.leftButton.addEventListener('click', (() =>{
    console.log("left");

}));

carouselEl.rightButton.addEventListener('click', (() => {
    console.log("right");
}));



