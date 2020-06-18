/// <reference types="cypress" />

context('Login Test', () => {
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('img').should('be.visible')
    })

    describe('I want login with unsuccessfully', () => {
        it('Login with empty all mandatory field', () => {
            // Click button Login
            cy.get('#btnLogin').click().should('be.visible')

            // Show warning message
            cy.get('#spanMessage').should('contain.text', 'Username cannot be empty')
            cy.wait(3000)
        })

        it('Login with empty username field', () => {
            // Fill field password
            cy.get('#txtPassword').type('admin123', { delay: 100 }).should('have.value', 'admin123')
           
           // Click button Login
           cy.get('#btnLogin').click().should('be.visible')

           // Show warning message
           cy.get('#spanMessage').should('contain.text', 'Username cannot be empty')
           cy.wait(3000)
       })

        it('Login with empty password field', () => {
             // Fill field username
             cy.get('#txtUsername').type('Amalia', { delay: 100 }).should('have.value', 'Amalia')
            
            // Click button Login
            .wait(2000)
            .type('{enter}')

            // Show warning message
            cy.get('#spanMessage').should('contain.text', 'Password cannot be empty')
            cy.wait(3000)
        })

        it('Login with invalid credentials', () => {
            // Fill field username
            cy.get('#txtUsername').type('Amalia', { delay: 100 }).should('have.value', 'Amalia')

            // Fill field password
            cy.get('#txtPassword').type('admin123', { delay: 100 }).should('have.value', 'admin123')

            // Enter button login with your username and password
            .wait(2000)
            .type('{enter}')

            // Show warning message
            cy.get('#spanMessage').should('contain.text', 'Invalid credentials')
            cy.wait(3000)
        })
    })

    describe('I want login with successfully', () => {
        
        it('Login with valid data', () => {
            // Fill field username
            cy.get('#txtUsername').type('Admin', { delay: 100 }).should('have.value', 'Admin')

            // Fill field password
            cy.get('#txtPassword').type('admin123', { delay: 100 }).should('have.value', 'admin123')

            // Login with your username and password
            cy.get('#btnLogin').click().should('be.visible')
            cy.wait(2000)

            // Redirect to main page -> Dashboard
            cy.get('.head').contains('Dashboard').should('contain.text', 'Dashboard')
        })
            
    })
})


