// console.log("Bài Tập 1: let, var, and const");
// console.log("Q1: var và const Trong JS là gì?");
// console.log("Trong JavaScript var, const là từ khóa để khai báo một biến ");
// console.log("////////////////////////////////////////////////////////////////");
// console.log("Q2: Sự Khác nhau giữa let và var?");
// console.log("let và var đều có tác dụng là để khai báo 1 biến, chỉ khác nhau ở phạm vi hoạt động.") 
// Ví dụ Q2:
// ========================================
// {
//     let x = "Hello Mind X";
// } 
// console.log(x);
// ========================================
// {
//     var y = "Hello Mind X";
// }
// console.log(y);
// console.log("////////////////////////////////////////////////////////////////");
// console.log("Q3: Sự Khác nhau giữa let và const?");
// console.log("let và var đều có tác dụng là để khai báo 1 biến, chỉ khác nhau ở điểm, khi sử dụng const để khai báo 1 biến thì giá trị của biến sẽ không thể thay đổi");
//Ví dụ Q3:
 // ========================================
//  let x = 10;
//  x = 5;
//  console.log(x);
  // ========================================
//   const y = 3.14;
//   y = 3.15;
//   console.log(y);
// console.log("Q4: Trường hợp nào sử dụng vả, let , const");
// console.log("1. Không dùng var trong mọi trường hợp mà thay bằng đùng let");
// console.log("2. Sử dụng const để khai báo biến khi cần định nghĩa 1 hằng số");


// console.log("Bài Tập 2: Boolean");
// console.log("Q1: Boolean là gì?");
// console.log("Boolean là kiểu dữ liệu giúp kiểm tra giá trị đúng hay sai.");
// console.log("Q2: Boolean trả về kết quả là gì?");
// console.log("Boolean trả về hai giá trị là TRUE và FALSE")

//Ví Dụ Q2:
// let x = 8;
// let y = 9;
// if(x>y){
//     console.log("true");
// }else{
//     console.log("false");
// }

// console.log("Bài Tập 3:");
// console.log("a. In ra 7 số, bắt đầu từ 0:");
// for(let i = 0; i <= 7; i++){
//     console.log(i);
// }

// console.log("b. In ra n số, bắt đầu từ 0, trong đó n được user nhập:");
// let x = prompt("Enter your number:");
// for(let i = 0; i < x; i++){
//     console.log(i);
// }

// console.log("c. In ra các số từ 3 => n -1, trong đó n được user nhập:");
// let x = prompt("Enter your number:");
// for(let i = 3; i < x; i++){
//     console.log(i);
// }

// console.log("d. In ra các số từ c => n-1; trong đó n, c được nhập từ bàn phím");
// let c = prompt("Enter first number:");
// let n = prompt("Enter second number:");
// for(let i = c; i < n; i++){
//     console.log(i);
// }
/////////////////////////////////////////////////////////////////////////// Lỗi //////////////////////////////////////////////
// console.log("e. In ra các số từ c => n-1 (Stepping = 3), trong đó n, c được nhập từ bàn phím.");
// let c = prompt("Enter c");
// let n = prompt("Enter n");
// for(let i = c; i < n; i+=3){
//     console.log(i);
// }
// console.log("f. In ra các số từ c => n-1 (Stepping = k), trong đó n, c, k được nhập từ user");
// let n = prompt("Enter second number:");
// let c = prompt("Enter first number: ");
// let k = prompt("Enter stepping:")
// for(let i = c; i < n; i+=k){
//   console.log(i);
// }
/////////////////////////////////////////////////////////////////////////// Lỗi ///////////////////////////////////////////////////


// console.log("Bài Tập 4: Tính tích từ 1 => n");
// let n = prompt("Enter n:");
// let a = 1;
// for(let i = 1; i <= n; i++){
//   a = a * i;
// }
// alert("The factorial of " + n + " is " + a);

// console.log("Bài Tập 5: Write a program asking users their age, and then decide if they are old enough to view a 14+ content")
// let ageUsers = prompt("Enter your age: ");
// if(ageUsers >= 14){
//   alert("Enjoy!!!!!!");
// }else{
//   alert("You are not old enough to view this content!");
// }

// console.log("Bài Tập 6: Write a program asking user to enter a number, x, then check if x is in the lower half or higher half of 0 - 9 range");
// let x = prompt("Enter a number:");
// if(x > 9/2){
//   alert("Higher half of 9");
// }else if(x < 9/2){
//   alert("Lower half of 9");
// }else{
//     alert ("Your number equals half of 9")
// }

// console.log("Bài Tập 7: Write a program asking user to enter two numbers, x and n, then check if x is in lower half or higher half of n");
// let n = prompt("Enter n = ");
// let x = prompt("Enter x = ");
// if(x  < n/2){
//   alert(x + " is in lower half of " + n)
// }else if(x > n/2){
//   alert(x + " is in higher half of " + n)
// }else{
//   alert(x + " equals half of " + n)
// }

// console.log("Bài Tập 8: Write a script to check if a number is even (divisible by 2) or odd number");
// let x = prompt("Enter your number:");
// if(x%2 == 0){
//   alert( x + " is an even number");
// }else{
//   alert( x + " is an odd number");
// }

console.log("Bài Tập 9:") //Để Error

// console.log("Bài Tập 10: Write a script to calculate the BMI (Body Mass Index) of a person");
// let massUser = prompt("Enter your weigh in kg:");
// let heightUser = prompt("Enter your height in cm:");
// heightUser = heightUser/100;
// let bmiUser = massUser / (heightUser*heightUser);
// if(bmiUser < 16){
//   alert("Your BMI = " + bmiUser);
//   alert("You are Severely underweight");
// }else if( 16 <= bmiUser < 18.5){
//   alert("Your BMI = " + bmiUser);
//   alert("You are Underweight");
// }else if(18.5 <= bmiUser <25){
//   alert("Your BMI = " + bmiUser);
//   alert("You are Normal");
// }else if(25<= bmiUser < 30){
//   alert("Your BMI = " + bmiUser);
//   alert("You are Overweight");
// }else if(bmiUser >= 30){
//   alert("Your BMI = " + bmiUser);
//   alert("You are Obese");
// }
