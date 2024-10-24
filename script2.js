// Một số hàm Built-in

// alert("Xin chào");
// ------------------
// var result = confirm("Bạn đã trên 18 tuổi?");
// console.log(result); //trả về true hay false tùy bạn
// ---------------------
// var result = prompt("Nhập n" ); // hay prompt("Nhập n", 12); tùy bạn 
// console.log(result); //in ra màu trắng
// ------------------------
// console.warn(result); //in ra màu vàng cảnh báo
// console.error(result); ///in ra màu đỏ lỗi
// -------------------------
// ĐƠN VỊ THỜI GIAN - ms ( 1000 ms = 1s )
// setTimeout(function () {
//     console.log("A");
// }, 5000); // sau khoảng time nào đó nó sẽ thực hiện hàm
// --------------------------
// setInterval(function () {
//     console.log("B");
// }, 5000); // cứ sau 5s là in ra 1 lần và cứ sau 5s in ra tiếp
// ---------------------------
// var b = setInterval(function () {
// console.log("B");
// }, 5000);

// setTimeout(function() {
//     clearInterval(b);
// }, 10000); //Hàm này xóa lệnh Interval sau 10s của biến b
// --------------------------
// Typeof

// var a = 10;
// var b = "KAN";
// var c;
// var d = null;
// var e = true;

// console.log(typeof a); //number
// console.log(typeof b); //String
// console.log(typeof ( a + b )); //String //cú pháp nối chuỗi
// console.log(typeof c); //Undefined
// console.log(typeof d); //Object 
// console.log(typeof e); //Boolean
// console.log(typeof a == "number"); //true //vì a trả về number = với "number" nên true
// --------------------------------

// Làm việc với String
// Length
// var fullName = "Trương Minh Khang";
// console.log(fullName.length);

// var fullSDT = "0909090911";
// console.log(fullSDT.length);
// --------------------------------

// indexOf ( Tìm vị trí đầu tiên trong chuỗi )
// NÓ BẮT ĐẦU TỪ SỐ 0. không có trả về -1
// var myString = 'Toi ten la Kan. Toi 20 tuoi!';
// console.log(myString.indexOf("Toi")); //trả về 0
// console.log(myString.indexOf("Thao")); //trả về -1
// console.log(myString.indexOf("Toi", 1)); //trả về 16
// console.log(myString.indexOf("toi")); //trả về -1
// ---------------------------------

// lastIndexOf
// Như indexOf nhưng tìm vị trí cuối cùng trong chuỗi, chạy từ vị trị đó rồi tìm ngược lên )
// NÓ BẮT ĐẦU TỪ SỐ 0, không có trả về -1
// var myString = 'Xin chao. Toi la Kan. Toi 20 tuoi';
// console.log(myString.lastIndexOf("Toi", 23)); //trả về 22
// console.log(myString.lastIndexOf("Toi", 21)); //trả về 10
// console.log(myString.lastIndexOf("Toi", 10)); //trả về 10
// console.log(myString.lastIndexOf("Toi", 9)); //trả về -1
// -----------------------------------

// slice()
// Cắt một chuỗi và trả 1 chuỗi mới và chuỗi ban đầu ko bị gì
// var myString = 'Xin chao. Toi ten Kan. Toi 20 tuoi.';
// console.log(myString.slice(10 ,21)); //trả về Toi ten Kan
// console.log(myString.slice(0)); //trả nguyên chuỗi
// console.log(myString.slice(0, 1)); //trả về kí tự đầu X
// console.log(myString.slice(-1)); //trả về kí tự cuối .
// console.log(myString);
// -----------------------------------------

// replace()
// Thay thế một chuỗi thành một chuỗi mới
// Nhưng chỉ thay thế chuỗi đầu tiên mà nó tìm thấy
// var myString = 'Xin chao. Toi ten Kan. Toi 20 tuoi';
// console.log(myString.replace("Toi", "Minh")); //Thay thế chữ Toi thành Minh đầu tiên
// console.log(myString.replace(/Toi/g, "Minh")); //Cú pháp Regex là gì? 
// ----------------------------

// toUpperCase() và toLowerCase()
// toUpperCase viết HOA TẤT CẢ cả chuỗi
// toLowerCase viết thường tất cả chuỗi
// var myString = 'Toi ten Kan';
// console.log(myString.toUpperCase());
// console.log(myString.toLowerCase());
// --------------------------------

// trim()
//Dùng để loại bỏ khoảng trắng đầu tiên và cuối ở chuỗi
// var myString = ' Xin chao! Kan! ';
// console.log(myString.trim());
// ------------------------------------

// charAt()
// Lấy kí tự thông qua index
// NÓ BẮT ĐẦU TỪ SỐ 0
// var myString = 'Truong Minh Khang';
// console.log(myString.charAt()); //lấy vị trí đầu
// console.log(myString.charAt(0)); //lấy vị trí đầu
// console.log(myString.charAt(1)); //lấy vị trí thứ 2
// console.log(myString.charAt(myString.length - 1)); //lấy vị trí cuối cùng lấy độ dài chuỗi - 1 ra vị trí cuối
// --------------------------------

// split()
// Chuyển chuỗi thành một Array
// Nhưng cần tìm ra điểm chung của chuỗi đó
// var myString = 'HTML5, CSS3, Javascript';
// console.log(myString.split()); //Tất cả là một phần tử
// console.log(myString.split("")); //Mỗi kí tự là một phần tử
// console.log(myString.split("; ")); //Mỗi từ là một phần tử sau dấu phẩy và cách
// console.log(myString.split(", ", 2)); //Mỗi từ là một phần tử sau dấu phẩy và dấu cách nhưng tối đa 2 phần tử

