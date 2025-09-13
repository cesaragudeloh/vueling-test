import HomePage from "../pages/HomePage.js";
import DriverInfoPage from "../pages/DriverInfoPage.js";
import {buildBookingUrl} from "../utils/utils";
import {CommonSelectors} from "../support/CommonSelectors";

describe('Validation of Basic and Premium Rates in Car Rentals', () => {

    let searchData;
    let driverInfo;

    before(() => {
        cy.fixture('searchData.json').then((data) => {
            searchData = data;
        });
        cy.fixture('driverInfo.json').then((data) => {
            driverInfo = data;
        })
    });

    beforeEach(() => {
        cy.clearCookies();

        cy.visit('/')
        HomePage.choosePickupLocation(searchData.pickupLocation)
        cy.selectCustomDate(3, 5)

        //Cypress cannot continue a test after a reload or redirection because the runtime is unloaded.
        // The proposed solution was to build de URL with the previous params and validate the navigation with `cy.location`.
        const url = buildBookingUrl(searchData.pickupLocation, 3, 5, searchData.driverAge);
        cy.visit(url);

        cy.waitForSearchResults()
        cy.scrollUntilElement(CommonSelectors.SUV_BLOCK)
        HomePage.getFirstSUV()
    });


    it('Case 1: Select Basic Rate and navigate to Driver Information page', () => {
        cy.scrollUntilElement(CommonSelectors.CONTINUE_BUTTON)
        cy.clickElement(CommonSelectors.CONTINUE_BUTTON)


        DriverInfoPage.fillOutDriverInfoForm(
            driverInfo.email,
            driverInfo.firstName,
            driverInfo.surname,
            driverInfo.phone
        );

        //The book cannot complete because this isn't a test environment, also when we try to fill out the payment info, the next message is shown:
        // Blocked a frame with origin "https://cars.vueling.com" from accessing a cross-origin frame.

        // DriverInfoPage.fillOutPaymentInfo(
        //     driverInfo.cardName,
        //     driverInfo.cardNumber,
        //     driverInfo.expirationDate,
        //     driverInfo.cvc
        // )
        //});


    });


    it('Case 2: Select Premium Rate and navigate to Driver Information page', () => {
        cy.get(CommonSelectors.ADD_INSURANCE_BUTTON).click();
        cy.get(CommonSelectors.INSURANCE_CHECKBOX,).click({force: true});
        cy.get(CommonSelectors.ADD_INSURANCE_BUTTON).last().click()
        cy.clickElement(CommonSelectors.CONTINUE_BUTTON);


        DriverInfoPage.fillOutDriverInfoForm(
            driverInfo.email,
            driverInfo.firstName,
            driverInfo.surname,
            driverInfo.phone
        );

    });

});

