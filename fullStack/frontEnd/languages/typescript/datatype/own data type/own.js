var laptop = /** @class */ (function () {
    function laptop() {
        this.keyboard = 1;
    }
    laptop.prototype.withmonitor = function () {
        console.log("we can see the things ");
    };
    return laptop;
}());
var lenovo = new laptop();
console.log(lenovo);
