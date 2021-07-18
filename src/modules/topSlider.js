
const topSlider = () => {
    const slider = document.querySelector('.top-slider'),
        slide = document.querySelectorAll('.top-slider_item'),
        textItem = document.querySelectorAll('.table');

    let currentSlide = 0,
    interval,
    // dots;

    const autoPlaySlide = () => {
        slide[currentSlide].classList.remove('top-slider_item__active');
        textItem[currentSlide].classList.remove('active');
        currentSlide++;
        if (currentSlide >= slide.length){
            currentSlide = 0;
        }
        
        if (currentSlide >= textItem.length){
            currentSlide = 0;
        }
        slide[currentSlide].classList.add('top-slider_item__active');
        textItem[currentSlide].classList.add('active');
        };
    

    const startSlide = (time = 3000) => {
            interval = setInterval(autoPlaySlide, time);
        };

    // const addDots = () => {
    //         for (let i = 0; i < slide.length; i++) {
    //             let li = document.createElement('li');
    //             li.classList.add('dot');
    //             if (i === 0) {
    //                 li.classList.add('dot-active');
    //             }
    //             portfolioDots.append(li);
    //         }
    //         dots = document.querySelectorAll('.dot');
    //     };

    // addDots();
    startSlide();
};

export default topSlider;
