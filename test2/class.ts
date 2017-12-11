class Shape{
	//全局变量
	area:number;
	testStr:string;
	//color:string;
	//添加访问修饰符
	private color : string;
	
	//注意中间用逗号隔开变量
	//给name加上public修饰符
	constructor( public name:string,width:number,height:number){
		this.area=width*height;
		this.color="pink";
		this.testStr="hello";
	};
	
	showTxt(){
		return "my color :"+this.color+",my name :"+this.name+",and my area is :"+this.area+"";
	}
}

var square=new Shape("square",20,10);
console.log(square.showTxt());
console.log('area:'+square.area);
console.log('width:'+square.width);
console.log('color:'+square.color);
console.log('name:'+square.name);


//继承
//父类中的变量都可以点出来？
class ShapeChild extends Shape{
	volume:number;
	sayHello:string;
	constructor(public name:string,width:number,height:number,length:number){
		super(name,width,height);
		this.sayHello=this.testStr;
		this.volume=length*this.area;
	}
	
	
	superShowTxt(){
		return super.showTxt();
	}
	
	showTxt(){
		return "my color is:"+this.color+",my name :"+this.name+",and my volume is :"+this.volume+",and sayHello:"+this.sayHello;
	}
}

var cube = new ShapeChild("cube", 30, 30, 30);
console.log( cube.showTxt() );
console.log( cube.superShowTxt() );

