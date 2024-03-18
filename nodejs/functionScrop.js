function plusAll (){
    var res = 0 ;
    for(var i in arguments) {
        res += arguments[i];
    }
    return res;
}
//scopes fuction
var avar = " something global" ;
afunc();
function afunc () {
    console.log(avar) ;
    var avar = " something local" ;
    console.log(avar) ;
}
var student = {
    name : "mai ha thi",
    getName : function () {
        console.log(this.name) ;
        return this.name ;
    }

};
// call apply
function step1 () 
{
    console.log(te);
}
function step2 (){
    var te = 2;
    step1();
}
step2();
var te ="Global variables";
// bind
var checkNumericRange = function(value){
    if(typeof value !== "number") return false;
    else return value >= this.min && value <= this.max;
}
var range = {min : 10 , max :20};
var bondCheckNumericRange = checkNumericRange(range);
var result = bondCheckNumericRange(12);
console.log(result);
//currying
function add(v1,v2){return v1 + v2;}
function curriedAdd(v2){return add(5,v2);}
// lexical scope
function Fouter(){
    var x = "hello";
    function fInner(){
        x = "world";
    }
    fInner();
    return x;
}
console.log(Fouter());
var myFunction = function(){
    var name = "ha thi";
    var myOtherFunction = function(){
        console.log("i am " + name);
    };
    console.log(name);
    myOtherFunction();
};
myFunction();
// closures
function outerF(){
    var x = " world";
    function innerFsetX(val){
        x = val;
    }
    return innerFsetX;
}
var a = outerF();
a("hello world");
// functions inheritance
class square{
    constructor(width){
        this.width=width;
    }
    getArea(){
        console.log(this.width*this.width);
        return this.width*this.width;
    }
}
class cube extends square{
    constructor(width){
        super(width);
    }
    squareArea = this.getArea();
    getVolum(){
        console.log(this.squareArea*this.width);
        return this.squareArea*this.width;
    }
}
var myCube = new cube(5);
myCube.getVolum();

// chuyener functions => class ( slied 37)
// oop
class pet{
    constructor(name, inreoduct){
        this.name = name;
        this.inreoduct = inreoduct;
    }
    getName(){
        console.log(this.name);
    }
    getVolum(){};
}
class dog extends pet{
    constructor(name,inreoduct){
        super(name);
        super(inreoduct);
    };
    getVolum(){
        console.log(`gau gau`);
    }
}
class cat extends pet{
    constructor(name,inreoduct){
        super(name);
        super(inreoduct);
    };
    getVolum(){
        console.log(`mew mew`);
    }
}
var catt = new cat("heo");
catt.getName();
catt.getVolum();
// call back
// su dungj o tren tim so chan trong 1 mang , co su dung callback trong mang