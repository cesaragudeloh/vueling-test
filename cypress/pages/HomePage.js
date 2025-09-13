class HomePage {

    elements = {
        pickupLocationOption: () => cy.get('.ct-landing-page__item--dismss'),
        pickupLocationInput: () => cy.get('#search-cars-pickup-modal-input'),
        airportLocationInput: () => cy.get('li[name="LocSelected-0"]'),
        carGroupSUV: () => cy.get('[data-car-group="suv"]')
    }


    choosePickupLocation = (location) => {
        cy.wait(3000);
        this.elements.pickupLocationOption().click();
        this.elements.pickupLocationInput().type(location);
        this.elements.airportLocationInput().should('be.visible');
        this.elements.airportLocationInput().first().click();
    }

    getFirstSUV = () => {
        this.elements.carGroupSUV().first().click()
    }

}

module.exports = new HomePage();