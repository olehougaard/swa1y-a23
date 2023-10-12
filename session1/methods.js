function add(x, y) {
    return x + y
}

console.log(add(2, 3))

const addThat = (x, y) => x + y // Arrow functions

// add = 27 (error: add is const)

const obj = {} // = { add: add }
obj.add = addThat

console.log(obj.add(2, 3))

function addThisAndThat(x, y) {
    return this + x + y
}

console.log(addThisAndThat(2, 3))

console.log(addThisAndThat.call(10, 2, 3))
//                             ^^^^^^^^^^
//                             (this, x, y)

function addThisXAndThat(x, y) {
    return this.x + x + y
}

let xObj = {x: 10}

console.log(addThisXAndThat.call(xObj, 2, 3))
xObj.add = addThisXAndThat
console.log(xObj.add(2, 3))

let sanerObject = {
    x: 100,
    y: 200,
    total: function() {
        return this.x + this.y
    }
}

console.log(sanerObject.total())

let brokenTotal = sanerObject.total
console.log(brokenTotal())

let fixedTotal = brokenTotal.bind(sanerObject)
console.log(fixedTotal())

function altTotal() {
    return sanerObject.total()
}

console.log(altTotal())

let errorObject = {
    x: 100,
    y: 200,
    total: function() {
        return x + y
    }
}

console.log(errorObject.total()) // error
