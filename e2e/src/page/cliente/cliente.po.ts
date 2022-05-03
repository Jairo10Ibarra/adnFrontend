import { by, element } from "protractor";

export class ClientePage {
    private linkCrearCliente = element(by.id('btn_create_client'));
    private linSaveCliente = element(by.id('btn_save_client'));
    // private linkListarClientes = element(by.id('linkListarCliente'));
    // private inputIdCliente= element(by.id('idCliente'));
    private inputNombreCliente = element(by.id('nombreCliente'));
    private inputTipoCliente = element(by.id('tipoCliente'));
    // private inputFechaCliente= element(by.id('FechaCliente'));
    // private listaClientes = element.all(by.css('ul.clientes li'));

    async clickBotonCrearClientes() {
        await this.linkCrearCliente.click();
    }

    async clickBotonGuardarClientes() {
        await this.linSaveCliente.click();
    }

    // async clickBotonListarClientes() {
    //     await this.linkListarClientes.click();
    // }

    
    // async contarClientes() {
    //     return this.listaClientes.count();
    // }


    // async contarCompras() {
    //     return this.listaClientes.count();
    // }

    // async ingresarId(idCliente) {
    //     await this.inputIdCliente.sendKeys(idCliente);
    // }

    async ingresarNombreCliente(nombreCliente) {
        await this.inputNombreCliente.sendKeys(nombreCliente);
    }

    async ingresaTipoCliente(tipoCliente) {
        await this.inputTipoCliente.sendKeys(tipoCliente);
    }

    // async ingresarFechaRegistroCliente(fechaRegistro) {
    //     await this.inputFechaCliente.sendKeys(fechaRegistro);
    // }


}