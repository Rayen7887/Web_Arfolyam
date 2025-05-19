//USA dollár
fetch("https://api.exchangerate-api.com/v4/latest/usd")
.then(x => x.json())
.then(y => megjelenitUSD(y))


function megjelenitUSD(y){
console.log(y)
document.getElementById("usd").innerHTML=y.rates.HUF + "Ft"
}

//EURÓ
fetch("https://api.exchangerate-api.com/v4/latest/eur")
.then(x => x.json())
.then(y => megjelenitEUR(y))


function megjelenitEUR(y){
console.log(y)
document.getElementById("euro").innerHTML=y.rates.HUF + "Ft"
}


//angol font
fetch("https://api.exchangerate-api.com/v4/latest/gbp")
.then(x => x.json())
.then(y => megjelenitGBP(y))


function megjelenitGBP(y){
console.log(y)
document.getElementById("gbp").innerHTML=y.rates.HUF+"Ft"
}


