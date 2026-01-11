describe ('Skenario Verifikasi Fungsi Login', () => {
    it('login dengan username valid dan password valid', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type('standard').should('have.value','standar_value')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        //cy.url().should('include', 'https://www.saucedemo.com/inventory.html')
    })
})