let form=document.querySelector("button");
let signupData=JSON.parse(localStorage.getItem("masai"))
form.addEventListener("click", myFun ) 
function myFun() {

    let x = document.querySelector("#email").value
    let y=document.querySelector("#password").value
      let flag=false
    function login(data) {
        for (let i = 0; i <= data.length - 1; i++){
            if (data[i].email === x && data[i].pass === y) {
           flag=true
                break;
            } 
        }
        if (flag == true) {
            alert("Welcome ")
          window.location.href="index.html"
        } else {
            alert("please fill correct details")
        }
    }
    login(signupData)
}
