const submitButton = document.getElementById("submit")
const nev= document.getElementById("name")
const email = document.getElementById("email")

submitButton.addEventListener("click",() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if(nev.value == "" || email.value == ""){
        alert("Töltsd ki a mezőket!")
    } else if(!email.value.match(emailRegex)){
        alert("Érvénytelen email cím!")
    }
     else{
        alert("Hírlevél feliratkozásod mentve: " + nev.value + ", " + email.value)
    }
})