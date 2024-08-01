class heroi{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo= tipo;
    }
atacar() {
    let ataque;
    switch(this.tipo) {
        case "mago":
        ataque="usou magia";
    break
        case "guerreiro":
        ataque = "usou espada";
    break
        case "monge":
        ataque = "usou artes marciais";
    break
        case "ninja":
        ataque = "usou shuriken";
    break
    default:
        ataque = "realizou um ataque desconhecido"        
    }
console.log(`O ${this.tipo} atacou usando ${ataque}`);
}
}
const mago = new heroi ('Ronaldinho', 130, 'mago');
const guerreiro = new heroi ('Lu Bu', 40, 'guerreiro');
const monge = new heroi ('Bruce Lee', 72, 'monge');
const ninja = new heroi ('Sasuke', 28, 'ninja');

    mago.atacar();
    guerreiro.atacar();
    monge.atacar();
    ninja.atacar();