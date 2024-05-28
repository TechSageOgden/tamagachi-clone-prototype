export default class GameLoop {
    constructor(pet, reqId) {
        this.pet = pet
        this.start_time = 0
        this.current_time = 0
        this.step_time = 0
        this.animationReference = reqId
    }

    start() {
        this.start_time = Date.now()
        this.step_time = Date.now()
        this.current_time = Date.now()
        console.log('Game Start!')
    }

    update(display) {
        console.log(`Running.... ${this.current_time}`)
        this.current_time = Date.now()
        if(this.current_time - 5000 >= this.step_time) {
            this.step_time = this.current_time
            this.pet.lifeCycle()
        }
        display.update(this.pet)
    }

    
    draw() {}

    end(reqId) {
        console.log(`Game end @ ${this.current_time}`, `Start Time: ${this.start_time}`)
        cancelAnimationFrame(reqId)
    }
}