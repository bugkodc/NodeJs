// // Toán tử 3 ngôi
// const x = 100;
// let result;
// if (x < 1000) {
//     result = "nhỏ hơn 1000";
// } else {
//     result = "lớn hơn hoặc bằng 1000";
// }
// result = (x < 1e3) ? "nhỏ hơn 1000" :  "lớn hơn hoặc bằng 1000";
// // Shorthand Evaluated
// let variable2;
// if (variable1 !== null || variable1 !== undefined || variable1 !== '') {
// variable2 = variable1;
// } 
// else {
//     variable2 = "";
// }
// variable2 = variable1 || "";
// // Variable declaration – If Comparison
// let x_1;
// let y_1;
// let z_1 = 3;
// let x_2 ,y_2,z_2 = 3;
// if(istrue === true) return ;
// if(istrue) return;
// // For loop – For loop with decimal base
// var sampleArr;
// for(let i = 0 ; i < sampleArr.lenght ; i++) return
// for(let item in sampleArr) return
// 1e3 === 100 ;
// // xey x là rồi đầu , y là số số 0 ở sau ;
// //Object property
// const x_obj  = 1 , y_obj = 2;
// const obj_1 = {x : x , y:y};
// const obj_2 = {x,y};
// //Rút gọn định nghĩa functio
// //(Sử dụng arrow function)
// function sayHello(name){
//     console.log("hello" + name);
// }
// sayHello = name => console.log("hello" + name);
// setTimeout(function(){
//     console.log("load");
// },2000);
// setTimeout(()=> console.log("load"),2000);
// list.forEach(item => {
//     console.log(item);
// });
// list.forEach(function(iteam){
//     console.log(iteam);
// })
// function getvalue(ratio){
//     return ratio *= 7;
// }
// getvalue = ratio => ratio *= 9 ;
// //Set default value for parameter in function
// function getvalue_sum(a,b,c){
//     if(a=== undefined) a = 3 ;
//     if(b === undefined) b = 4;
//     return a*b+c;
// }
// getvalue_sum = (a , b = 5 , c = 5) => (a*b+c);
// //Template list
// const welcome = 'you have logged in as ' + F + ' ' + L +'.';
// const welcome_0 = 'you have logged in as   $F $L .';
// const lorgen = ' bugkodc \n\t' + 'bugkodc';
// const lo = `bugkodc
//              bugkodc `
// //Destructuring Assignment
// const action = require('lib/action')
// const service = require('lib/service')

// const form = this.props.form;
// const errors = this.props.errors;
// const entity = this.props.entity;
// const controller = this.props.controller;
// const component = this.props.component;
// import {action , service} from "lib";
// const {form_1 , errors_1 , entity_1 , controller_1 , component_1} = this.props;
// //Spead Operator
// const odd = [1,2,3];
// const num = [2,4,6].concat(odd);
// const num_2 = [...odd];
// //Constraint Param
// function sampler(a){
//     if(a === undefined) throw new Error("thieu tham so");
//     return a;
// }
// errorss = () => {throw new Error("thieuthamso");};
// sampler =(a = errorss()) => a ;
// //Find() in arrays
// const employees = [{ nam :'bugkodc' , age : 20}]
// emp = employees.find(item => item.nam === 'bugkodc');
// //Object[key]
// function validate(fullName) {
//     if(!fullName.firstName)
//         return false;
//     if(!fullName.lastName)
//         return false;
//     return true;
// }

// console.log(validate({firstName: 'Duy', lastName: 'Buffet'}));
// const rule = {
//     firstName: {
//         required: true
//     },
//     lastName: {
//         required: true
//     }
// }

// const validate = (rule, values) => {
//     for(prop in rule) {
//         if(rule[prop].required) {
//             if(!values[prop]) {
//                 return false;
//             }
//         }
//     }
//     return true;
// }

// console.log(validate(rule, {firstName: 'Duy'})); // false
// console.log(validate(rule, {firstName: 'Duy', lastName: 'Buffet'})); 
// // Bitwise NOT double
// Math.floor(8.9) === 6 ;
// ~~6.9 === 6 ;
// //Kt so le
const sole = num => num% 2 === 1 ;
console.log(sole(5)); //