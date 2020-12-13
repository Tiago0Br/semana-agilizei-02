/// <reference types="cypress" />


context('Compra', () => {

    it('Efetuar a compra de um produto', () => {
        cy.backgroundLogin()
        cy.visit("/")

        let nomeProduto = "Printed Chiffon Dress"

        cy.contains(nomeProduto).trigger("mouseover")

        cy.contains(nomeProduto)
            .parent()
            .siblings("div.button-container")
            .children("a")
            .first()
            .click()

        // Validando se o elemento foi adicionado ao carrinho
        cy.get(".icon-ok")
            .parent()
            .should("contain.text", "Product successfully added to your shopping cart")

        cy.get("span#layer_cart_product_title").should("contain.text", nomeProduto)
        
        cy.pause()

        cy.get(".button-container a[href$='controller=order']").click()
        cy.get(".cart_navigation a[href$='order&step=1']").click()
        // cy.get('#email').type("tiagoteste@hotmail.com");
        // cy.get('#passwd').type("senha1234*");
        // cy.get('button#SubmitLogin').click();

        // Validando se o endereço da entrega é igual ao da cobrança
        cy.get("[type='checkbox']#addressesAreEquals").should('have.attr', 'checked', 'checked')

        cy.get("button[name='processAddress']").click();
        cy.get('#cgv').check();
        cy.get("button[name='processCarrier']").click();
        cy.get('a.cheque').click();

        cy.get('#cart_navigation button[type="submit"]')
            .find("span")
            .contains("I confirm my order")
            .click();

        cy.get("p.alert-success")
            .should("contain.text", "Your order on My Store is complete.")

        // Invoke chama uma função javascript
        cy.get("div.box").invoke('text').then((text) => {
            console.log(text.match(/[A-Z][A-Z]+/g))

            cy.writeFile('cypress/fixtures/pedido.json', { id: `${text.match(/[A-Z][A-Z]+/g)}` })
        })

        cy.get(".cart_navigation a[href$='history']").click()

        // Leitura do arquivo
        cy.readFile("cypress/fixtures/pedido.json").then((pedido) => {
            cy.get("tr.first_item .history_link a").should("contain.text", pedido.id)

        })
    })
})