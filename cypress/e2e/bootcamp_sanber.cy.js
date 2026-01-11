describe ('OrangeHRM Login Feature Automation', () => {
    it('TC_LOGIN_01: Should login successfully with valid credentials', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com')
        cy.get('input[placeholder="Username"]').type('Admin')
        cy.get('input[placeholder="Password"]').type('admin123')
        cy.get('button[type="submit"]').click()
        cy.url().should('include', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    })
})

describe ('OrangeHRM Login Feature Automation TC02', () => {
    it('TC_LOGIN_02: Should show error when logging in with invalid username', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com')
        cy.get('input[placeholder="Username"]').type('AdmiNNN')
        cy.get('input[placeholder="Password"]').type('admin1234')
        cy.get('button[type="submit"]').click()
        cy.url().should('include', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })
})

describe ('OrangeHRM Login Feature Automation TC03', () => {
    it('TC_LOGIN_03: Should show error when logging in with invalid password', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com')
        cy.get('input[placeholder="Username"]').type('AdmiNNN')
        cy.get('input[placeholder="Password"]').type('admin123456')
        cy.get('button[type="submit"]').click()
        cy.url().should('include', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })
})

describe ('OrangeHRM Login Feature Automation TC04', () => {
    it('TC_LOGIN_04: Should show "Required" error when username is empty', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com')
        cy.get('input[placeholder="Username"]').clear('')
        cy.get('input[placeholder="Password"]').type('admin1234')
        cy.get('button[type="submit"]').click()
        cy.url().should('include', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })

    describe ('OrangeHRM Login Feature Automation 05', () => {
        it('TC_LOGIN_05: Should show "Required" error when password is empty', () => {
            cy.visit('https://opensource-demo.orangehrmlive.com')
            cy.get('input[placeholder="Username"]').type('AdmiNNN')
            cy.get('input[placeholder="Password"]').clear('')
            cy.get('button[type="submit"]').click()
        })
    })
    describe ('OrangeHRM Login Feature Automation 06', () => {
        it('TC_LOGIN_06: Should show "Required" error when both fields are empty', () => {
            cy.visit('https://opensource-demo.orangehrmlive.com')
            cy.get('input[placeholder="Username"]').clear('')
            cy.get('input[placeholder="Password"]').clear('')
            cy.get('button[type="submit"]').click()
            cy.url().should('include', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        })
    })
})