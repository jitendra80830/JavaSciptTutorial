// console.log("Hello world");
//         alert("stopt it");

//Data Types
var num = 100;
var num1  =100;
// console.log(num+num1);


var str = "jitendra";
var str1 = "kumar";

var ob = {
    "name":"jitendra",
    "address":"pune",
    "age":"24"
}
// console.log(ob);

var b =true;
var a  = false;
// console.log(a,b);

//At very high level , There is two tyes of data types in javascript
//1.priminitive data types-> undifined , null , number , string , boolen ,symol
//2.reference data type -> object and Arrays
//Symbol() - > it will generate unique value in evety call

//Arrays
var arr = [1,2,3,4,5];
// console.log(arr[2]);


//function
function avg(a , b){
    return (a*b)/2;
}

c1 = avg(9,2);
c2 = avg(3,5);
// console.log(c1);
// console.log(c2);

//loop

var arr1 = [1,2,3,4,5,6,7,7,8,9];
for(var i =0;i<arr1.length;i++){
    //console.log(arr1[i]);
}
arr1.forEach(function(element){
    //console.log(element);
});

let j = 0;

while(j<arr1.length){
    //console.log(arr1[j]);
    j++;
}

if(true){
    let m = 10;
}
//console.log(m); -> not allowed due to scop

let mydate = new Date();
//console.log(mydate.getFullYear);

let ele = document.getElementById("click");
console.log(ele);

function onClicked(){
    //console.log("The button was clicked");
}