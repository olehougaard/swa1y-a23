const p = { x: 100}

const o = { y: 200}

Object.setPrototypeOf(o, p) // p is now the prototype of o

console.log(o.x)
p.x = 50
console.log(o.x)

o.x = 200

console.log(o.x)
console.log(p.x)

p.x = 100

console.log(o.x)
