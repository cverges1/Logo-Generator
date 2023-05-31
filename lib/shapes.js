class Shape {
    constructor() {
        this.logoText = '';
        this.textColor = '';
        this.shapeColor = '';
    }

    setTextColor(data){
        this.textColor = data;
    }
    renderText(data){
        if (data.length > 3){
            console.log('Please only enter 3 letters');
            this.logoText = "ERROR"
            return  
        } else {
            this.logoText = data;
        }
    }

    setColor(data){
        this.shapeColor = data;
    }};

module.exports = Shape;