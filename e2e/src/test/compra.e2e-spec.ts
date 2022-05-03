import { AppPage } from "../app.po";
import { browser } from 'protractor';

import { NavbarPage } from "../page/navbar/navbar.po";
import { CompraPage } from "../page/compra/compra.po";

describe("workspace-project Compra", () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let compra: CompraPage;

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        compra = new CompraPage();
    });

    xit('Deberia crear compra', () => {
        page.navigateTo();
        navBar.clickBotonCompras();
        compra.clickBotonCrearCompras();
        const PRECIO_COMPRA = '10000.0';
        const ID_CLIENTE = '2';
        compra.ingresarPrecio(PRECIO_COMPRA);
        compra.ingresarIdClienteCompra(ID_CLIENTE);
        compra.clickBotonGuardarCompras();
        expect(browser.getCurrentUrl()).toContain('compra/listar');
    });


    
//     fit('Deberia listar compras', () => {
//         page.navigateTo();
//         navBar.clickBotonCompras();
//         compra.clickBotonListarCompras();

//         expect(4).toBe(compra.contarCompras());
//     });


// });

});
