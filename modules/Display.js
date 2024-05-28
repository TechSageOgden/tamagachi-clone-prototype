import DOM_Utility from "./DOM_Utility.js"

const DOM = new DOM_Utility()

export default class Display {
    constructor() {
        this.TEXT_OUTPUT = DOM.elementGetter('text-output')
        this.HP_OUTPUT = DOM.elementGetter('hp-output')
        this.AFFECTION_OUTPUT = DOM.elementGetter('affection-output')
        this.HUNGER_OUTPUT = DOM.elementGetter('hunger-output')
        this.THIRST_OUTPUT = DOM.elementGetter('thirst-output')
        this.FATIGUE_OUTPUT = DOM.elementGetter('fatigue-output')
        this.JOY_OUTPUT = DOM.elementGetter('joy-output')
        this.BOREDOM_OUTPUT = DOM.elementGetter('boredom-output')
    }

    update(pet) {
        this.TEXT_OUTPUT.innerText = pet.message
        this.HP_OUTPUT.innerText = pet.hp
        this.AFFECTION_OUTPUT.innerText = pet.affection
        this.HUNGER_OUTPUT.innerText = pet.hunger 
        this.THIRST_OUTPUT.innerText = pet.thirst 
        this.FATIGUE_OUTPUT.innerText = pet.fatigue
        this.JOY_OUTPUT.innerText = pet.joy
        this.BOREDOM_OUTPUT.innerText = pet.boredom
    }
}