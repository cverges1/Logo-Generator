const Shapes = require('./shapes');

class Circle extends Shapes {
    constructor(logoText, textColor, shapeColor) {
        super(logoText, textColor, shapeColor)
    }

    renderLogo() {
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/>

        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoText}</text>
        </svg>
        `
    }
};

class Triangle extends Shapes {
    constructor(logoText, textColor, shapeColor) {
        super(logoText, textColor, shapeColor)
    }

    renderLogo() {
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <polygon points="250, 60 100, 400 400,400" fill="${this.shapeColor}"/>

        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoText}</text>
        </svg>
        `
    }
};

class Square extends Shapes {
    constructor(logoText, textColor, shapeColor) {
        super(logoText, textColor, shapeColor)
    }

    renderLogo() {
        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <rect x="10" y="10" width="30" height="30 fill=${this.shapeColor}"/>

        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoText}</text>
        </svg>`
    }
};

module.exports = {Circle, Triangle, Square}