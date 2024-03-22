class Quadrado extends Forma {
    constructor(lado){
        super();
        this.tipoDeForma = 'Quadrado';
        this.lado = lado;
    }

    calculaArea(){
        return this.lado * this.lado;
    }
}