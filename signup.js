let form=document.querySelector("button");
let Bag=JSON.parse(localStorage.getItem("masai"))||[]
form.addEventListener("click",function(event){
    
let obj={
    name:name1.value,
    email:email.value,
    mobile:mobile.value,
    pass:password.value
    }
    Bag.push(obj)
    localStorage.setItem("masai", JSON.stringify(Bag))
    alert("Register successfull")
})
