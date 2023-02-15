// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health,
            this.strength = strength
    }

    attack() {
        return this.strength
    }

    receiveDamage(damage) {
        this.health -= damage
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strengh) {
        super(health, strengh)
        this.name = name
    }

    receiveDamage(damage) {
        this.health -= damage
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }

    battleCry() {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health -= damage
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        } else {
            return `A Saxon has died in combat`
        }
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = []
        this.saxonArmy = []
    }

    addViking(viking) {
        this.vikingArmy.push(viking)
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon)
    }

    vikingAttack() {
        let randomViking = Math.floor(Math.random() * this.vikingArmy.length)
        let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length)

        let res = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength)
        this.saxonArmy.shift()

        return res
    }

    saxonAttack() {
        let randomViking = Math.floor(Math.random() * this.vikingArmy.length)
        let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length)
        
        let res = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength)

        this.vikingArmy.forEach((viking, i) => {
            if (viking.health <= 0) {
                this.vikingArmy.splice(this.vikingArmy[i], 1)
            }
        })
        return res
    }

    showStatus() {
        if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0) {
            return "Vikings and Saxons are still in the thick of battle."
        } else {
            if (this.vikingArmy.length == 0) {
                return "Saxons have fought for their lives and survived another day..."
            } else {
                return "Vikings have won the war of the century!"
            }
        }
    }
}
