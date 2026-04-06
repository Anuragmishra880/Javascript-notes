// ** I had linked this file into 1.html file **//

//  Q 1)
// let pr = prompt('Enter a number')
// if (pr === null) {
//   console.log('cancelled')
// }
// else {
//   let n = Number(pr)
//   if (isNaN(n)) {
//     console.log('Invalid Input')
//   }
//   else {
//     if (n > 0) {

//       // **  factorial ** //

//       let factorial = 1;

//       for (i = 1; i <= n; i++) {
//         factorial = factorial * i
//       }
//       console.log(`Factorial of the number ${n} is equals to ${factorial}`)

//       // ** Sum ** //
//       let sum = 0;

//       for (i = 1; i <= n; i++) {
//         sum = sum + i
//       }
//       console.log(`Sum of the number 1 to ${n} is equals to ${sum}`)



//       // ** Factors ** //

//       // Basic approach
//       // for (i = 1; i <= n; i++) {
//       //   if (n % i === 0) {
//       //     console.log(`Factors of the ${n} is ${i}`)
//       //   }
//       // }

//       // Optimized Approach
//       for (i = 1; i <= Math.floor(n / 2); i++) {
//         if (n % i === 0) {
//           console.log(`Factors of the ${n} is ${i}`)
//         }
//       }
//       console.log(`Factors of the ${n} is ${n}`)



//     }

//     else {
//       console.log('should be +ve or greater than 0')
//     }
//   }
// }


// let pr = prompt('Enter a number')
// if (pr === null) {
//   console.log('cancelled')
// }
// else {
//   let n = Number(pr)
//   if (isNaN(n)) {
//     console.log('Invalid Input')
//   }
//   else {
//     if (n > 0) {
// ** Prime Number ** //
// prime = true
// for (i = 1; i <= Math.floor(n / 2); i++) {
//   if (n % i === 0) {
//     prime = false;
//     break
//   }
// }
// console.log(prime ? "Prime" : "Not Prime");



// Optimized Approach
//       function isPrime(n) {
//         if (n <= 1) return true
//         if (n == 2) return true
//         if (n % 2 === 0) return false
//         for (let i = 3; i < Math.floor(Math.sqrt(n)); i += 2) {
//           if (n % i === 0) return false
//         }
//         return true
//       }
//       console.log(isPrime(n))
//     }

//     else {
//       console.log('should be +ve or greater than 0')
//     }
//   }
// }

// pattern
// *
// * *
// * * *
// * * * *
// * * * * *

// let n = 5;
// for (i = 1; i <= n; i++) {
//   for (j = 1; j <= i; j++) {
//     process.stdout.write('* ')
//   }
//   console.log('')
// }




// * * * * *
// * * * *
// * * *
// * *
// *
//   let n = 5;
// for (i = 1; i <= n; i++) {
//   for (j = 1; j <= n - i + 1; j++) {
//     process.stdout.write('* ')
//   }
//   console.log('')
// }

//         * 
//       * *
//     * * *
//   * * * *
// * * * * *
// let n = 5;
// for (i = 1; i <= n; i++) {
//   for (j = 1; j <= n - i; j++) {
//     process.stdout.write('  ')
//   }
//   for (k = 1; k <= i; k++) {
//     process.stdout.write('* ')
//   }

//   console.log('')
// }



// It works only odd Number

//   *   *
//     *
//   *   *

// let n = 3;
// for (i = 1; i <= n; i++) {
//   for (j = 1; j <= n; j++) {
//     if (i == j || i + j == n + 1) {
//       process.stdout.write('* ')
//     }
//     else {
//       process.stdout.write('  ')

//     }
//   }
//   console.log('')
// }

//     *
//    * *
//   * * *
//  * * * *
// * * * * *

// let n = 5;
// for (i = 1; i <= n; i++) {
//   for (j = 1; j <= n - i; j++) {
//     process.stdout.write(' ')
//   }

//   for (k = 1; k <= i; k++) {
//     process.stdout.write('*  ')
//   }

//   console.log('')
// }

// *       *   
//   *   *
//     *
// let n = 3;
// for (i = 1; i <= n; i++) {
//   for (j = 1; j <= 2 * n; j++) {
//     if (i == j || i + j == 2 * n) {
//       process.stdout.write('* ')
//     }
//     else {
//       process.stdout.write('  ')

//     }
//   }
//   console.log('')
// }
