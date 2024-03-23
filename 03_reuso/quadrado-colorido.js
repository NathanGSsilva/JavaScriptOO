class QuadradoColorido extends Quadrado{
    constructor(lado, cor) {
        super(lado);
        this.cor = cor
    }

    imprimeForma(){
        try{
            alert( `Tipo de forma: ${this.tipoDeForma} ${this.cor} - Área: ${this.calculaArea()}`);
        } catch(error){
            alert('O código está com erro.');
        }
    }
}