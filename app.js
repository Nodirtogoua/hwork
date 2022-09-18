// Like-Dislike

// let a = ["dislike","dislike","dislike","dislike","like","dislike","dislike","like","dislike","dislike","like","dislike","dislike","like"];
// function LikeDislike(a) {
//     like = 0;
//     dislike = 0;
//     for (i = 0; i < a.length; i++) {
//         if (a[i] == "like") {
//             like += 1;
//         }
//         if (a[i] == "dislike") {
//             dislike += 1;
//         }
//     };
//     if (like > dislike) {
//         t = "Like ko'p: " + (like-dislike) + "taga";
//         return t;
//     }
//     else if (dislike > like) {
//         f = "Dislike ko'p: " + (dislike-like) + "taga";
//         return f;
//     }
//     else {
//         teng = "Teng: " + like + " || " + dislike;
//         return teng;
//     }
// };
// console.log(LikeDislike(a));





// Tub sonni topish

// let a = prompt("Sonni kiriting: ")
// document.body.innerHTML = tub(a);
// function tub(a){
//     k = 0;
//     for(i = 0; i <= a; i++){
//         if(a % i == 0){
//             k = k + 1;
//         }
//     }
//     if(k == 2){
//         b = "Tub son";
//         return b;
//     }
//     else{
//         d = "Tub son emas"
//         return d;
//     }
// }
// console.log(tub(a));





// Massiv ichidagi so'zni topish

// function findWord(a,k){
//     b = a.split(" ");
//     c = "";
//     if(k < b.length){
//         for(i = 0; i < k; i++){
//             c = c + " " + b[i];
//         }
//         return c;
//     }
//     else{
//         return a;
//     }
// }
// console.log(findWord("Lorem ipsum dolor sit amet nodir", 4));




// Capitalize

// let a = prompt("Ismingizni kiriting: ")
// document.body.innerHTML = boshHarf(a);
// function boshHarf(a){
//     b = a.toString().toLowerCase().split(" ");
//     c = b[0];
//     d = b[1];
//     result = c[0].toUpperCase() + c.slice(1) + " " + d[0].toUpperCase() + d.slice(1);
//     return result;
// }
// console.log(boshHarf(a));




// Nuqtadan keyingi 2ta sonni olish

// let a = prompt("Sonni kiriting: ")
// document.body.innerHTML = son(a);
// function son(a){
//     b = a.toString().split(".");
//     d = b[1];
//     c = b[0] + (".") + (d[0] + d[1]);
//     if(d[2] > 5){
//         f = b[0] + (".") + (d[0] + (Number(d[1]) + Number(1)));
//         return f
//     }
//     else{
//         return c;
//     }
// }
// console.log(son(a));