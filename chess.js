var valu = document.getElementById("input1")
valu.value = 50;
var time = valu.value;
var valu2 = document.getElementById("input2")
valu2.value = 50;
var time2 = valu.value;
var startbtn = document.getElementById("start-button")
var pausebtn = document.getElementById("stop-button")
var resetbtn = document.getElementById("reset-button")
var swapbtn = document.getElementById("swap-button")
console.log(startbtn, pausebtn, resetbtn)

var check = true;
var handlestart = function () {
    freeze = setInterval(countdown1, 1000)
    check=false;
    clearInterval(freeze2)
}
var countdown1 = function () {
    if (time != 0) {
        time = time - 1;
        valu.innerHTML = time;
        valu.value = time;

    }
    else {
        time = 50;
        clearInterval(freeze)
    }

}


var handlepause = function () {
    clearInterval(freeze);
    clearInterval(freeze2);
}

var handlereset = function () {
    time = 50;
    time2 = 50;
    clearInterval(freeze)
    clearInterval(freeze2)
    valu.innerHTML = time;
    valu.value = time;
    valu2.innerHTML = time2;
    valu2.value = time2;
}

var handleswap = function () {
    clearInterval(freeze)
    if (check == true) {
        clearInterval(freeze2)
        freeze = setInterval(countdown1, 1000)
        check = false;
        
    }
    else {
      
       freeze2 = setInterval(countdown2, 1000)
        check = true;
    }


}
var countdown2 = function () {
    if (time2 != 0) {
        time2 = time2 - 1;
        valu2.innerHTML = time2;
        valu2.value = time2;
        check == true;

    }
    else {
        time2 = 50;
        clearInterval(freeze2)
    }

}





startbtn.addEventListener('click', handlestart)
pausebtn.addEventListener('click', handlepause)
resetbtn.addEventListener('click', handlereset)
swapbtn.addEventListener('click', handleswap)



