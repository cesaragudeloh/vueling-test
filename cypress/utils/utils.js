import dayjs from "dayjs";


export function buildBookingUrl(pickupLocation, pickupDateOffset, returnDateOffset, driverAge) {
    const pickupDate = dayjs().add(pickupDateOffset, 'day').hour(10).minute(0);
    const returnDate = dayjs().add(returnDateOffset, 'day').hour(10).minute(0);

    const queryParams = new URLSearchParams({
        pickupDateTime: pickupDate.format("YYYY-MM-DDTHH:mm"),
        countryID: "ES",
        clientID: "401737",
        elID: "1671757050589062",
        ct: "MP",
        returnID: "1774",
        curr: "EUR",
        pickupCountryCode: "ES",
        age: String(driverAge),
        pickupName: pickupLocation,
        returnName: pickupLocation,
        returnCountryCode: "ES",
        residenceID: "CO",
        pickupID: "1774",
        returnDateTime: returnDate.format("YYYY-MM-DDTHH:mm")
    });

    return `/en/book?${queryParams.toString()}#/vehicles`;
}
