// A function retains its scope
function add(a) {
    function innerAdd(b) {
        return a + b
    }
    return innerAdd
}

// Alternative: 
// const a => b => a + b

const add2 = add(2)
const add4 = add(4)

console.log(add2(7))
console.log(add4(7))

// With variable
function sequence() {
    let i = 0
    return function() {
        i++
        return i
    }
}

let seq1 = sequence()
console.log(seq1())
console.log(seq1())
console.log(seq1())

// Factory function
function createSequence() {
    let i = 0
    return {
        next: function() {
            i++
            return i
        }
    }
}

console.log("-------------")
let seq2 = createSequence()
console.log(seq2.next())
console.log(seq2.next())
console.log(seq2.next())
console.log(seq2.next())
console.log("-------------")
let seq3 = createSequence()
console.log(seq3.next())
console.log(seq3.next())
console.log(seq2.next())

/*
public class Point {
    private int x;
    private int y;

    public Point(int x, int y) {
        this.x = x;
        this.y = y;
    }

    public int distance() {
        return x + y;
    }

    public String toString() {
        return x + ", " + y;
    }
}
*/

// 1. The parameters of the constructor => parameters of the function
// 2. All other instance variables become local variables
// 3. The methods become inner functions
// 4. return an object with all the public properties

function createPoint(x, y) {
    function distance() {
        return x + y
    }

    function toString() {
        return x + ', ' + y
    }

    return {
        distance: distance,
        toString: toString
    }
}

let p = createPoint(3, 4)
console.log(p.distance())

let dist = p.distance
console.log(dist())

function Point(x, y) {
    this.distance = function() {
        return x + y
    }

    this.toString = function () {
        return x + ', ' + y
    }
}

let p2 = new Point(3, 4)
console.log(p2.distance())
