import Animal from './animal'

class Cachorro extends Animal{
    falar(){
        console.log(this.especie + ' au au au ')
    }

    comer(){
        console.log(this.especie + ' come ração ')
    }
}