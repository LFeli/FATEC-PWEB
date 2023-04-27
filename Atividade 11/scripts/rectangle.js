export function Rectangle (width, height){
    this.rectangleWidth = width;
    this.rectangleHeight = height;

    this.returnWidth = function(){
        return this.rectangleWidth
    }

    this.returnHeight = function(){
        return this.rectangleHeight
    }

    this.areaCalculation = function(){
        return this.rectangleWidth * this.rectangleHeight;
    }
}