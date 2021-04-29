import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
    constructor(product) {
        this.product = product,
        this.elem = this.render()
    }

    customHandler(event, productId) {
        if ( !event.target.closest('.card__button ') ) {
            return;
        }

        const event = new CustomEvent("product-add", { 
            detail: this.productId, 
            bubbles: true 
        })

        this.elem.dispatchEvent(event);
    }

    render() {
        this.template = document.createElement("DIV");
        this.template.className = "card";

        this.templateInner = `<div class="card__top">
                                <img src="/assets/images/products/${this.product.image}" class="card__image" alt="product">
                                <span class="card__price">€${this.product.price.toFixed(2)}</span>
                            </div>`;

        this.templateInner += `<div class="card__body">
                                    <div class="card__title">${this.product.name}</div>
                                    <button type="button" class="card__button">
                                        <img src="/assets/images/icons/plus-icon.svg" alt="icon">
                                    </button>
                                </div>`;

        this.template.insertAdjacentHTML("beforeEnd", this.templateInner);

        this.template.addEventListener('click', event => {
            this.customHandler(event, this.product.id);
        });

        return this.template;
    }
}
