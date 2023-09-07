function Point(x, y) {
    const getX = () => x
    const getY = () => y
    const moveTo = (_x, _y) => {
        x = _x
        y = _y
    }
    const toString = () => `(${x}, ${y})`

    return {
        getX, // Short for getX: getX
        getY,
        moveTo,
        toString
    }
}

/* (a)
function Circle(center, radius) {
    const getCenterX = () => center.getX()
    const getCenterY = () => center.getY()
    const getRadius = () => radius
    const moveCenterTo = (x, y) => {
        center.moveTo(x, y)
    }
    const toString = () => `${center.toString()} - ${radius}`
    return { getCenterX, getCenterY, getRadius, moveCenterTo, toString }
}
*/

/*
function Circle(arg1, arg2, arg3) {
    let center, radius
    if (arg3 !=== undefined) {
        center = Point(arg1, arg2)
        radius = arg3
    } else {
        center = arg1
        radius = arg2
    }
    ...
}
*/

function Circle({center, radius, x, y}) {
    center ??= Point(x, y) // If center is null or undefined, assign to Point(x, y)
    const getCenterX = () => center.getX()
    const getCenterY = () => center.getY()
    const getRadius = () => radius
    const moveCenterTo = (x, y) => {
        center.moveTo(x, y)
    }
    const toString = () => `${center.toString()} - ${radius}`
    return { getCenterX, getCenterY, getRadius, moveCenterTo, toString }
}

let c1 = Circle({center: Point(4, 5), radius: 3})
let c2 = Circle({x: 6, y: 8, radius: 10})

console.log(c1.toString())
console.log(c2.toString())
