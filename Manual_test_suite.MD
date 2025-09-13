# Manual Testing Assignment: Validation of Business Rules for Minor Passengers

## Context
For the Vueling's ticket selling website (http://tickets.vueling.com ), the following business rules have been defined for validation purposes

Children under 12 years old at the time of the flight must always travel accompanied by an adult.
Italian nationals under 14 years old traveling to/from Italy must always travel accompanied by an adult.
Romanian nationals under 18 years old traveling to/from Romania must always travel accompanied by an adult.
Unaccompanied minors under 16 years old are not allowed to book connecting flights.


## Test cases

### **TC01 – Child <12 must be accompanied**

* **ID:** TC01
* **Description:** Validate that a child under 12 cannot book alone.
* **Preconditions:** Passenger age < 12.
* **Steps:**

    1. Start new booking.
    2. Select passenger age = 11.
    3. Try to proceed without adding adult.
* **Expected Result:** System blocks booking. Error: *“Children under 12 must travel with an adult.”*

---

### **TC02 – Child <12 with adult**

* **ID:** TC02
* **Description:** Validate that a child under 12 can travel with an adult.
* **Preconditions:** Passenger age < 12 + Adult in booking.
* **Steps:**

    1. Add passenger age = 11.
    2. Add passenger age = 30.
    3. Proceed to booking.
* **Expected Result:** System allows booking to continue.

---

### **TC03 – Italian <14 must be accompanied**

* **ID:** TC03
* **Description:** Validate Italian national under 14 cannot travel alone on Italy route.
* **Preconditions:** Passenger nationality = Italian, age = 13, route = Rome → Milan.
* **Steps:**

    1. Add passenger age = 13, nationality = Italian.
    2. Route to/from Italy.
    3. Try to book without adult.
* **Expected Result:** System blocks booking. Error: *“Italian passengers under 14 must be accompanied by an adult.”*

---

### **TC04 – Italian <14 with adult**

* **ID:** TC04
* **Description:** Validate Italian national under 14 can travel with adult.
* **Preconditions:** Same as TC03 + adult.
* **Steps:**

    1. Add child passenger age = 13, nationality = Italian.
    2. Add adult passenger.
    3. Book Rome → Milan.
* **Expected Result:** Booking allowed.

---

### **TC05 – Romanian <18 must be accompanied**

* **ID:** TC05
* **Description:** Validate Romanian national under 18 cannot book alone on Romania route.
* **Preconditions:** Passenger nationality = Romanian, age = 17, route = Bucharest → Madrid.
* **Steps:**

    1. Add passenger age = 17, nationality = Romanian.
    2. Route to/from Romania.
    3. Try to proceed without adult.
* **Expected Result:** System blocks booking. Error: *“Romanian passengers under 18 must be accompanied by an adult.”*

---

### **TC06 – Romanian <18 with adult**

* **ID:** TC06
* **Description:** Validate Romanian national under 18 can travel with adult.
* **Preconditions:** Same as TC05 + adult.
* **Steps:**

    1. Add passenger age = 17, nationality = Romanian.
    2. Add adult passenger.
    3. Proceed to booking.
* **Expected Result:** Booking allowed.

---

### **TC07 – Unaccompanied minor <16 on connecting flight**

* **ID:** TC07
* **Description:** Validate minors under 16 cannot book connecting flights alone.
* **Preconditions:** Passenger age = 15, connecting flight.
* **Steps:**

    1. Add passenger age = 15.
    2. Select flight with layover/connection.
    3. Try to book alone.
* **Expected Result:** Booking blocked. Error: *“Unaccompanied minors under 16 cannot book connecting flights.”*

---

### **TC08 – Minor ≥16 connecting flight alone**

* **ID:** TC08
* **Description:** Validate minors ≥16 can book connecting flights alone.
* **Preconditions:** Passenger age = 16, connecting flight.
* **Steps:**

    1. Add passenger age = 16.
    2. Select connecting flight.
    3. Proceed to booking.
* **Expected Result:** Booking allowed.

---

### **TC09 – Edge case: Child exactly 12**

* **ID:** TC09
* **Description:** Validate 12-year-old is treated as “not child under 12.”
* **Preconditions:** Passenger age = 12.
* **Steps:**

    1. Add passenger age = 12 without adult.
    2. Try to book.
