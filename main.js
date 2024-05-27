// Utility Functions
const elementGetter = (id) => {
    return document.getElementById(`${id}`)
}

class Display {
    constructor() {
        this.TEXT_OUTPUT = elementGetter('text-output')
        this.HP_OUTPUT = elementGetter('hp-output')
        this.AFFECTION_OUTPUT = elementGetter('affection-output')
        this.HUNGER_OUTPUT = elementGetter('hunger-output')
        this.THIRST_OUTPUT = elementGetter('thirst-output')
        this.FATIGUE_OUTPUT = elementGetter('fatigue-output')
        this.JOY_OUTPUT = elementGetter('joy-output')
        this.BOREDOM_OUTPUT = elementGetter('boredom-output')
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

class Actions {
    
    pet(pet, display) {
        console.log('You pet the creature!')
        pet.receive_pet()
        display.update(pet)
    }

    feed(pet, display) {
        console.log('You feed the creature!')
        pet.receive_feed()
        display.update(pet)
    }

    play(pet, display) {
        console.log('You play with the creature!')
        pet.receive_play()
        display.update(pet)
    }

    bathe(pet, display) {
        console.log('You bathe the creature!')
        pet.receive_bath()
        display.update(pet, display)
    }

    water(pet, display) {
        console.log("You give the creature a drink!")
        pet.receive_water()
        display.update(pet, display)
    }
}

class Sprite {
    constructor(path) {
        this.file_path = path
    }
}


class Pet {
    constructor(name, species, sprite) {
        this.name = name
        this.species = species
        this.sprite = new Sprite(sprite)

        this.message = "I'm Alive!"

        this.hp = 0
        this.affection = 0
        this.hunger = 0
        this.thirst = 0
        this.fatigue = 0
        this.joy = 0
        this.boredom = 0
    }

    init(table) {
        table.map(item => {
            if(item.species === this.species) {
                this.hp = item.atr.hp
                this.affection = item.atr.affection
                this.hunger = item.atr.hunger
                this.thirst = item.atr.thirst
                this.fatigue = item.atr.fatigue
                this.joy = item.atr.joy
                this.boredom = item.atr.boredom
            }
        })
    }

    receive_pet() {
        this.affection += 1
        this.joy += .5
        this.message = 'YAY! I like headpats!'
    }

    receive_feed() {
        this.affection += 1
        this.hunger -= 5
        this.fatigue += 5
        this.thirst += 5
        this.joy += 1
        this.message = "Yummmy!"
    }

    receive_play() {
        this.affection += 2
        this.hunger += 1.5
        this.thirst += 1.5
        this.boredom -= 2
        this.fatigue += 5
        this.message = "Wow, you're a lot of fun!"
    }

    receive_bath() {
        this.joy -= 5
        this.fatigue -= 2
        this.affection -= 10
        this.message = "HEY! I don't know you like that!"
    }

    receive_water() {
        this.thirst -= 5
        this.affection += 1
        this.message = "Nice! Cold and Wet!"
    }

}

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


const PET_BUTTON = elementGetter('pet-button')
const FEED_BUTTON = elementGetter('feed-button')
const PLAY_BUTTON = elementGetter('play-button')
const BATHE_BUTTON = elementGetter('bathe-button')
const WATER_BUTTON = elementGetter('water-button')


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