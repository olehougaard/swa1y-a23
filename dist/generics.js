function identityNaive(x) {
    return x;
}
const u = identityNaive("Hello"); // Without generics, type of s is unknown
function nCopies(n, value) {
    const copies = new Array(n);
    for (let i = 0; i < n; i++) {
        copies[i] = value;
    }
    return copies;
}
const hellos = nCopies(7, "Hello");
function oppositeNaive(v) {
    return Object.assign(Object.assign({}, v), { dx: -v.dx, dy: -v.dy });
}
let cv = { dx: 10, dy: 22, color: 0x3248f9 };
const v = oppositeNaive(cv);
//# sourceMappingURL=generics.js.map