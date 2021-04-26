//1: Tạo thư mục quản lý source code .git (mỗi lần add new folde thì git init (chỉ khai báo một lần))
// git init
//2: Kiểm tra sự thay đổi của folder
// git status
//3: Lưu trữ sự thay đổi
// git add "tên file"
// git add . <lưu tất cả sự thay đổi>
//4: Commit vào repository
// git commit -m "lưu file buổi 1"
//git config --global user.name "HoVanTrong"
//git config --global user.email "vantrong169.ute@gmail.com"
// Các bước hình thành một new folder
// 1. git init
// 2. tạo file mới
// 3. git add . (lưu file mới)
// 4. git commit -m "message" (đóng gói lưu trữ cho phiên làm việc)

//ctrl + ~ :mở terminal nhanh
//bai1 - khai bao bien (dynamic type)
// var a = 5
// let b = 10 (hay dung bien thay doi)
// const c =15 (hay dung bien khong thay doi)
// c = 10
// console.log(c)
// git add .
// git commit -m "khaibaobien"
// git push (đẩy lên github)


//bai2 - kieu du lieu
// let a
// console.log(typeof(typeof(a)))

//bai3 - object
//mutable - inmutable
// const trong={
//     name: "ho van trong",
//     age: 25,
//     diachi: "xom 2, thon 7 Nam"
// }
// console.log(trong.name)
// console.log(trong['name'])

//bai4 - array
//const arrNames = ["teo"]

//bai5 - toan tu
// let a = 5
// let b = 10
// console.log(b)

// bai6  - function
// function showName(name){
//     console.log(name)
// }
// function tinhTong(a,b){
//     return a + b
// }
// console.log(showName("trong"))
// let a
// const ketQua = tinhTong(5,a)
// console.log(ketQua)
//
//bai7 - object method
// const trong={
//     name: "ho van trong",
//     age : 25,
//     showInfo : function (){
//         console.log("Ten : " + this.name + " , Tuoi :" + this.age)
//     }
// }
// trong.showInfo()
//
//bai8 - phepsosanh
// let a =6
// let b =6
// // 6 gia tri bang false: false, null, '', NaN, undefined, 0
// if(a > b){
//     console.log("1")
// }
// else if(a < b){
//     console.log("-1")
// }
// else{
//     console.log('0')
// }
// toantu 3 ngoi
// bieuthuc ? true : false
// let a =5
// let b=10
// a>b ? console.log("a lon hon b") : console.log("a be hon b")
//bai9 - Vong lap For
// const arrNames = ["ho","van","trong"]
// for (let i=0;i< arrNames.length;i++){
//     console.log(arrNames[i])
// }
// viet 1 phuong thuc kiem tra so nguyen to
function kiemtra(x){
    let dem=0
    if(x < 2){
        console.log("khong phai so nguyen to")
        return
    }
    for(let i=2;i <= x;i++){
        if(x % i == 0){
            dem++
        }
    }
    if (dem==1){
        console.log("la so nguyen to")
    }
    else{
        console.log("khong phai so nguyen to")
    }
}
kiemtra(3)