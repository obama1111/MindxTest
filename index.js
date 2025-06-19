const pressbtn = document.getElementById("start_button")
flag = true
pressbtn.onclick = function start_clicked(){
    console.log("clicked");
    if (flag == true) {
        pressbtn.style.backgroundColor = "Red"
        pressbtn.innerHTML = "Kết thúc"
        flag = false
        count = 0
        time_start = setInterval(() => {
            count++
            let m = String(Math.floor(count/60)).padStart(2,"0");
            let s = String(count%60).padStart(2,"0")
            document.querySelector(".clock").innerHTML= `${m}:${s}`;
        }, 1000);   
        
    } else{
        pressbtn.style.backgroundColor = "green"
        pressbtn.innerHTML = "Bắt đầu"
        flag = true
        clearInterval(time_start)
        document.querySelector(".clock").innerHTML= "00:00";
        alert("game reset")

    }
    
}

// const test = document.getElementById("btn_test")
// btn_test.addEventListener("mouseenter", function(){
//     btn_test.classList.add("testing")
//     console.log("entered");
    
// })
// 

// count = 0
// setInterval(() => {
//     count++
//     let m = String(Math.floor(count/60)).padStart(2,"0");
//     let s = String(count%60).padStart(2,"0")
//     document.querySelector(".clock").innerHTML= `${m}:${s}`;
    
// }, 1000);   