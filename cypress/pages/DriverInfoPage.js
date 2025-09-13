import {CommonSelectors} from "../support/CommonSelectors";

class DriverInfoPage {

    elements = {
        email: () => cy.get('#email'),
        firstName: () => cy.get('#firstname'),
        surname: () => cy.get('#surname'),
        phone: () => cy.get('#contactNo'),
    }


    typeEmail = (email) => {
        this.elements.email().type(email);
    }

    typeFirstName = (firstName) => {
        this.elements.firstName().type(firstName);
    }

    typeSurname = (surname) => {
        this.elements.surname().type(surname);
    }

    typePhone = (phone) => {
        this.elements.phone().type(phone);
    }


    fillOutDriverInfoForm = (email, firstName, surname, phone) => {
        this.typeEmail(email);
        this.typeFirstName(firstName);
        this.typeSurname(surname);
        this.typePhone(phone);
    }

    fillOutPaymentInfo = (cardName, cardNumber, expirationDate, cvc) => {
        cy.frameLoaded(CommonSelectors.PAYMENT_SECTION);
        cy.iframe(CommonSelectors.PAYMENT_SECTION).find(CommonSelectors.CARD_NAME).type(cardName);
        cy.iframe(CommonSelectors.PAYMENT_SECTION).find(CommonSelectors.CARD_NUMBER).type(cardNumber);
        cy.iframe(CommonSelectors.PAYMENT_SECTION).find(CommonSelectors.EXPIRY_DATE).type(expirationDate);
        cy.iframe(CommonSelectors.PAYMENT_SECTION).find(CommonSelectors.CVC).type(cvc);
    }

}

module.exports = new DriverInfoPage();