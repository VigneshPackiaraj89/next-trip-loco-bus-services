context('nexttrip - initial page load check', () => {
    describe('successful page load', () => {
        it('test to check the dom elements are loaded', ()=> {
            cy.visit('/')
            cy.get('.menubar').its('length').should('eq', 1)
            cy.get('.menubar').click()
            cy.get('.nav-link').eq(0).click()
            cy.get('.dropdown-item').eq(1).click()
            cy.get('.next-trip').its('length').should('eq', 1)
            cy.get('.next-trip h2').invoke('text').should('eq', 'Real-time Departures')
            cy.get('#byRouteTab').click()
            cy.get('#ntRoute').its('length').should('eq', 1)
            cy.get('select').eq(0).select('901').should('have.value', '901')
            cy.get('select').eq(1).select('0').should('have.value', '0')
            cy.get('select').eq(2).select('MAAM').should('have.value', 'MAAM')
            cy.get('#nextripDepartures').its('length').should('eq', 1)
            cy.get('#showMyBus').its('length').should('eq', 1)

            cy.get('#byStopNumTab').click()
            cy.get('#search-input').type(135)
            cy.get('#search').click()

            cy.get('#nextripDepartures').its('length').should('eq', 1)
            cy.get('#showMyBus').its('length').should('eq', 1)

            // Error Scenario
            cy.get('#search-input').type(13532423234234)
            cy.get('#search').click()
            cy.get('#displayError').its('length').should('eq', 1)         
        })
    })
})