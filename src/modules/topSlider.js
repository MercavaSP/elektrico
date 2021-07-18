
const topSlider = () => {
    const slider = document.querySelector('.top-slider'),
        slide = document.querySelectorAll('.top-slider_item'),
        sliderDots = document.querySelector('.slick-dots'),
        textItem = document.querySelectorAll('.table');

    let currentSlide = 0,
        interval,
        dots;
    
    const prevSlide = (elem, index, strClass) => {
            elem[index].classList.remove(strClass);
        };

    const nextSlide = (elem, index, strClass) => {
            elem[index].classList.add(strClass);
    };



    const autoPlaySlide = () => {
        prevSlide(slide, currentSlide, 'top-slider_item__active');
        prevSlide(textItem, currentSlide, 'active');
        prevSlide(dots, currentSlide, 'slick-active');
        currentSlide++;
        if (currentSlide >= slide.length){
            currentSlide = 0;
        }
        nextSlide(slide, currentSlide, 'top-slider_item__active');
        nextSlide(textItem, currentSlide, 'active');
        nextSlide(dots, currentSlide, 'slick-active');
        };
    

    const startSlide = (time = 3000) => {
            interval = setInterval(autoPlaySlide, time);
        };

    const stopSlide = () => {
            clearInterval(interval);
        };

        slider.addEventListener('click', event => {
            event.preventDefault();
            let target = event.target;

            if (!target.matches('.dot')) {
                return;
            }

            prevSlide(dots, currentSlide, 'dot-active');

            if (target.matches('.dot')) {
                dots.forEach((elem, index) => {
                    if (elem === target) {
                        currentSlide = index;
                    }
                });
            }

            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }

            if (currentSlide < 0) {
                currentSlide = slide.length - 1;
            }
            nextSlide(dots, currentSlide, 'dot-active');

        });

        slider.addEventListener('mouseover', (event) => {
            if (event.target.matches('.dot')) {
                stopSlide();
            }
        });

        slider.addEventListener('mouseout', (event) => {
            if (event.target.matches('.dot')) {
                startSlide();
            }
        });

    const addDots = () => {
            for (let i = 0; i < slide.length; i++) {
                let li = document.createElement('li');
                li.classList.add('dot');
                if (i === 0) {
                    li.classList.add('slick-active');
                }
                sliderDots.append(li);
            }
            dots = document.querySelectorAll('.dot');
        };

    addDots();
    startSlide();
};

export default topSlider;
