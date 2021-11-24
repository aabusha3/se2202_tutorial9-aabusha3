class Shape {
    constructor(newX, newY) {
        let __x__ = 0;
        let __y__ = 0;

        __x__ = setX(newX);
        __y__ = setY(newY);

        this.getX = function() {
            return __x__;
        }
        this.getY = function() {
            return __y__;
        }

        function setX(x) {
            return x > 0 ? __x__ = x : __x__ = 0;
        }

        function setY(y) {
            return y > 0 ? __y__ = y : __y__ = 0;
        }
        /*
        Implement the constructor so that the variables to hold the constructor are hidden and can only be accessed through the setters and getters. 
        The setters of the coordinate would replace the given value with zero if it was negative.
        */
    }

    createHorizontalOffset(offset) {
        if (offset === undefined)
            offset = this.getX();
        let emptySpace = "";
        for (let i = 0; i < offset; i++)
            emptySpace += " ";

        return emptySpace;
    }

    draw() {
        for (let i = 0; i < this.getY(); i++)
            console.log("");
    }
};

class Square extends Shape // set this class to be a child of Shape
{

    constructor(x, y, newLength) {
        super(x, y);
        let __length__ = 0;
        __length__ = setLength(newLength);

        this.getLength = function() {
            return __length__;
        }

        function setLength(length) {
            return length > 0 ? __length__ = length : __length__ = 0;
        }
        /*
        Implement this constructor so that the length property would be hidden accessible only through the setters and getters, 
        not allowing negative values.
       */

    }

    draw() {
        super.draw(); // call the draw function defined in the parent class to draw the vertical offset
        let offset = super.createHorizontalOffset(); // call the createHorizontalOffset defined in the parent class with an empty argument list
        let square = "";
        for (let i = 0; i < this.getLength(); i++) {
            let line = "\n" + offset;
            for (let j = 0; j < this.getLength(); j++)
                line += "*";

            square += line;
        }

        console.log(square);
    }

};


class Triangle extends Shape // set this class to be a child of Shape
{
    constructor(x, y, newHeight) {
        super(x, y);
        let __height__ = 0;
        __height__ = setHeight(newHeight);

        this.getHeight = function() {
            return __height__;
        }

        function setHeight(height) {
            return height > 0 ? __height__ = height : __height__ = 0;
        }

        /**Implement this constructor so that the height property 
         * would be hidden accessible only through the setters and getters, not allowing negative values. 
         * */
    }
    draw() {
        super.draw(); // call the draw function defined in the parent class to draw the vertical offset
        let triangle = "";
        for (let i = 0; i < this.getHeight(); i++) {
            let line = "\n" + super.createHorizontalOffset(this.getX() - i); // call the createHorizontalOffset defined in the parent class with x - i as an argument

            for (let j = 0; j < ((i * 2) + 1); j++)
                line += "*";

            triangle += line;
        }
        console.log(triangle);
    }

};


// Please don't change these lines
let sq = new Square(3, 3, 5);
sq.draw();

let t = new Triangle(5, 2, 5);
t.draw();