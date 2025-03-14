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

//WEEK SIX/CAROUSEL
const urls = [
    'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
].map(url => { (new Image()).src = url; return url })

const images = document.querySelectorAll('#carousel img')

let currentImage = 0
const showImages = () => {
    const offset = currentImage % urls.length
    images.forEach((image, index) => {
        const imageIndex = (index + offset + urls.length) % urls.length
        image.src = urls[imageIndex]
    })
}

showImages()

//add event listener to change picture to the one before it (decrement--) with anonymous arrow function
const prevBtn = document.querySelector('#prev')
prevBtn.addEventListener('click', () => {
    showImages(currentImage--)
})

//add event listener to change picture to the one before it (increment++) with anonymous arrow function
const nextBtn = document.querySelector('#next')
nextBtn.addEventListener('click', () => {
    showImages(currentImage++)
})

//function for image change 
const cycleImage = () => {
    showImages(currentImage++)
}
//set up interval every 5 seconds
setInterval(cycleImage, 5000)

//reset to the first three images on refresh?
const resetCarousel = () => {
    showImages(currentImage)
}



//WEEK EIGHT/POKEMON API

// Create the getRandomPokemon function using async/await & have this function return the pokemon object
const getRandomPokemon = async () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/' + Math.floor(Math.random() * 300)
    const response = await fetch(url) 
    const pokemon = await response.json()
    return pokemon
  }


  // Create the renderPokemon function that takes a pokemon object as parameter and renders the pokemon image to the page, append to DOM

  const renderPokemon = (pokemon) => {
    const randomPokemon = document.getElementById('randomPokemon') 
    const pokemonName = document.getElementById('pokemonName')
    console.log(pokemon.name)
    const img = document.createElement('img') 
    // url of the image from the 'front_default' property
    img.src = pokemon.sprites.front_default 
    // name of the pokemon from the 'name' property
    img.alt = pokemon.name  
    randomPokemon.append(img)
    // pokemonName.innerHTML = "name: " + pokemon.name
    pokemonName.innerHTML = pokemon.name
  }

// get the random pokemon and then render it to the page
getRandomPokemon().then(pokemon => renderPokemon(pokemon))
