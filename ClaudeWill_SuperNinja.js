class Ninja {
    constructor(name,health){
        this.name = name;
        this.health = health;
        this.strength = 3;
        this.speed = 3;
    }

    sayName(){
        console.log(this.name)
    }

    showStats() {
        console.log(`Name: ${this.name}\nHealth: ${this.health}\nStrength: ${this.strength}\nSpeed: ${this.speed}`)
    }

    drinkSake(){
        this.health += 10
        return this;
    }
}

class Sensei extends Ninja {
    constructor(name){
        super(name);
        super.health = 200;
        super.strength = 10;
        super.speed = 10;
        this.wisdom = 10;
    }

    speakWisdom(){
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }

}


const superSensei = new Sensei('Bob the Sensei');
superSensei.speakWisdom();
superSensei.showStats();
