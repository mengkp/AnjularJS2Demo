var shape = {
    name: "rectangle",
    popup: function () {
        var _this = this;
        console.log('this is inside poup():' + this.name);
        //		setTimeout(
        //		   function(){
        //			   console.log('this is inside setTimeout():'+this.name);
        //			   console.log('my name is :'+this.name);
        //		   }
        //		,10);
        //ambda表达式 ()=>{something}或()=>something 相当于js中的函数,它的好处是可以自动将函数中的this附加到上下文中
        setTimeout(function () {
            console.log('this is inside setTimeout():' + _this.name);
            console.log('my name is :' + _this.name);
        }, 10);
    }
};
shape.popup();
