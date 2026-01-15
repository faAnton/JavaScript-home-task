// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(a,b,c) {
    let largest;
    if (a >= b){
        a >= c ? largest = a : largest = c;
    }else{
        b >= c ? largest = b : largest = c
    }
    return largest;
}
