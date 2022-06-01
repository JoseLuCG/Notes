const personajes = [
    ["Daniel", 100, 5],
    ["Pepa", 102, 3],
    ["Lolo", 99, 40],
    ["Fordo", 110, 2]
]
class Warrior {
    constructor (name, life, strength) {
        this.name = name;
        this.life = life;
        this.strength = strength;
    }
    attack ( warrior ) {
        warrior.life -= this.strength;
    }
    heal ( warrior ) {
        warrior.life ++;
    }
}
const listaPersonajes = [];

function personajeToWarrior (item) {
    listaPersonajes.push( new Warrior(item[0], item[1], item[2]) )
}

personajes.forEach(personajeToWarrior);

console.log(JSON.stringify(listaPersonajes));