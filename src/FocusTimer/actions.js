import state from './state.js'
import * as timer from './timer.js'
import * as controls from './controls.js'
import * as sounds from './sounds.js'

export function toggleRunning() {
   state.isRunning = document.documentElement.classList.toggle('running')

   timer.countdown()
   sounds.buttonPressAudio.play()
}

export function reset() {
    state.isRunning = false
    document.documentElement.classList.remove('running')
    timer.updateDisplay()
    sounds.buttonPressAudio.play()
}

export function addTime() {
    let addFive = state.minutes += 5
    timer.updateDisplay(addFive, 0)

    if(state.minutes >= 60) {
        state.minutes = 0
    }
}

export function decreaseTime() {
    let decreaseFive = state.minutes -= 5
    timer.updateDisplay(decreaseFive, 0)
    
    if(state.minutes <= 0) {
        state.minutes = 5
    }
}

export function natureSound() {
    state.isMute = document.documentElement.classList.toggle('music-on')
    // const natureSound = document.querySelector('.ph-tree')
    // natureSound.addEventListener('click', () => {
    //     natureSound.classList.toggle('pressed-button')
    // })
    if(state.isMute) {
        sounds.natureAudio.play()
        return
    }
    sounds.natureAudio.pause()
}

export function rainSound() {
    state.isMute = document.documentElement.classList.toggle('music-on')

    if(state.isMute) {
        sounds.rainAudio.play()
        return
    }
    sounds.rainAudio.pause()
}

export function coffeeSound() {
    state.isMute = document.documentElement.classList.toggle('music-on')

    if(state.isMute) {
        sounds.coffeeAudio.play()
        return
    }
    sounds.coffeeAudio.pause()
}

export function fireplaceSound() {
    state.isMute = document.documentElement.classList.toggle('music-on')

    if(state.isMute) {
        sounds.fireplaceAudio.play()
        return
    }
    sounds.fireplaceAudio.pause()
}

const handlePressButton = (classButton) => {
    const soundControls = document.querySelector(classButton)

    soundControls.addEventListener('click', () => {
        soundControls.classList.toggle('pressed-button')
    })
}

handlePressButton('.ph-cloud-rain')
handlePressButton('.ph-tree')
handlePressButton('.ph-storefront')
handlePressButton('.ph-flame')