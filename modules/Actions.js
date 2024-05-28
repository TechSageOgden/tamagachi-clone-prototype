export default class Actions {
    
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
        display.update(pet)
    }

    sleep(pet, display) {
        console.log("The creature has a good rest!")
        pet.receive_sleep()
        display.update(pet)
    }
}