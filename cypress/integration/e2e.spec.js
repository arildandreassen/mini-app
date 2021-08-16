describe("e2e tests for the app", () => {
  beforeEach("Should visit calculator page", () => {
    cy.visit("/calculator");
  });
  it("Should calculate according to the acceptance criteria", () => {
    cy.get("#smallDogs").clear().type("5");
    cy.get("#mediumDogs").clear().type("3");
    cy.get("#largeDogs").clear().type("7");
    cy.get("#leftOverFood").clear().type("17");
    cy.get(".calculateButton").click();
    cy.get("#result").should("have.text", "363.6 lb");
  });

  it("Should calculate small dogs with no left over food", () => {
    cy.get("#smallDogs").clear().type("30");
    cy.get(".calculateButton").click();
    cy.get("#result").should("have.text", "360 lb");
  });

  it("Should calculate medium dogs with no left over food", () => {
    cy.get("#mediumDogs").clear().type("30");
    cy.get(".calculateButton").click();
    cy.get("#result").should("have.text", "720 lb");
  });

  it("Should calculate large dogs with no left over food", () => {
    cy.get("#largeDogs").clear().type("30");
    cy.get(".calculateButton").click();
    cy.get("#result").should("have.text", "1080 lb");
  });

  it("Should notify the user if no dogs are entered", () => {
    cy.get(".calculateButton").click();
    cy.get("#result").should("have.text", "There are no dogs!");
  });

  it("Should notify if there are too many small dogs", () => {
    cy.get("#smallDogs").clear().type("31");
    cy.get(".calculateButton").click();
    cy.get("#result").should("have.text", "There are too many dogs!");
  });

  it("Should notify if there are too many medium dogs", () => {
    cy.get("#mediumDogs").clear().type("31");
    cy.get(".calculateButton").click();
    cy.get("#result").should("have.text", "There are too many dogs!");
  });

  it("Should notify if there are too many large dogs", () => {
    cy.get("#largeDogs").clear().type("31");
    cy.get(".calculateButton").click();
    cy.get("#result").should("have.text", "There are too many dogs!");
  });

  it("Should correctly calculate after initial error", () => {
    cy.get("#smallDogs").clear().type("11");
    cy.get("#mediumDogs").clear().type("10");
    cy.get("#largeDogs").clear().type("10");
    cy.get(".calculateButton").click();
    cy.get("#result").should("have.text", "There are too many dogs!");
    cy.get("#smallDogs").clear().type("10");
    cy.get(".calculateButton").click();
    cy.get("#result").should("have.text", "720 lb");
  });

  it("Should not calculate small dogs if numbers are not entered", () => {
    cy.get("#smallDogs").clear().type("hello world");
    cy.get(".calculateButton").click();
    cy.get("#result").should("have.text", "Please enter only numbers");
  });

  it("Should not calculate medium dogs if numbers are not entered", () => {
    cy.get("#mediumDogs").clear().type("hello world");
    cy.get(".calculateButton").click();
    cy.get("#result").should("have.text", "Please enter only numbers");
  });

  it("Should not calculate large dogs if numbers are not entered", () => {
    cy.get("#largeDogs").clear().type("hello world");
    cy.get(".calculateButton").click();
    cy.get("#result").should("have.text", "Please enter only numbers");
  });

  it("Should not calculate left over food if numbers are not entered", () => {
    cy.get("#leftOverFood").clear().type("hello world");
    cy.get(".calculateButton").click();
    cy.get("#result").should("have.text", "Please enter only numbers");
  });

  it("Should calculate small dogs if other values are blank", () => {
    cy.get("#smallDogs").clear().type("1");
    cy.get("#mediumDogs").clear();
    cy.get("#largeDogs").clear();
    cy.get("#leftOverFood").clear();
    cy.get(".calculateButton").click();
    cy.get("#result").should("have.text", "12 lb");
  });

  it("Should calculate medium dogs if other values are blank", () => {
    cy.get("#smallDogs").clear();
    cy.get("#mediumDogs").clear().type("1");
    cy.get("#largeDogs").clear();
    cy.get("#leftOverFood").clear();
    cy.get(".calculateButton").click();
    cy.get("#result").should("have.text", "24 lb");
  });

  it("Should calculate large dogs if other values are blank", () => {
    cy.get("#smallDogs").clear();
    cy.get("#mediumDogs").clear();
    cy.get("#largeDogs").clear().type("1");
    cy.get("#leftOverFood").clear();
    cy.get(".calculateButton").click();
    cy.get("#result").should("have.text", "36 lb");
  });

  it("Should not calculate small dogs if negative numbers are entered", () => {
    cy.get("#smallDogs").clear().type("-1");
    cy.get(".calculateButton").click();
    cy.get("#result").should("have.text", "Please enter only positive numbers");
  });

  it("Should not calculate medium dogs if negative numbers are entered", () => {
    cy.get("#mediumDogs").clear().type("-1");
    cy.get(".calculateButton").click();
    cy.get("#result").should("have.text", "Please enter only positive numbers");
  });

  it("Should not calculate large dogs if negative numbers are entered", () => {
    cy.get("#largeDogs").clear().type("-1");
    cy.get(".calculateButton").click();
    cy.get("#result").should("have.text", "Please enter only positive numbers");
  });

  it("Should not calculate left over food if negative numbers are entered", () => {
    cy.get("#leftOverFood").clear().type("-1");
    cy.get(".calculateButton").click();
    cy.get("#result").should("have.text", "Please enter only positive numbers");
  });

  it("Should return 0 lb if there is more left over food than needed", () => {
    cy.get("#smallDogs").clear().type("5");
    cy.get("#leftOverFood").clear().type("100");
    cy.get(".calculateButton").click();
    cy.get("#result").should("have.text", "0 lb");
  });
});
