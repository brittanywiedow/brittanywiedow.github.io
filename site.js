// Homepage JavaScript file
console.log('site.js loaded');

//WEEK THREE/ASSIGNMENT THREE

// get the current hour
const hours = new Date().getHours()

const isMorning = hours >= 4 && hours < 12 // is it morning?

const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?

const isEvening = hours >= 17 || hours < 4 // is it evening?

// grabs div by welcome ID
const welcome = document.querySelector('#welcome')

// dynamic welcomes
if (isMorning){
    welcome.innerHTML = "<h3>Good Morning!</h3>"
}

if (isAfternoon){
    welcome.innerHTML = "<h3>Good Afternoon!</h3>"
}

if (isEvening){
    welcome.innerHTML = "<h3>Good Evening!</h3>"
}

//WEEK FOUR/SECRET MESSAGE
// must use key of "It's a secret to everybody." and the value is the message
localStorage.setItem("It's a secret to everybody.", "It's dangerous to go alone! Take this.")