const books = [
    {
         tacGia : "bugkodc",
        tieude:"dev games",
        namXuatBan : 2020,
        TrangThai : true,

    },
    {
        tacGia : "bugkodc3",
       tieude:"dev games 3",
       namXuatBan : 2020,
       TrangThai : true,

   }
];
for(let item in books) {
    console.log(`${books[item].tacGia}, ${books[item].tieude}, ${books[item].namXuatBan}`);
}
books.forEach(item => {
    console.log(`${item.tacGia}, ${item.tieude}, ${item.namXuatBan}`);
});
// input max , min 
const array = [1,3,4,6,8,10,11,34];
MaxMin = () =>{
    let max = array[0];
    let min = array[0];
    for(let i in array) {
        if(array[i] > max) max = array[i] ;
        if(array[i] < min) min = array[i] ;
    }
    console.log(max , min);
}
MaxMin();
//maxstring
const stringtext = "co thuy dep lam";
maxstring = (stringtext) => {
    let arraytext = stringtext.split(" ");
    let count = " ";
   for(let i in arraytext){
    if(arraytext[i] > count) count = arraytext[i] ;
   }
   console.log(count)
}
maxstring(stringtext);
// 3. 
const stringLab3 = "bugkodc";
doistring = (text) => {
    let arraystringtext ="";
    for(let i =  text.length - 1 ; i>=0 ; i--){
        arraystringtext += text[i];
    }
    console.log(arraystringtext)
}
doistring("bugkodc");
//4 
// plus =  ()=>{
//     var res = 0 ;
//     for(let i in arguments)  res += arguments[i] ;
//     console.log(res)
//     }

// plus(1)
// plus()
// plus(1,2,3)
var person1 = {name: "bugkodc", age:"1"}
var person2 = {name: "bugkodc2", age: "2"}
var sayHello = function(){console.log(this.person1.name)}
var sayGB = function(){console.log(this.person2.name)}
sayHello()
sayGB()
