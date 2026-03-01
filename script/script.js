// extract the every .row div tags from html document
const rowContainerList = document.querySelectorAll('.row')

//* flip card
const flipCardContainer = rowContainerList[1]
// children elements
let childrenElements = flipCardContainer.children
// iterate for each div container from flip container
for(let div of childrenElements){
    // card front element
    const cardFront = div.querySelector('.card__front')
    // pull div children from card front parent
    const divChildren = cardFront.querySelector('div')
    // extarct p element from div children
    const p = divChildren.querySelector("p")
    // truncate the element’s text to 210 characters and add "..." at the end
    p.textContent = p.textContent.slice(0, 210) + '...'
}

//* slideshow
const slideShowContainer = document.querySelector('.carousel-inner')
// children elements
childrenElements = slideShowContainer.children
// iterate for each carousel item from slideShowContainer
for(let div of childrenElements){
    // select card text element located in it´s div parent element
    const cardText = div.querySelector('.card-text')
    // truncate it´s text content to 210 characters and add "..." at the end.
    cardText.textContent = cardText.textContent.slice(0,230) + '...'
}

//* youtube playlist
const playlistContainer = rowContainerList[11]
// children elements
childrenElements = playlistContainer.children
// iterate for each div container from playlist container
for(let div of childrenElements){
    // select card text element located in it´s div parent element
    const cardText = div.querySelector('.card-text')
    // truncate it´s text content to 210 characters and add "..." at the end.
    cardText.textContent = cardText.textContent.slice(0, 210) + '...'
}

// extract the button to (de)activate the progress bar animation
let animationButton = document.getElementById('activateAnimation')
animationButton.addEventListener('click', () => {
    // get the progress bar list container
    let progressBarElements = document.querySelectorAll('.progress-bar')

    // for each progress bar container element, you will add/remove the .progress-bar-animated class
    for (let bar of progressBarElements){
        bar.classList.toggle('progress-bar-animated')
    }

    // pull the first progress bar element
    let progressBar = progressBarElements[0]
    // extract it´s class list attribute
    let classLsit = progressBar.classList
    //? is the .progress-bar-animated class included in the list
    if (classLsit.contains('progress-bar-animated')){
        animationButton.textContent = 'Stop animation'
        animationButton.classList.remove('btn-warning')
        animationButton.classList.add('btn-danger')
    } //? in case the .progress-bar-animated not included in the class list?
    else{
        animationButton.textContent = 'Activate animation'
        animationButton.classList.remove('btn-danger')
        animationButton.classList.add('btn-warning')
    }
})