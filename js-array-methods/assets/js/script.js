// 1.Istenilen sayda  gelen datalarin Ortalamasini veren Js function yazin.Call back istifade edeceksiz.

//call back ile
// const arr = [77,75,13,85,777];
// let sum = 0;
// function myforeach(arr, cb) {
//     for (let i = 0; i < arr.length; i++) {
//         cb(arr[i])
//     }
// }
// myforeach(arr, (element) => { sum += element; average = sum / arr.length })
// console.log(`Average ${average}`);

//forEach ile
// const arr = [77,75,13,85,777];
// let sum = 0;
// arr.forEach((number) => {
//   sum+=number
//   average=sum/arr.length
// });
// console.log(`Average ${average}`);

//adi funksiya ile
// const arr=[77,75,13,85,777]
// function array(arr) {
//     sum = 0
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i]
//         average = sum / arr.length
//     }
//     return average
// }
// console.log(array(arr));


// 2.Istenilen sayda gelen datalarin cut olanlarinin toplamini tapan Js function yazin.Call back istifade edeceksiz.

// call back ile
// const arr = [7, 5, 2, 4];
// function myforeach(arr,cb) {
//     sum = 0
//     for (let i = 0; i < arr.length; i++) {
//         cb(arr[i])
//     }
// }
// myforeach(arr,(number) => (number % 2 === 0 ? sum+=number : null));
// console.log(`Even Sum ${sum}`)

//forEach ile
// const arr = [7, 5, 2, 4];
// sum=0
// arr.forEach((number) => (number % 2 === 0 ? sum+=number : null));
// console.log(`Even Sum ${sum}`)

// 3.Istenilen sayda gelen datalarin tek olanlarinin toplamini tapan Js function yazin.Call back istifade edeceksiz.

// call back ile
// const arr = [7, 5, 2, 4];
// function myforeach(arr,cb) {
//     sum = 0
//     for (let i = 0; i < arr.length; i++) {
//         cb(arr[i])
//     }
// }
// myforeach(arr,(number) => (number % 2 === 1 ? sum+=number : null));
// console.log(`Odd Sum ${sum}`)

//forEach ile
// const arr = [7, 5, 2, 4];
// sum=0
// arr.forEach((number) => (number % 2 === 1 ? sum+=number : null));
// console.log(`Odd Sum ${sum}`)

// 4.Istenilen sayda gelen datalarin cut olanlarin toplamini tek olanlarinin toplamina olan hasilini tapan Js function yazin.Call back istifade edeceksiz. 

//call back ile
// const arr = [7, 5, 2, 4];
// sumTek = 0
// sumCut = 0
// let result = 0
// function myforeach(arr,cb) {
//     for (let i = 0; i < arr.length; i++) {
//        cb(arr[i])
//     }
// }
// myforeach(arr,(number) => {
//     if (number % 2 === 1) {
//         sumTek += number
//     } else if (number % 2 === 0) {
//         sumCut += number
//     }
//     result=sumCut*sumTek
// });
// console.log(result);

//forEach ile
// const arr = [7, 5, 2, 4];
// sumTek = 0
// sumCut = 0
// let result = 0
// arr.forEach((number) => {
//     if (number % 2 === 1) {
//         sumTek += number
//     } else if (number % 2 === 0) {
//         sumCut += number
//     }
//     result=sumCut*sumTek
// })
// console.log(result);

//adi funksiya ile
// const arr = [7, 5, 2, 4];
// function array(arr) {
//     sumTek = 0
//     sumCut = 0
//     let result = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 1) {
//             sumTek += arr[i]
//         } else if (arr[i] % 2 === 0) {
//             sumCut += arr[i]
//         }
//     }
//     result = sumCut * sumTek
//     return result
// }
// console.log(array(arr));


