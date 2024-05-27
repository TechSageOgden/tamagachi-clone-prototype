// Utility Functions
import DOM_Utility from "./modules/DOM_Utility.js"
const DOM = new DOM_Utility()
// Display Dependency
import Display from "./modules/Display.js"

// Actions Dependency
import Actions from "./modules/Actions.js"


// Pet Dependency
import Pet from "./modules/Pet.js"



const DATA_TABLE = [
    {
        species: "Sloth",
        atr: {
            hp: 100,
            affection: 10,
            hunger: 10,
            thirst: 10,
            fatigue: 85,
            joy: 0,
            boredom: 0,
        },
        data: {
            age: 0,
            weight: 0,
            dob: '',
        },
    },
    {
        species: "Dog",
        atr: {},
        data: {},
    },
    {
        species: "Cat",
        atr: {},
        data: {},
    },
]


const PET_BUTTON = DOM.elementGetter('pet-button')
const FEED_BUTTON = DOM.elementGetter('feed-button')
const PLAY_BUTTON = DOM.elementGetter('play-button')
const BATHE_BUTTON = DOM.elementGetter('bathe-button')
const WATER_BUTTON = DOM.elementGetter('water-button')


const BUTTON_ARRAY = [
    PET_BUTTON,
    FEED_BUTTON,
    PLAY_BUTTON,
    BATHE_BUTTON,
    WATER_BUTTON,
]

const DISPLAY = new Display()
const ACTIONS = new Actions()


let sloth = new Pet("Andre", "Sloth", "./assets/images/sloth-love.jpg")
sloth.init(DATA_TABLE)

DISPLAY.update(sloth)

BUTTON_ARRAY.map((button, index) => {
    button.addEventListener('click', () => {
        switch (index) {
            case 0:
                ACTIONS.pet(sloth, DISPLAY)
                break;
            case 1:
                ACTIONS.feed(sloth, DISPLAY)
                break;
            case 2:
                ACTIONS.play(sloth, DISPLAY)
                break;
            case 3:
                ACTIONS.bathe(sloth, DISPLAY)
                break;
            case 4:
                ACTIONS.water(sloth, DISPLAY)
                break;
            default:
                break;
        }
    })
})