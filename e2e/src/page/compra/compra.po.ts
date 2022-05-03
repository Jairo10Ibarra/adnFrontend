import { by, element } from "protractor";



export class CompraPage {
    private linkCrearCompra = element(by.id('linkCrearCompra'));
    private linSaveCompra = element(by.id('btn_save_buy'));
    private inputPrecioCompra = element(by.id('precioCompra'));
    private inputIdClienteCompra = element(by.id('idClienteCompra'));


    // private inputFechaCompra= element(by.id('FechaCompra'));
    // private listaCompras = element.all(by.css('ul.compras li'));
    // private linkListarCompras = element(by.id('linkListarCompra'));
    // private inputIdCompra= element(by.id('idCompra'));

    async clickBotonCrearCompras() {
        await this.linkCrearCompra.click();
    }

    async clickBotonGuardarCompras() {
        await this.linSaveCompra.click();
    }

    async ingresarPrecio(precioCompra) {
        await this.inputPrecioCompra.sendKeys(precioCompra);
    }

    async ingresarIdClienteCompra(idCliente) {
        await this.inputIdClienteCompra.sendKeys(idCliente);
    }

//     async ingresarFechaRegistroCompra(fechaRegistro) {
//         await this.inputFechaCompra.sendKeys(fechaRegistro);
//     }
//     async clickBotonListarCompras() {
//         await this.linkListarCompras.click();
//     }

//     async contarCompras() {
//         return this.listaCompras.count();
//     }

//     async ingresarId(idCompra) {
//         await this.inputIdCompra.sendKeys(idCompra);
//     }

// }

}