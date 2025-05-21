//Usa dollár
fetch("https://api.exchangerate-api.com/v4/latest/usd")
.then(x=>x.json())
.then(y=>megjelenitUSD(y))

function megjelenitUSD(y){
    console.log(y)
    document.getElementById("usd").innerHTML=y.rates.HUF+" Ft"
}

//Euró
fetch("https://api.exchangerate-api.com/v4/latest/eur")
.then(x=>x.json())
.then(y=>megjelenitEUR(y))

function megjelenitEUR(y){
    console.log(y)
    document.getElementById("euro").innerHTML=y.rates.HUF+" Ft"
}

//Angol font
fetch("https://api.exchangerate-api.com/v4/latest/gbp")
.then(x=>x.json())
.then(y=>megjelenitGBP(y))

function megjelenitGBP(y){
    console.log(y)
    document.getElementById("gbp").innerHTML=y.rates.HUF+" Ft"
}

//Román lei
fetch("https://api.exchangerate-api.com/v4/latest/ron")
.then(x=>x.json())
.then(y=>megjelenitRON(y))

function megjelenitRON(y){
    console.log(y)
    document.getElementById("ron").innerHTML=y.rates.HUF+" Ft"
}


//Kínai jüan
fetch("https://api.exchangerate-api.com/v4/latest/cny")
.then(x=>x.json())
.then(y=>megjelenitCNY(y))

function megjelenitCNY(y){
    console.log(y)
    document.getElementById("cny").innerHTML=y.rates.HUF+" Ft"
}