// eslint-disable-next-line strict
class SliderCarousel {
    constructor({
        main,
        wrap,
        next,
        prev,
        infinity = false,
        position = 0,
        slidesToShow = 4
    }) {
        this.main = document.querySelector(main);
        this.wrap = document.querySelector(wrap);
        this.slides = document.querySelector(wrap).children;
        this.next = document.querySelector(next);
        this.prev = document.querySelector(prev);
        this.slidesToShow = slidesToShow;
        this.options = {
            position,
            infinity,
            widthSlide: 100 / Math.floor(this.slidesToShow),
            maxPosition: this.slides.length - this.slidesToShow,
        };
    }

    init() {
        this.addMyClass();
        this.addStyle();

        if (this.prev && this.next) {
            this.controlSlider();
        } else {
            this.addArrow();
            this.controlSlider();
        }

    }

    addMyClass() {
        this.main.classList.add('my-slider');
        this.wrap.classList.add('my-slider_wrap');

        for (const item of this.slides) {
            item.classList.add('my-slider_item');
        }
    }


    addStyle() {
        const style = document.createElement('style');
        style.id = 'sliderCarousel-style';
        style.textContent = `
            .my-slider{
                overflow: hidden !important;
            }
            .my-slider_wrap{
                display: flex !important;
                transition: transform 0.5s !important;
                will-change: transform !important;

            }
            .my-slider_item{
                flex: 0 0 ${this.options.widthSlide}% !important;
                margin: auto 0 !important;

            }
        `;
        document.head.appendChild(style);
    }

    controlSlider() {
        this.prev.addEventListener('click', this.prevSlider.bind(this));
        this.next.addEventListener('click', this.nextSlider.bind(this));
    }
    prevSlider() {
        if (this.options.infinity || this.options.position > 0) {
            --this.options.position;
            if (this.options.position < 0) {
                this.options.position = this.options.maxPosition;
            }
            this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
        }
    }

    nextSlider() {
        if (this.options.infinity || this.options.position < this.options.maxPosition) {
            ++this.options.position;
            if (this.options.position > this.options.maxPosition) {
                this.options.position = 0;
            }
            this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
        }
    }

    addArrow() {

    }

}

export default SliderCarousel;