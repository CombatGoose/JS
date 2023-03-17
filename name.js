let username = prompt("Вкажіть ваше ім'я")
let i = 0

    if(username.length < 1) {
        alert("Будь ласка, вкажіть ваше ім'я!")
        prompt("Вкажіть ваше ім'я")
    }    

let year = prompt("Вкажіть рік вашого народження")
let newYear = 2023

    if(year.length != 4) {
        alert("Будь ласка, вкажіть ваш рік народження!")
        prompt("Вкажіть рік вашого народження")
    }   
    
let answer = alert(`Вас звати ${username} і вам ${newYear - year} років!`)