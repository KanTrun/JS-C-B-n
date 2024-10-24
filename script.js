// var button = document.querySelector("button");
//         button.onclick = function() {
//             alert("Hello World!");
//         }

// var a = 10;
// var b = 278;
// var c = a + b;

// console.log(c);

// Set tên biến
var hoVaTen123 = "Trương Minh Khang";

//Toán tử số học
// var a = 10;
// var b = 3;
// var fullName = "Khang Trương";

// var c = a + b;
// console.log(c);

// var d = a + fullName; // 10 + "Khang Trương" --> 10Khang Truong
// console.log(d);

// var e = b - a;
// console.log(e);

// var f = a * b;
// console.log(f);

// var g = a / b;
// console.log(g);

// var h = a % b;
// console.log(h);

// var i = a ** b;
// console.log(i);

// var m = ++a; //cộng trước rồi mới gán giá trị
// console.log(m);

// var m = a++; //gán giá trị trước rồi mới cộng cho a
// console.log(m);

//VÍ DỤ VỀ PHÉP ++ VÀ --
// var a = 20;
// var b = a++ - --a + ++a;
//     // 20 nên thằng a tiếp là 21 mà -- nên a thứ 2 là 20 ta có 20-20=0 tiếp + với ++a với a thứ 2 là 20 nên a thú 3 là 21
// console.log(b);

// var a = 20;
// var b = a++ - a-- + --a * 3;
// console.log(b);

// var a = 20;
// var b = --a - ++a + --a - a++ + a-- * 2;
//      // =19 - 20 + 19 - 19 + 20 * 2 = 39
// console.log(b);

// var a = 20;
// var b = --a - a++ + a++ - --a + a++ * 2;
//      // 19 - 19 + 20 - 20 + 20 * 2
// console.log(b);

// Toán tử gán

// var a = 10;
// var b = a;
// console.log(b);

// var a = 10;
// var b = 20;
// var c = 30;
// var d = 40;
// var e = 50;
// var f = 11;
// b += a // b = b + a = 20 + 10 = 30
// c -= a // c = c - a = 30 - 10 = 20
// d *= a // d = d * a = 40 * 10 = 400
// e /= a // e = e / a = 50 / 10 = 5
// f %= a // f = f % a = 11 % 10 = 1
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);

// Toán tử so sánh

// var a = 10;
// var b = 20;
// var c = a < b;
// console.log(c); // trả về true hay false tùy vào so sánh

// var a = 20;
// var b = 20;
// var _b = "20";

// var c = a == b;
// var d = a == _b;

// var e = a === b;
// var f = a === _b;

// var g = a != b;
// var h = a != _b;

// var i = a !== _b;

// console.log(c); //trả về true a = b
// console.log(d); //trả về true (mặc dù chuỗi _b nhưng nó không nghiêm ngặt)
// console.log(e); //trả về true cùng kiểu number
// console.log(f); //trả về fale vì không cùng kiểu dữ liệu (number khác chuỗi)
// console.log(g); //trả về false vì a = b
// console.log(h); //trả về false (mặc dù _b là chuỗi và nó khoogn nghiêm ngặt)
// console.log(i); //trả về true vì mặc dù a = b nhưng do khác kiểu dữ liệu
    
// Toán tử logic
// var a = 10;
// var b = 20;
// var c = 30;
// var d = 40;
// var e = a > b && c < d; // &&
// var f = a > b || c < d; // ||


// console.log(e); //trả về false vì a > b sai nên trả về false luôn
// console.log(f); //trả về true vì chỉ cần 1 trong 2 có true => true
// console.log(!e); //vì đang false ngược lại nó sẽ là true

// Kiểu dữ liệu nguyên thủy
// Kiểu Number
    // var a = 10; //số nguyên
    // var b = 10.5; //số thực
    // var c = Infinity; //dương vô cùng
    // var d = -Infinity; //âm vô cùng
    // var e = 10 / "a"; //NaN
    // console.log(e);

// Kiểu String
    // var msg1 = 'Đây là String dấu nháy đơn';
    // var msg2 = "Đây là String dấu nháy kép";
    // var msg3 = `Đây là String dấu Backtick`;
    // console.log(msg1);

// Kiểu Boolean
    // var isDarkMode = true; // chế độ tối
    // var isDarkMode = false; // chế độ sáng

// Kiểu Undefined
    // var a;
    // console.log(a);

// Kiểu Null
    // var a = null;
    // console.log(a); 

// Kiểu dữ liệu phức tạp
// Kiểu Function
    // var a = 10 + 20 + 30;

    // function tinhTong(a, b ,c) {
    //     return a + b + c;
    // }

    // var x = tinhTong(10, 20, 30);
    // console.log(x);

    // S = 3.14 * R; 
    var r1 = 20;
    // // var s1 = 3.14 * r1;

    // var r2 = 30;
    // // var s2 = 3.14 * r2;

    // function tinhDTHT(r) {
    //     return 3.14 * r;
    // }

    // var s1 = tinhDTHT(r1);
    // console.log(s1);

    // var s2 = tinhDTHT(r2);
    // console.log(s2);

// Kiểu Object
// Object
    // var infoUser = {
    //     fullName: "Trương Minh Khang",
    //     age: 18,
    //     phone: "123"
    // };
    // console.log(infoUser);
    // console.log(infoUser.fullName);
    // console.log(infoUser.age);
    // console.log(infoUser.phone);

// Array
    var listUser = [
        "Lê Văn A",
        "Nguyễn Thị B",
        "Đỗ Văn C",
    ];
    console.log(listUser);
    console.log(listUser[0]);

    
