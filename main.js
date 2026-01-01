class Heroi{
    constructor(Nome,Idade,Tipo){
        this.Nome = Nome;
        this.Idade = Idade;
        this.Tipo = Tipo; 
    }
    atacar(){
        const ataques = {
          Mago: "Magia",
          Guerreiro: "Espada",
          Monge: "Artes Marciais",
          Ninja: "Shuriken"
        }
        console.log(`O ${this.Tipo} atacou usando ${ataques[this.Tipo]}`);
    }
}
let player = new Heroi("Kayke",21,"Monge");

player.atacar();