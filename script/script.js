let animationButton = document.getElementById('activateAnimation')

animationButton.addEventListener('click', () => {
    let progressBarElements = document.querySelectorAll('.progress-bar')
    let progressBar = progressBarElements[0]
    for (let bar of progressBarElements){
        bar.classList.toggle('progress-bar-animated')
    }
    let classLsit = progressBar.classList
    if (classLsit.contains('progress-bar-animated')){
        animationButton.textContent = 'Stop animation'
        animationButton.classList.remove('btn-warning')
        animationButton.classList.add('btn-danger')
    }else{
        animationButton.textContent = 'Activate animation'
        animationButton.classList.remove('btn-danger')
        animationButton.classList.add('btn-warning')
    }
})