* **Expected Result:** Booking allowed (rule applies only to <12).

---

### **TC10 – Edge case: Italian exactly 14**

* **ID:** TC10
* **Description:** Validate Italian 14-year-old treated as adult.
* **Preconditions:** Passenger age = 14, nationality = Italian, route Italy.
* **Steps:**

    1. Add passenger.
    2. Try to book alone.
* **Expected Result:** Booking allowed.

---

### **TC11 – Edge case: Romanian exactly 18**

* **ID:** TC11
* **Description:** Validate Romanian 18-year-old treated as adult.
* **Preconditions:** Passenger age = 18, nationality = Romanian, route Romania.
* **Steps:**

    1. Add passenger.
    2. Try to book alone.
* **Expected Result:** Booking allowed.

---

### **TC12 – System validates adult presence for minors**

* **ID:** TC12
* **Description:** General rule enforcement.
* **Preconditions:** Any child rule triggered.
* **Steps:**

    1. Add minor.
    2. Add at least 1 adult (18+).
    3. Proceed.
* **Expected Result:** Booking allowed when at least one adult included.

---

### **TC13 – Adult-only booking**

* **ID:** TC13
* **Description:** Validate booking works normally with only adults.
* **Preconditions:** Passengers all 18+.
* **Steps:**

    1. Add adult passengers only.
    2. Book flight.
* **Expected Result:** Booking successful.

---

### **TC14 – Multiple Rules Applied Simultaneously**

* **ID:** TC14
* **Description:** Validate system behavior when multiple rules apply to a single passenger (e.g., a Romanian national under 12 flying to/from Romania).
* **Preconditions:** Passenger Nationality = Romanian, Age = 11, Route = Bucharest → Madrid.
* **Steps:**
    1.  Add passenger age = 11, nationality = Romanian.
    2.  Select route to/from Romania.
    3.  Try to proceed without adding an adult.
* **Expected Result:** The system blocks the booking and provides a clear, correct error message (e.g., "Children under 12 must travel with an adult" or a combined message).

---

### **TC15 – Non-Relevant Nationality on Specific Route**

* **ID:** TC15
* **Description:** Validate that a non-Italian national under 14 can travel alone on an Italy route, as long as they meet the general rule.
* **Preconditions:** Passenger Nationality = Spanish, Age = 13, Route = Rome → Milan.
* **Steps:**
    1.  Add passenger age = 13, nationality = Spanish.
    2.  Select route to/from Italy.
    3.  Try to book alone.
* **Expected Result:** Booking allowed. The Italian national rule should not apply.

---

### **TC16 – Combined Nationality and Connecting Flight Rule**

* **ID:** TC16
* **Description:** Validate a minor subject to a nationality rule on a connecting flight.
* **Preconditions:** Passenger Nationality = Romanian, Age = 15, Route = connecting flight to/from Romania.
* **Steps:**
    1.  Add passenger age = 15, nationality = Romanian.
    2.  Select a connecting flight to/from Romania.
    3.  Try to book alone.
* **Expected Result:** Booking blocked. Error: "Unaccompanied minors under 16 cannot book connecting flights" or a combined error message.

---

### **TC17 – National on a Non-Relevant Route**

* **ID:** TC17
* **Description:** Validate that nationality-based rules do not apply on non-specific routes.
* **Preconditions:** Passenger Nationality = Italian, Age = 13, Route = Madrid → Paris.
* **Steps:**
    1.  Add passenger age = 13, nationality = Italian.
    2.  Select a direct flight from Madrid to Paris.
    3.  Try to book alone.
* **Expected Result:** Booking allowed. The Italian national rule should not apply.

---

### **TC18 – Invalid Adult Accompaniment**

* **ID:** TC18
* **Description:** Validate that a passenger under 18 is not considered a valid adult for accompaniment.
* **Preconditions:** Passenger 1 = Child < 12, Passenger 2 = Teenager (17 years old).
* **Steps:**
    1.  Add passenger age = 11.
    2.  Add passenger age = 17.
    3.  Try to proceed with the booking.
* **Expected Result:** Booking blocked. The system should require a passenger who is 18 years or older to act as the accompanying adult.