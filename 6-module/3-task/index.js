import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
    constructor(slides) {
        this.slides = slides,
        this.elem = this.render()
    }

    changeSlide(event) {
        if ( ! event.target.closest(".carousel__arrow") ) {
            return;
        }

        let container = event.target.closest(".carousel"),
            slidesInner = container.querySelector(".carousel__inner"),
            slides = container.querySelectorAll(".carousel__slide"),
            currentSlide = slidesInner.dataset.current ? 1*slidesInner.dataset.current : 0,
            slideWidth = slidesInner.offsetWidth,
            leftArrow = container.querySelector(".carousel__arrow.carousel__arrow_left"),
            rightArrow = container.querySelector(".carousel__arrow.carousel__arrow_right"),
            nextSlide = null,
            transformValue = null;

        if ( event.target.closest(".carousel__arrow.carousel__arrow_right") ) {
            nextSlide = (currentSlide + 1) >= slides.length ? ( slides.length - 1 ) : (currentSlide + 1);
            if ( nextSlide == slides.length - 1 ) {
                event.target.closest(".carousel__arrow.carousel__arrow_right").style.display = 'none';
            } else {
                event.target.closest(".carousel__arrow.carousel__arrow_right").style.display = '';
            }
            leftArrow.style.display = '';
        } else if ( event.target.closest(".carousel__arrow.carousel__arrow_left") ) {
            nextSlide = (currentSlide - 1) < 0 ? 0 : (currentSlide - 1);
            if ( nextSlide == 0 ) {
                event.target.closest(".carousel__arrow.carousel__arrow_left").style.display = 'none';
            } else {
                event.target.closest(".carousel__arrow.carousel__arrow_left").style.display = '';
            }
            rightArrow.style.display = '';
        }

        transformValue = nextSlide * slideWidth;
        slidesInner.dataset.current = + nextSlide;
        slidesInner.style.transform = `translateX(-${transformValue}px)`;
    }

    render() { 
        
        this.template = document.createElement("DIV");
        this.template.className = "carousel";

        this.templateInner =   `<div class="carousel__arrow carousel__arrow_right">
                                    <img src="/assets/images/icons/angle-icon.svg" alt="icon">
                                </div>
                                <div class="carousel__arrow carousel__arrow_left" style="display:none;">
                                    <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
                                </div>`;
        
        this.template.insertAdjacentHTML("beforeEnd", this.templateInner);

        this.carousel = `<div class="carousel__inner">`;
        for (let i = 0; i < this.slides.length; i ++) {
            let slide = this.slides[i];
            this.carousel += `<div class="carousel__slide" data-id="${slide.id}">
                                <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
                                <div class="carousel__caption">
                                    <span class="carousel__price">€${slide.price.toFixed(2)}</span>
                                    <div class="carousel__title">${slide.name}</div>
                                    <button type="button" class="carousel__button">
                                        <img src="/assets/images/icons/plus-icon.svg" alt="icon">
                                    </button>
                                </div>
                            </div>`;
        }
        this.carousel += `</div>`;

        this.template.insertAdjacentHTML("beforeEnd", this.carousel);

        this.template.addEventListener('click', event => {
            this.changeSlide(event);
        });

        this.template.addEventListener('click', this.putInCart.bind(this));

        return this.template;
    }

    putInCart(ev) {
        if ( ! ev.target.closest('.carousel__button') ) {
            return;
        }

        const slideId = ev.target.closest('.carousel__slide').dataset.id;

        const event = new CustomEvent("product-add", { 
            detail: slideId, 
            bubbles: true 
        });

        this.elem.dispatchEvent(event);
    }
}
