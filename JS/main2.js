
let b = "Victor";
let с = "100"; 


//let a3 = a2 / a1;
//let a4 = 1+10;

//console.log(a3);
//console.log(a4);

let b1 = true;
let b2 = false;

//console.log(b1, b2);




let a1 = 10;
let a2 = 9;

let a3 = 15;
let a4 = 20;

let check1 = a1 > a2 && a3 < a4;
let check2 = a1 > a2 || a3 > a4 || a1 > a3 || a4 == a2;
let check3 = a1 > a2 && a3 <= a4 && a1 < a3 && a4 == a2;
console.log("check1---", check1);
console.log("check2---", check2);
console.log("check3---", check3);


if (false) {
    console.log("Check TRUE")

} 

 



if (check1) {
    console.log("Check1 TRUE")

 let nn =10;
 let tt = 20;
 let result = nn + tt;
 console.log("result ===", result)

}else if (check2){
    console.log("Check2 TRUE")
}else if (check3){
    console.log("Check3 TRUE")
}else{
    console.log("Else -- Check TRUE")
}