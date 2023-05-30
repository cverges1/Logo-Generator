//SHAPE CLASS
class Shapes {
    constructor(logoText, textColor, shape, shapeColor) {
        this.logoText = logoText;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
    }
    renderText(data){
        if (data.length > 3){
            return console.log('Please only enter 3 letters')
        } else {
            this.logoText = data;
        }
    }

    renderShape(data){
        if (data === 'circle'){
           return this.shape = `<circle cx="150" cy="100" r="80" fill=${this.shapeColor} />`
        }
        if (data === 'triangle'){
            return this.shape = `<polygon points="250, 60 100, 400 400,400" fill=${this.shapeColor} />`
        }
        if (data === 'square'){
            return this.shape = `<rect x="10" y="10" width="30" height="30 fill=${this.shapeColor} />`
        }
    }

    setColor(data){
        this.shapeColor 
    }

    renderLogo(data) {
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <${renderShape(this.shape)}/>

        <text x="150" y="125" font-size="60" text-anchor="middle" fill=${this.textColor}>${renderText(this.logoText)}</text>
        </svg>
`}
};

module.exports = Shapes;