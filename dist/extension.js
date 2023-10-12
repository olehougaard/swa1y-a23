function createHouse(address) {
    function getAddress() { return address; }
    return { getAddress };
}
function createColored(color) {
    function getColor() { return color; }
    return { getColor };
}
function ColoredHouse(address, color) {
    return Object.assign(Object.assign({}, createHouse(address)), createColored(color));
}
const ch = ColoredHouse('Somewhere', 0x2af323);
console.log(ch.getAddress());
console.log(ch.getColor());
//# sourceMappingURL=extension.js.map