// -------------------------------
// LÀM VIỆC VỚI NUMBER
// isNaN
// Kiểm tra một biến có phải NaN hay không? ( Not a Number)
// var a = 10;
// var b = "Test";
// var result = a / b;
// // console.log(result);
// console.log(typeof result);
// if(typeof result == "number") {
//     console.log("Đây là số " + result);
// }
// if(isNaN(result)) {
//     console.log("Số này bị lỗi");
// } else {
//     console.log("Đây là số " + result);
// }
// ---------------------------------------

// toString()
// Chuyển kiểu số thành kiểu string
// var a = 10;
// var b = a.toString();
// var c = (10).toString();
// console.log(a);
// console.log(typeof a);
// console.log(b);
// console.log(typeof b);
// console.log(c);
// console.log(typeof c);
// ----------------------------------------

// toFixed()
// Làm tròn số thập phân ( từ 5 trở lên thì làm tròn lên và ngược lại)
// var a = 14.5462;
// console.log(a.toFixed()); // 15
// console.log(a.toFixed(0)); // 15
// console.log(a.toFixed(1)); // 14.5
// console.log(a.toFixed(2)); //14.55
// console.log(a.toFixed(3)); // 14.546
// -------------------------------------------

// LÀM VIỆC VỚI ARRAY
// toString()
// Chuyển array thành string, tự động thêm dấu phẩy
// var list = ["HTML5", "CSS3", "Javascript"];
// console.log(list.toString());

// ----------------------------------

// join()
// Chuyển array thành string và có dấu bất kỳ giữa các phần tử
// var list = ["HTML5", "CSS3", "Javascript"];
// console.log(list.join());
// console.log(list.join(",")); // giống cái trên
// console.log(list.join("")); //dính vào nhau
// console.log(list.join(", ")); //cách nhau bởi dấu phẩy và cách
// console.log(list.join(" - ")); //cách nhau bởi dấu cách và - và cách
// ---------------------------------------

// pop()
// Dùng để xóa phần tử cuối mảng
// Trả về phần tủ cuối mảng
// var list = ["HTML5", "CSS3", "Javascript"];
// console.log(list.pop()); // trả về Javascript
// console.log(list); // chỉ còn 2 phần tử đầu
// --------------------------------------

// push()
// Dùng để thêm phần tử vào cuối mảng
// Nó sẽ trả về độ dài của mảng
// var list = ["HTML5", "CSS3", "Javascript"];
// console.log(list.push("Bootstrap 4", "ReactJS")); //trả về 5
// console.log(list);
// --------------------------------

// shift()
// Dùng để xóa đi phần tử đầu mảng
// Nó sẽ trả về phần tử đầu mảng
// var list = ["HTML5", "CSS3", "Javascript"];
// console.log(list.shift()); // trả về "HTML5"
// console.log(list);
// ------------------------------------

// unshift()
// Dùng để thêm phần tử vào đầu mảng
// Nó sẽ trả về độ dài mới của mảng
// var list = ["HTML5", "CSS3", "Javascript"];
// console.log(list.unshift("ReactJS")); // trả về 4
// console.log(list);
// ------------------------------------

// splice()
// Xóa hoặc chèn phần tử mới vào mảng
// Cú pháp: array.splice(index(vị trí cần chèn/xóa), howmany(số phần tử cần xóa), item1,...,itemX(phần tử cần thêm))
// Trả về mảng bị xóa

// VÍ DỤ CHÈN PHẦN TỬ MỚI VÀO MẢNG
// var list = ["HTML5", "CSS3", "Javascript"];
// console.log(list.splice(2, 0, "Bootstrap 4", "ReactJS")); //trả về mảng [] vì nó không có xóa phần tử nào
// console.log(list);

// VÍ DỤ XÓA PHẦN TỬ TRONG MẢNG
// var list = ["HTML5", "CSS3", "Javascript"];
// console.log(list.splice(1 ,1)); // trả về ["CSS3"]
// console.log(list); // chỉ còn hai phần tử HTML5 và Javascript

// VÍ DỤ XÓA PHẦN TỬ VÀ CHÈN PHẦN TỬ MỚI VÀO MẢNG
// var list = ["HTML5", "CSS3", "Javascript"];
// console.log(list.splice(1, 2, "Bootstrap 4", "ReactJS")); //chọn ngay vị trí 1 và xóa 2 phần tử
// console.log(list); // chỉ còn HTML5, Bootstrap 4 và ReactJS
// ---------------------------------------

// concat()
// Dùng để nối hai mảng lại với nhau
// Không làm ảnh hưởng đến mảng ban đầu
// var list = ["1", "2", "3"];
// var list2 = ["4", "5"];
// var list3 = list.concat(list2);
// console.log(list3); // trả về mảng 1, 2, 3, 4, 5
// console.log(list); //vẫn giữ nguyên mảng
// ----------------------------------

// slice()
// Dùng để cắt các phần tử 
// Không làm ảnh hưởng đến mảng ban đầu
// Cú pháp: array.slice(start(vị trí cần lấy), end(vị trí kết thúc không cần lấy từ vị trí này))
// Nếu có âm thì lấy từ đuôi là -1 trở về -2, -3,...
var list = ["0", "1", "2", "3", "4"];
console.log(list.slice(1)); // ra 1,2,3,4
console.log(list.slice(1, 4)); // ra 1,2,3
console.log(list.slice(-2, -1)); // ra 3









