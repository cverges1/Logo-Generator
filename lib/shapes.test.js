const Shape = require('./shapes');

describe('Shape', () => {
    it('should return console.log if text has more than 3 letters', () => {
        const shape = new Shape();
        const result = shape.renderText('DFGK');

        expect(result).toEqual(console.log('Please only enter 3 letters'));
    });

    it('should return circle', () => {
        const shape = new Shape();
        const result = shape.renderShape('circle');

        expect(result).toEqual(`<circle cx="150" cy="100" r="80" fill=${this.shapeColor} />`);
    });

    it('should return triangle', () => {
        const shape = new Shape();
        const result = shape.renderShape('triangle');

        expect(result).toEqual(`<polygon points="250, 60 100, 400 400,400" fill=${this.shapeColor} />`);
    });

    it('should return square', () => {
        const shape = new Shape();
        const result = shape.renderShape('square');

        expect(result).toEqual(`<rect x="10" y="10" width="30" height="30 fill=${this.shapeColor} />`);
    });
});