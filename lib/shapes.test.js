const { Circle, Triangle, Square } = require('./circle-triangle-square');
const Shape = require('./shapes');

describe('Shape', () => {
    it('should return console.log if text has more than 3 letters', () => {
        const shape = new Shape();
        const result = shape.renderText('DFGK');

        expect(result).toEqual();
    });

    it('should return the text the user inputed', () => {
        const shape = new Shape();

        const result = shape.renderText('BBB')

        expect(result).toEqual(this.logoText);
    });

    it('should return the text color', () => {
        const shape = new Shape();
        const result = shape.setTextColor('blue');

        expect(result).toEqual(this.textColor);
    });

    it('should return the shape color', () => {
        const shape = new Shape();
        const result = shape.setColor('red');

        expect(result).toEqual(this.shapeColor);
    });

    it('should return the logo as a circle', () => {
        const circle = new Circle();
        circle.renderText('BBB');
        circle.setTextColor('blue');
        circle.setColor('red');
        expect(circle.renderLogo()).toEqual(`
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill="red"/>

        <text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">BBB</text>
        </svg>
        `)
    });

    it('should return the logo as a triangle', () => {
        const triangle = new Triangle();
        triangle.renderText('BBB');
        triangle.setTextColor('blue');
        triangle.setColor('red');
        expect(triangle.renderLogo()).toEqual(`
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <polygon points="150, 1 0, 275 400,425" fill="red"/>

        <text x="155" y="155" font-size="60" text-anchor="middle" fill="blue">BBB</text>
        </svg>
        `)
    });

    it('should return the logo as a square', () => {
        const square = new Square();
        square.renderText('BBB');
        square.setTextColor('blue');
        square.setColor('red');
        expect(square.renderLogo()).toEqual(`
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <rect x="75" y="30" width="150" height="150" fill="red"/>

        <text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">BBB</text>
        </svg>
        `)
    });
});