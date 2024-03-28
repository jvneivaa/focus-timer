import { controls, soundControls } from "./controls.js";
import * as actions from "./actions.js";

export function registerControls() {
    controls.addEventListener('click', (event) => {
        const action = event.target.dataset.action

        if(typeof actions[action] != 'function') {
            return
        }
        actions[action]()
    })

    soundControls.addEventListener('click', (event) => {

        const action = event.target.dataset.action

        if(typeof actions[action] != 'function') {
            return
        }
        actions[action]()
    })

    
}