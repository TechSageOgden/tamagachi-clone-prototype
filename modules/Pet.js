import Sprite from "./Sprite.js"

export default class Pet {
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

    lifeCycle() {
        console.log('Life...will find a way...')
        let is_dead = false
        this.hunger += 1
        this.thirst += 2
        this.fatigue += .5
        this.boredom += 3

        if (this.hunger > 35) {
            this.hp -= 1
            if (this.hunger > 75) {
                this.hp -= 10
            }
        }
        if(this.thirst > 35) {
            this.hp -= 1
            if (this.thirst > 75) {
                this.hp -= 10
            }
        }
        if(this.fatigue > 50) {
            this.hp -= 1
            if (this.fatigue > 75) {
                this.hp -= 10
            }
        }
        if(this.boredom > 35) {
            this.affection -= 5
            if (this.boredom > 75) {
                this.affection -= 15
            }
        }
        if(this.hp <= 0) {
            is_dead = true
            return is_dead
        } else {
            return is_dead
        }
    }
    die() {
        this.message = 'Death comes for us all..'
    }

    receive_pet() {
        this.affection += 3
        this.joy += 2
        this.message = 'YAY! I like headpats!'
    }

    receive_feed() {
        this.affection += 1
        this.hunger -= 5
        this.fatigue += 5
        this.thirst += 1
        this.joy += 5
        this.message = "Yummmy!"
    }

    receive_play() {
        this.affection += 5
        this.hunger += 1.5
        this.thirst += 1.5
        this.boredom -= 3
        this.fatigue += 5
        this.message = "Wow, you're a lot of fun!"
    }

    receive_bath() {
        this.joy -= 5
        this.fatigue -= 5
        this.affection -= 10
        this.message = "HEY! I don't know you like that!"
    }

    receive_water() {
        this.thirst -= 5
        this.affection += 1
        this.message = "Nice! Cold and Wet!"
    }

    receive_sleep() {
        if(this.fatigue >= 51) {
            this.fatigue -= 50
        } else {
            this.fatigue = 0
        }
        this.hunger += 10
        this.thirst += 10
    }

}