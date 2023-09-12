var Dog1 = /** @class */ (function () {
    function Dog1() {
        this.leg = 2;
    }
    Dog1.prototype.withleg = function () {
        console.log("dog can run");
    };
    Dog1.prototype.withmouth = function () {
        console.log("dog can barking");
    };
    return Dog1;
}());
var tommy1 = new Dog1();
console.log(tommy1);
