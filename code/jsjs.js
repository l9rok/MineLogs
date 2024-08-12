let a = 50;
let b = 70;
if (a > 10 && b > 70){
    a = a + 10;
    b = b * 2;
    console.log(a + b);
} 
else if (a > 40 && b > 40){
    a = a + 50;
    b = a * b;
    console.log(b);
} 
else {
    console.log(0);
}