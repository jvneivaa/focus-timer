import state from './state.js'
import * as controls from './controls.js'
import { reset } from './actions.js'
import { kitchenTimer } from './sounds.js'

export function countdown() {

    clearTimeout(state.countdownID)
    
    if(!state.isRunning) {
        return
    }

    let minutes = Number(controls.minutes.textContent)
    let seconds = Number(controls.seconds.textContent)

    seconds--

    if(seconds < 0) {
        seconds = 59
        minutes--
    }

    if(minutes < 0) {
        reset()
        kitchenTimer.play()
        return
    }

    updateDisplay(minutes, seconds)
    
    state.countdownID = setTimeout(() => countdown(), 1000)
}

export function updateDisplay(minutes, seconds) {
    minutes = minutes ?? state.minutes
    seconds = seconds ?? state.seconds

    controls.minutes.textContent = String(minutes).padStart(2, '0')
    controls.seconds.textContent = String(seconds).padStart(2, '0')
}