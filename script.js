class DomElement {
    constructor(selector, height, width, bg, fontSize) {
        this.selector = selector;
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
    }
    createElement(text) {
        let element;
        if (this.selector[0] === '.') {
            element = document.createElement('div');
            element.classList.add(this.selector.slice(1));
        } else if (this.selector[0] === '#') {
            element = document.createElement('p');
            element.id = this.selector.slice(1);
        }

        element.style.cssText = `
        height: ${this.height}px;
        width: ${this.width}px;
        background: ${this.bg};
        font-size: ${this.fontSize}px;
    `;

        element.textContent = text;

        document.body.appendChild(element);
    }
}


// Создаем новый объект на основе класса DomElement
const newElement = new DomElement('#block', 200, 400, 'lightblue', 16);

// Вызываем метод для создания элемента на странице
newElement.createElement('Да здравствует, ООП! Надеюсь все получится');