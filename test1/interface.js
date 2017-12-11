function area(shape) {
    var area = shape.width * shape.height;
    //return "shape is :"+name+" and area is :"+area;
    return "shape is :" + shape.name + " and area is :" + area;
}
console.log(area({ name: "rectangle", width: 3, height: 4 }));
console.log(area({ name: "rectangle", width: 5, height: 6, color: "red" }));
