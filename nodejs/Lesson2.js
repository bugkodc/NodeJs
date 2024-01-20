// Lab 1 (switch case)
function lab1() {
    var x = document.getElementById("lab1-input").value;
    x = parseInt(x);
    var result = "";
    switch (x){
        case 2 :
            result ="Thứ hai";
            break;
        case 3 :
            result ="Thứ ba";
            break;
        case 4 :
            result ="Thứ tư";
            break;
        case 5 :
            result ="Thứ năm";
            break;
        case 6 :
            result ="Thứ sáu";
            break;
        case 7 :
            result ="Thứ bảy";
            break;
        default :
            result ="Chủ nhật";
            break;
    }
    document.getElementById("lab1-result").innerHTML = result;
}
// Lab 2 (switch case, array)
function lab2() {
    var y = ["Thứ 2" ,"Thứ 3" ,"Thứ 4" ,"Thứ 5" ,"Thứ 6","Thứ 7" ,"Chủ nhật"]
    var x = document.getElementById("lab2-input").value;
    x = parseInt(x);
    var result = "";
    switch (x){
        case 2 :
            result =y[x-2];
            break;
        case 3 :
            result =y[x-2];
            break;
        case 4 :
            result =y[x-2];
            break;
        case 5 :
            result =y[x-2];
            break;
        case 6 :
            result =y[x-2];
            break;
        case 7 :
            result =y[x-2];
            break;
        default :
            dresult ="Chủ nhật";
            break;
    }
    document.getElementById("lab2-result").innerHTML = result;
}
// Lab 3 (số nguyên tố)
function isSNT(x) {
    var count = 0;
    for(var i = 1 ; i*i <= x ; i++){
        if(x%i == 0) count++;
    }
    return count != 1 ? "x không là số nuyên tố" : "x là số nuyên tố";
}
function lab3() {
    var x = document.getElementById("lab3-input").value;
    document.getElementById("lab3-result").innerHTML = isSNT(x);
}
// Lab 4 (matrix)
function lab4() {
    const matrix = [[1,1,0],[1,0,1],[0,1,1]];
    var result = ""; 
    for (var i = 0; i < matrix.length; i++) {
      for (var j = 0; j < matrix[i].length; j++) {
        result += matrix[i][j] + " ";
      }
      result += "<br>";
    }
    document.getElementById("lab4-result").innerHTML = result;
}
// Lab 5 (hàm check regex)
function isRegex(email) {
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    return regexEmail ? "Email đúng" : "Email sai";
}
function isPass(pass) {
    var checkpass = /^[a-zA-Z0-9!@#$%^&*]{8,16}/.test(pass);
    return checkpass ? "Mật Khẩu đúng" : "Mật Khẩu sai";
}
function lab5() {
    var email = document.getElementById("email-input").value;
    document.getElementById("lab5-input-email").innerHTML = email;
    document.getElementById("lab5-result-email").innerHTML = isRegex(email);
    var pass = document.getElementById("password-input").value;
    document.getElementById("lab5-input-pass").innerHTML = pass;
    document.getElementById("lab5-result-pass").innerHTML = isPass(pass);
}