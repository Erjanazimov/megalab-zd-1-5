// 2)	Ваша задача состоит в том, чтобы создать функцию, которая может принимать любое
// неотрицательное целое число в качестве аргумента и возвращать
// его с цифрами в порядке убывания. По сути, переставьте цифры, чтобы получить
// максимально возможное число.

// function sort(...arr){
//     const descending = arr.sort((a, b) => a - b);
//     const reverse = descending.reverse();
//     return reverse.join(",")
// }
//
// const result = sort(1,2,5,7,8,8,9,9,1,99);
//
// console.log(result)

// 3) Напишите функцию, которая принимает строку из одного или нескольких слов и
// возвращает ту же строку, но с перевернутыми всеми словами из пяти или более букв.
// Передаваемые строки будут состоять только из букв и пробелов.
// Пробелы будут включены только в том случае, если присутствует более одного слова.

// function reverse(str){
//     const reversStr = [];
//     str.split(" ").forEach(item => {
//         if(item.length >= 5){
//             reversStr.push(item.split("").reverse().join(""))
//         } else {
//             reversStr.push(item)
//         }
//     })
//
//     return reversStr.join(" ")
// }
//
// const str1 = reverse("This is another test");
// const str2 = reverse("Hey fellow warriors hello erja");
//
// console.log(str1)