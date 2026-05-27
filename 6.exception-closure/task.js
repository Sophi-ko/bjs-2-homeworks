function parseCount(count) {
    if(isNaN(Number.parseFloat(count))) {
        throw new Error ('Невалидное значение');        
    }
    return Number.parseFloat(count);
}

function validateCount(count) {
    try {
       if(parseCount(count)) {
        return parseCount(count);
       };
    } catch (error) {
        return error;
    }
}

class Triangle {
    constructor(a,b,c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if(this.a > this.b + this.c || this.b > this.a + this.c || this.c > this.a + this.b) {
            throw new Error ('Треугольник с такими сторонами не существует');
        };
    }

    get perimeter() {
        let p = this.a + this.b + this.c;
        return p;
    }

    get area() {
        let halfP = 0.5 * (this.a + this.b + this.c);
        let s = Math.sqrt(halfP * (halfP - this.a) * (halfP - this.b) * (halfP - this.c));
        return Number(s.toFixed(3));
    }
}

function getTriangle(a,b,c) {
    try {
        let triangle = new Triangle(a, b, c);
        return triangle;
    } catch(error) {
        return {
            get area() { return 'Ошибка! Треугольник не существует' },
            get perimeter() { return 'Ошибка! Треугольник не существует' },
        }
    }
}