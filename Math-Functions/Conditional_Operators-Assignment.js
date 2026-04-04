//  Ternary Operator
let num = 0
console.log(num > 0 ? 'Positive' : 'Negative')
// Nested Ternary Operator
console.log(num > 0 ? 'Positive' : num < 0 ? 'Negative' : 'Zero')

// New Thing about Switch Case
switch (true) {
  case 12 > 8:
    console.log('hii')
    break
  case 12 < 8:
    console.log('hello')
    break
  default: console.log('this is default value')

}


// Q 1 )

let Amount = 0;
// let Units = Number(prompt("Enter your electricity Units"))
let Units = 500
if (Units > 400) {
  Amount = Math.floor((Units - 400) * 13);
}
if (Units > 200 && Units <= 400) {
  Amount += Math.floor((Units - 200) * 8)
}
if (Units > 100 && Units <= 200) {
  Amount += Math.floor((Units - 100) * 6)
}
Amount += Units * 4;
console.log(Amount)

// Q 2 ) find Numbers of Notes 

let currency_Value = 4823;
let notes = 0
if (currency_Value >= 500) {
  note500 = Math.floor(currency_Value / 500)
  console.log(note500)
  currency_Value = currency_Value % 500
}
if (currency_Value >= 200) {
  note200 = Math.floor(currency_Value / 200)
  console.log(note200)
  currency_Value = currency_Value % 200
}
if (currency_Value >= 100) {
  note100 = Math.floor(currency_Value / 100)
  console.log(note100)
  currency_Value = currency_Value % 100
}
if (currency_Value >= 50) {
  note50 = Math.floor(currency_Value / 50)
  console.log(note50)
  currency_Value = currency_Value % 50
}
if (currency_Value >= 20) {
  note20 = Math.floor(currency_Value / 20)
  console.log(note20)
  currency_Value = currency_Value % 20
} if (currency_Value >= 10) {
  note10 = Math.floor(currency_Value / 10)
  console.log(note10)
  currency_Value = currency_Value % 10
}

if (currency_Value >= 5) {
  note5 = Math.floor(currency_Value / 5)
  console.log(note5)
  currency_Value = currency_Value % 5
}
if (currency_Value >= 2) {
  note2 = Math.floor(currency_Value / 2)
  console.log(note2)
  currency_Value = currency_Value % 2
}
if (currency_Value === 1) {
  console.log(currency_Value)
}


