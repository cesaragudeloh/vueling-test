# Manual Testing Assignment: Validation of Business Rules for Minor Passengers

## Context

For the Vueling's ticket selling website (http://tickets.vueling.com), the following business rules have been defined for validation purposes

1. Children under 12 years old at the time of the flight must always travel accompanied by an adult.
2. Italian nationals under 14 years old traveling to/from Italy must always travel accompanied by an adult.
3. Romanian nationals under 18 years old traveling to/from Romania must always travel accompanied by an adult.
4. Unaccompanied minors under 16 years old are not allowed to book connecting flights.

## Technical Requirements

Prepare a manual test suite that validates the correct implementation of the above rules and provides enough coverage for other functionalities or scenarios that could be affected considering the context of an airline e-commerce application.

*NOTE: These rules are fictional and may not reflect the actual behavior or restrictions of the live website. You may use the website as a reference or example to guide your understanding of possible flows or affected aspects, but you are not expected to reproduce its behavior exactly or assume the test cases must be executable literally.*

# Technical Test Statement: Validation of Basic and Premium Rates in Car Rentals

## Context

The company has implemented two insurance options for cars: Basic Insurance and Premium Insurance. We need to ensure that users can select either of these rates and successfully proceed to the **Driver Information** page.

## Instructions

1. **Navigate to the website:**
   - URL: https://cars.vueling.com/
2. **Search parameters:**
   - **Pickup Location:** Barcelona Airport
   - **Pickup Date:** 3 days after the execution date
   - **Return Date:** 5 days after the execution date
   - **Driver’s Age:** 40
3. **Select a car:**
   - Choose the **first SUV car** from the list.
4. **Dynamic Fare Selection:** In **two independent test cases** using `it()`:
   - **Case 1**:
     - Select the **Basic Rate**.
     - Ensure navigation to the **Driver Information** page.
   - **Case 2**:
     - Select the **Premium Rate**.
     - Ensure navigation to the **Driver Information** page.
5. **Final assertion**: Verify that the selected rate (Basic or Premium) is correctly reflected on the **Driver Information** page.

## Technical Requirements

- **Screen resolution:** Both tests must run at a resolution of **430 x 932**.
- **Use of Fixtures:** Use a JSON file in the fixtures folder containing the following parameters:
  ```json
  {
    "pickupLocation": "Barcelona Airport",
    "driverAge": 40,
    "insurance": ["Basic", "Premium"]
  }
  ```
- **Code structure:**
  - Use `describe()` to group the test cases.
  - Include the hooks `before()`, `after()`, `beforeEach()`, and `afterEach()`.
- **Cookie cleanup:** Ensure to clear cookies at the start of each test case using `cy.clearCookies()`.
- **Assertions at each step:** Include **assertions** to validate the following:
  - Search page loads correctly.
  - The selected car is an SUV.
  - The selected rate matches the option (Basic or Premium).
  - The **Driver Information** page displays the correct selected rate.

  **⚠️ Important (for both tasks): The use of AI-based tools (such as ChatGPT, Copilot, etc.) as support for consultation, ideation, or to assist with structure is acceptable. However, submissions that show signs of abusive or literal copy-pasting from AI-generated content will be penalized and may be automatically discarded. We are evaluating your reasoning, analysis, and ability to think critically about the domain — not just the final format or language.**
