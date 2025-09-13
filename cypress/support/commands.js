// cypress/support/commands.js
import dayjs from 'dayjs';
import {CommonSelectors} from "./CommonSelectors";

Cypress.Commands.add('selectCustomDate', (pickupDate, returnDate) => {
    cy.get('[data-auto-id="inputPickupDate"]').click()
    const date = dayjs().add(pickupDate, 'day');
    const day = date.date();
    const month = date.format('MMMM');
    const year = date.year();

    cy.contains('.datepicker-header span', `${month} ${year}`)
        .closest('.ct-datepicker-month-container')
        .find(`.ct-datepicker-cell:not(.ct-disable) span[aria-label="${day}"]`)
        .click()
        .closest('.ct-datepicker-month-container')
        .find(`.ct-datepicker-cell:not(.ct-disable) span[aria-label="${day + returnDate - pickupDate}"]`)
        .click();
});

Cypress.Commands.add('clickElement', (selector) => {
    cy.get(selector)
        .should('be.visible')
        .and('not.be.disabled')
        .click()
});


Cypress.Commands.add('waitForSearchResults', () => {
    // We verify "Edit" button appears
    cy.get(CommonSelectors.EDIT_BUTTON, {timeout: 20000})
        .should('be.visible')
        .and('contain.text', 'Edit');

    // Verifica que el spinner de búsqueda desapareció
    cy.get('.ct-interstitial-container--searching', {timeout: 20000})
        .should('not.exist');
});


Cypress.Commands.add('scrollUntilElement', (selector) => {
    cy.window().then((win) => {
        const scrollStep = 500;
        let current = 0;

        function check() {
            return cy.get('body').then(($body) => {
                if ($body.find(selector).length > 0) {
                    return; // SUV car found
                }
                current += scrollStep;
                win.scrollTo(0, current);
                return cy.wait(500).then(check); // Wait for it and start again
            });
        }

        return check();
    });
});




