var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Shape = /** @class */ (function () {
    function Shape() {
    }
    return Shape;
}());
//testStr:string;
var testStr = "hello";
color: string;
//注意中间用逗号隔开变量
//给name加上public修饰符
constructor(public, name, string, width, number, height, number);
{
    this.area = width * height;
    this.color = "pink";
    //		this.testStr=;
}
;
showTxt();
{
    return "my color :" + this.color + ",my name :" + this.name + ",and my area is :" + this.area + "";
}
var square = new Shape("square", 20, 10);
console.log(square.showTxt());
console.log('area:' + square.area);
console.log('width:' + square.width);
console.log('color:' + square.color);
console.log('name:' + square.name);
//继承
//父类中的变量都可以点出来？
var ShapeChild = /** @class */ (function (_super) {
    __extends(ShapeChild, _super);
    function ShapeChild(name, width, height, length) {
        var _this = _super.call(this, name, width, height) || this;
        _this.name = name;
        _this.sayHello = _this.testStr;
        _this.volume = length * _this.area;
        return _this;
    }
    ShapeChild.prototype.superShowTxt = function () {
        return _super.prototype.showTxt.call(this);
    };
    ShapeChild.prototype.showTxt = function () {
        return "my color is:" + this.color + ",my name :" + this.name + ",and my volume is :" + this.volume + ",and sayHello:" + this.sayHello;
    };
    return ShapeChild;
}(Shape));
var cube = new ShapeChild("cube", 30, 30, 30);
console.log(cube.showTxt());
console.log(cube.superShowTxt());
