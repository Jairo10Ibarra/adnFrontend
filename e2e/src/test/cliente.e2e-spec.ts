import { browser } from 'protractor';
import { AppPage } from "../app.po";
import { ClientePage } from "../page/cliente/cliente.po";



describe("workspace-project Cliente", () => {
    let page: AppPage;
    let cliente: ClientePage;

beforeEach(() => {
    page = new AppPage();
    cliente = new ClientePage();
});

it('Deberia crear un cliente', () => {
    const NOMBRE_CLIENTE = 'Jairo2';
    const TIPO_CLIENTE ='Antiguo';
    page.navigateTo();
    cliente.clickBotonCrearClientes();
    cliente.ingresarNombreCliente(NOMBRE_CLIENTE);
    cliente.ingresaTipoCliente(TIPO_CLIENTE);
    cliente.clickBotonGuardarClientes();
    //Adicionamos las validaciones despues de la creación
    expect(browser.getCurrentUrl()).toContain('cliente/listar');
});

 
// it('Deberia listar clientes', () => {
//     page.navigateTo();
//     navBar.clickBotonCompras();
//     cliente.clickBotonCrearClientes();

//     expect(4).toBe(cliente.contarClientes());
// });


});
