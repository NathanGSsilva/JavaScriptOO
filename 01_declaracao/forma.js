class forma {
    constructor(){
        this.tipoDeForma = "Forma Abstrata";
    }

    imprimeForma(){
        //alert( 'Tipo de forma: ${this.tipoDeForma} - Área: ${this.calculaArea()}');
        alert( `Tipo de forma: ${this.tipoDeForma}`);

    }

    calculaArea(){
        throw new Error('O método calcularArea() deve ser implementado na subclasse.');
    }
}