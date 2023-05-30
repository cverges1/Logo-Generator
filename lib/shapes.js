//SHAPE CLASS
class Shapes {
    constructor() {
        this.logoText = '';
        this.textColor = '';
        this.shapeColor = '';
    }
    renderText(data){
        if (data.length > 3){
            return console.log('Please only enter 3 letters')
        } else {
            console.log(data)
            this.logoText = data;
        }
    }

    setTextColor(data){
        this.textColor = data;
    }

    setColor(data){
        this.shapeColor = data;
    }};

module.exports = Shapes;