function identityNaive(x: unknown) {
    return x
}

function identity<T>(x: T): T {
    return x
}

const u = identity("Hello" as string) // Without generics, type of u is unknown

function nCopies<T>(n: number, value: T): T[] {
    const copies = new Array<T>(n)
    for(let i: number = 0; i < n; i++) {
        copies[i] = value
    }
    return copies
}

const hellos = nCopies(7, "Hello")

type Vector = {
    dx: number,
    dy: number
}

type ColoredVector = Vector & { color: number }

function oppositeNaive(v: Vector) {
    return { ...v, dx: -v.dx, dy: -v.dy}
}

function opposite<T extends Vector>(v: T): T { // extends means <:
    return { ...v, dx: -v.dx, dy: -v.dy}
}

let cv: ColoredVector = {dx: 10, dy: 22, color: 0x3248f9}

const v = opposite(cv)

