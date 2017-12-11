function area(shape:string,width:number,height:number){
	var area=width*height;
	return "shape is "+shape+"，and area is :"+area;
}
document.body.innerHTML=area("rectangle",3,4);