class Forma {
    constructor(tipoDeForma = 'forma abstrata'){
        // this.tipoDeForma = "Forma Abstrata";
        this.tipoDeForma = tipoDeForma;
    }

    imprimeForma(){
        try{
            alert( `Tipo de forma: ${this.tipoDeForma} - Área: ${this.calculaArea()}`);
        } catch(error){
            alert('O código está com erro.');
        }
    }

    calculaArea(){
        throw new Error('O método calcularArea() deve ser implementado na subclasse.');
    }
}